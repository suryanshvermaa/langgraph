import {tool} from "@langchain/core/tools";
import {z} from "zod"
const getCurrDateTime=async()=>{
    return (new Date()).toDateString();
}
export const dateTimetool=tool(getCurrDateTime,{
    name:"getCurrDateTime",
    description:"returns current date and time",
    schema: z.object({})
});