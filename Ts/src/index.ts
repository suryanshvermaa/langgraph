import { HumanMessage } from "@langchain/core/messages";
import { getAgent } from "./ReactAgent"


async function call(prompt:string){
   const agent=await getAgent();
   const agentFinalState = await agent.invoke(
           { messages: [new HumanMessage(prompt)] },
           { configurable: { thread_id: "42" } },
         );
         console.log(
           agentFinalState.messages[agentFinalState.messages.length - 1].content,
       );
}
(async function(){
   await call("My name is suryansh?");
   await call("what is 2+2?");
   await call("Who i am?");
})()