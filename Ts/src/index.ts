import llm from "./config/langchain";
import ResponseFormatterSchema from "./structured-output";

async function call(){
   const structured_llm=llm.withStructuredOutput(ResponseFormatterSchema);
   console.log(((await structured_llm.invoke("Tell me about france."))));
}
call()