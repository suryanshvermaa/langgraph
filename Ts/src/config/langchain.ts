import {ChatGoogleGenerativeAI,GoogleGenerativeAIEmbeddings} from "@langchain/google-genai";
import "dotenv/config";

export const llm=new ChatGoogleGenerativeAI({
    temperature:1,
    model:"gemini-2.0-flash",
    apiKey:process.env.GOOGLE_API_KEY!,
})

export const embeddings=new GoogleGenerativeAIEmbeddings({
    apiKey: process.env.GOOGLE_API_KEY!,
    model:"embedding-001",
})