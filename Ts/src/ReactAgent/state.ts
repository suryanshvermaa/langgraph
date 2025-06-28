import { Annotation } from "@langchain/langgraph"

export const simpleState=Annotation.Root({
    count: Annotation<number>({
        reducer:(state)=>(state+1),
        default:()=>0
    })
})

