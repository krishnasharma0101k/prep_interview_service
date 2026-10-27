
import llm from "../config/llm.js";
import feedbackPrompt from "../prompt/feedbackPrompt.js";

export const feedbackAgent = async (data) => {
  let response;

  try {
    const prompt = feedbackPrompt(data);
    response = await llm.invoke(prompt);

    const cleaned = response.content
      .replace(/```json/gi, "")
      .replace(/```/g, "")
      .trim();

    const feedback = JSON.parse(cleaned);
 

    return feedback;
  } catch (error) {
    console.error("Feedback agent error:", error.message);
    console.error("AI response:", response?.content);
    throw error;
  }
};
