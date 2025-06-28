import {DynamicStructuredTool} from "@langchain/core/tools";
import {z} from "zod"
const getCurrDateTime=async()=>{
    return (new Date()).toDateString();
}
export const dateTimetool=new DynamicStructuredTool({
    name:"getCurrDateTime",
    description:"returns current date and time",
    func:async()=>{
        return await getCurrDateTime();
    },
    schema: z.object({})
});