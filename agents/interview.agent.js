import hrInterviewPrompt from "../prompt/hrInterviewPrompt.js"
import technicalInterviewPrompt from "../prompt/technicalInterviewPrompt.js"
import llm from "../config/llm.js"

export const interviewAgent = async (data) => {
    try {
      
        const  prompt = data.type?.toLowerCase() === "hr" ? hrInterviewPrompt() : technicalInterviewPrompt(data)

        const responce = await llm.invoke(prompt)

        const cleaned = responce.content
        .replace(/```json/g, "")
        .replace(/```/g, "")
        .trim()
        return JSON.parse(cleaned)

    } catch (error) {
        console.log("Interview Agent Parse Error");
        console.log(responce.content);


        throw new Error("Failed to generate interview questions.")
    }
}