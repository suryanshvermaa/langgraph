import {DynamicTool} from "@langchain/core/tools";

const getCurrDateTime=async()=>{
    return (new Date()).toDateString();
}
export const dateTimetool=new DynamicTool({
    name:"getCurrDateTime",
    description:"returns current date and time",
    func:async()=>{
        return await getCurrDateTime();
    },
});
