import { Annotation } from "@langchain/langgraph"

const InterviewState =  Annotation.Root({
     action: Annotation(),

     type: Annotation(),

     role: Annotation(),
     
     useResume: Annotation(),
     
     resume: Annotation(),

     questions: Annotation(),

     question: Annotation(),

     aswer: Annotation(),

     difficulty: Annotation(),

     feednack: Annotation(),

     report: Annotation(),

     completed: Annotation(),

})

export default InterviewState
