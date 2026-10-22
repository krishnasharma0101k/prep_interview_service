import { END, START, StateGraph } from "@langchain/langgraph";
import InterviewState from "./state.js";
import {
  feedbackNode,
  interviewNode,
  summaryNode,
} from "./nodes.js";

function router(state) {
  switch (state.action) {
    case "start":
      return "interviewAgent";
    case "feedback":
      return "feedbackAgent";
    default:
      return END;
  }
}

function feedbackRouter(state) {
  return state.completed ? "summaryAgent" : END;
}

const graph = new StateGraph(InterviewState)
  .addNode("interviewAgent", interviewNode)
  .addNode("feedbackAgent", feedbackNode)
  .addNode("summaryAgent", summaryNode)
  .addConditionalEdges(START, router, {
    interviewAgent: "interviewAgent",
    feedbackAgent: "feedbackAgent",
    [END]: END,
  })
  .addEdge("interviewAgent", END)
  .addConditionalEdges("feedbackAgent", feedbackRouter, {
    summaryAgent: "summaryAgent",
    [END]: END,
  })
  .addEdge("summaryAgent", END)
  .compile();

export default graph;