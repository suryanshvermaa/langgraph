import callLLm from "./langgraph-react-agent";

async function call(){
   await callLLm("My name is suryansh.")
   await callLLm("What is my name?")
   await callLLm("What is current date and day?")
}
call()