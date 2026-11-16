import express from "express"
import { getInterview, startInterview, submitAnswer, getAllInterview } from "../controller/interview.controller.js"


const interviewRouter = express.Router()

interviewRouter.post("/start", startInterview)
interviewRouter.post("/answer", submitAnswer)
interviewRouter.get("/:id", getInterview)
interviewRouter.get("/all", getAllInterview)


export default interviewRouter