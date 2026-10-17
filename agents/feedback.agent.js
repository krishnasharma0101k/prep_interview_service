import llm from "../config/llm.js"
import feedbackPrompt from "../prompt/feedbackPrompt.js"


export const feedbackAgent = async (data) => {
    try {
      
        const  prompt = feedbackPrompt(data)

        const responce = await llm.invoke(prompt)

        const cleaned = responce.content
        .replace(/```json/g, "")
        .replace(/```/g, "")
        .trim()
        return JSON.parse(cleaned)

    } catch (error) {
        console.log("feedback Agent Parse Error");
        console.log(responce.content);


        throw new Error("Failed to generate feedback")
    }
}