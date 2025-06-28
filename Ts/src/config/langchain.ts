import {ChatGoogleGenerativeAI} from "@langchain/google-genai";
import "dotenv/config";

const llm=new ChatGoogleGenerativeAI({
    model:"gemini-2.0-flash",
    apiKey:process.env.GOOGLE_API_KEY!
})

export default llm;