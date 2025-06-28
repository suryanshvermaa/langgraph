import { MemorySaver } from "@langchain/langgraph";
import { HumanMessage } from "@langchain/core/messages";
import {createReactAgent} from "@langchain/langgraph/prebuilt";
import llm from "../config/langchain";
import { dateTimetool } from "../tools/currentdateTime";

const agentCheckPointer=new MemorySaver();

const agent=createReactAgent({
    llm:llm,
    tools:[dateTimetool],
    checkpointSaver:agentCheckPointer,
})

async function callLLm(prompt:string){
    const agentFinalState = await agent.invoke(
        { messages: [new HumanMessage(prompt)] },
        { configurable: { thread_id: "42" } },
      );
      console.log(
        agentFinalState.messages[agentFinalState.messages.length - 1].content,
    );
}
export default callLLm;