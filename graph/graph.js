import { END, START, StateGraph } from "@langchain/langgraph"
import InterviewState from "./state.js"
import { feedbackNode, interviewNode, summaryNode } from "./nodes.js"

function router(state) {
    switch (state.mode) {          // <- change "mode" to your real state field
        case "start":
            return "interviewAgent"
        case "feedback":
            return "feedbackAgent"
        default:
            return END
    }
}

function feedbackRouter(state) {
    if (state.completed) {
        return "summaryAgent"
    }
    return END
}

const graph = new StateGraph(InterviewState)
    // nodes
    .addNode("interviewAgent", interviewNode)
    .addNode("feedbackAgent", feedbackNode)
    .addNode("summaryAgent", summaryNode)

    // entry routing
    .addConditionalEdges(START, router, {
        interviewAgent: "interviewAgent",
        feedbackAgent: "feedbackAgent",
        [END]: END,
    })
    .addEdge("interviewAgent", END)

    // after feedback: summarize if finished, otherwise stop
    .addConditionalEdges("feedbackAgent", feedbackRouter, {
        summaryAgent: "summaryAgent",
        [END]: END,
    })
    .addEdge("summaryAgent", END)
    .compile()

export default graph