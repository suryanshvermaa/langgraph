import { END, MemorySaver } from "@langchain/langgraph";
import { dateTimetool } from "../tools/currentdateTime";
import * as hub from "langchain/hub/node";
import { createReactAgent } from "@langchain/langgraph/prebuilt";
import llm from "../config/langchain";
import { Runnable, RunnableConfig } from "@langchain/core/runnables";

const agentCheckPointer=new MemorySaver();

const tools=[dateTimetool]
let reactPrompt:Runnable<any, any, RunnableConfig<Record<string, any>>>|null=null;
const getReactPrompt=async()=>{
    if(reactPrompt) return reactPrompt;
    else {
        reactPrompt=await hub.pull("hwchase17/react", {
            includeModel: true
        });
        return reactPrompt;
    }
}
const getAgent=async()=>{
    const agent=createReactAgent({
        llm,
        tools,
        checkpointSaver:agentCheckPointer
    });
    return agent;
}

export {getAgent};