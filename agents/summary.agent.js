import llm from "../config/llm.js"
import summaryPrompt from "../prompt/summaryPrompt.js"


export const summaryAgent = async (data) => {
    try {
      
        const  prompt = summaryPrompt(data)

        const responce = await llm.invoke(prompt)

        const cleaned = responce.content
        .replace(/```json/g, "")
        .replace(/```/g, "")
        .trim()
        return JSON.parse(cleaned)

    } catch (error) {
        console.log("summary Agent Parse Error");
        console.log(responce.content);


        throw new Error("Failed to generate summary")
    }
}