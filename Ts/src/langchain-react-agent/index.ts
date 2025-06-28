import llm from "../config/langchain";
import { initializeAgentExecutorWithOptions } from "langchain/agents";
import { dateTimetool } from "../tools/currentdateTime";

const tools = [dateTimetool];
const callLLm=async()=>{

const executor = await initializeAgentExecutorWithOptions(tools, llm, {
    agentType: "zero-shot-react-description",
});

    const result = await executor.run(
    "What is the current date and day?"
    );
    console.log(result);
}
