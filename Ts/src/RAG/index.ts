import {ChatPromptTemplate} from "@langchain/core/prompts";
import { RunnableSequence } from "@langchain/core/runnables";
import { StringOutputParser } from "@langchain/core/output_parsers";
import { formatDocumentsAsString } from "langchain/util/document";
import { MemoryVectorStore } from "langchain/vectorstores/memory";
import { TextLoader } from "langchain/document_loaders/fs/text";
import { RecursiveCharacterTextSplitter } from "langchain/text_splitter";
import path = require("path");
import { embeddings, llm } from "../config/langchain";

function delay(ms: number): Promise<void> {
    return new Promise(resolve => setTimeout(resolve, ms));
}

interface IEmbeddings{
    text: string,
    embedding: Array<number>
}

export async function main(){
    const textSplitter=new RecursiveCharacterTextSplitter({
        chunkSize: 60,
        chunkOverlap: 6
    })
    const loader = new TextLoader(path.resolve(__dirname,"../../document.txt"));
    const docs = await loader.load();
    const splits=await textSplitter.splitDocuments(docs);
    const embedObject:Array<IEmbeddings>=[];
    for(const split of splits){
        const embed=await embeddings.embedQuery(split.pageContent);
        embedObject.push({embedding:embed,text:split.pageContent});
        await delay(1000);
    }
    const documents=embedObject.map((item)=>item.text);
    const embs=embedObject.map((item)=>item.embedding);
    return {documents,embs};
    // const vectorStore=await MemoryVectorStore.fromDocuments(splits,embeddings);
    // const retriver=vectorStore.asRetriever();

//     const prompt=ChatPromptTemplate.fromTemplate(`
//         You are an expert assistant. Answer the user's question based only on the following context:
//         {context}
//         Question: {question}
//     `)

//     const ragChain= RunnableSequence.from([
//         {
//             constext: retriver.pipe(formatDocumentsAsString),
//             quetion: (input:any)=>input.question,
//         },
//         prompt,
//         llm,
//         new StringOutputParser(),
//     ])

// console.log("--- 5. Asking a question ---");
//   const question = "What is Chlorofil?";
//   console.log(`\nAsking: ${question}`);

//   // Invoke the chain with the question
//   const answer = await ragChain.invoke({ question });

//   console.log("\nAnswer:");
//   console.log(answer);
}  
