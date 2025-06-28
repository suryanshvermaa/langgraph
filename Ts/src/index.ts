import llm from "./config/langchain";
import readline from "node:readline";

async function callLlm(prompt:string){
    const result=await llm.invoke(prompt);
    console.log(result.content);
}
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

console.log("LLM:");

rl.on("line", async (input:string) => {
    if (input.toLowerCase() === "exit") {
        console.log("Exiting...");
        rl.close();
        process.exit();
    }

    try {
        await callLlm(input);
    } catch (error) {
        console.error("Error invoking LLM:", error);
    }
});