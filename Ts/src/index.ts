import { HumanMessage } from "@langchain/core/messages";
import { getAgent } from "./ReactAgent"
import client from "./config/db";
import { main } from "./RAG";
import { embeddings } from "./config/langchain";


// async function call(prompt:string){
//    const agent=await getAgent();
//    const agentFinalState = await agent.invoke(
//            { messages: [new HumanMessage(prompt)] },
//            { configurable: { thread_id: "42" } },
//          );
//          console.log(
//            agentFinalState.messages[agentFinalState.messages.length - 1].content,
//        );
// }

async function init() {
   const documentsData=(await main()).documents;
   const ids=(await main()).documents.map((val,idx)=>`id${idx}`);
   const embsData=(await main()).embs;
   const collection=await client.getCollection({
      name:"collection_one"
   })
   // await collection.add({
   //    documents: documentsData,
   //    embeddings: embsData,
   //    ids:ids
   // })
   const results =await collection.query(
      {
         nResults:2,
         queryTexts:["What does chlorofill"],
         queryEmbeddings:[(await embeddings.embedQuery("What does chlorofill"))]
      }
  )
  console.log(results)
}

init();