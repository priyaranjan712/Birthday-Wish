
import { GoogleGenAI, Type } from "@google/genai";

const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });

export const generatePersonalizedGreeting = async (name: string, sender: string) => {
  try {
    const response = await ai.models.generateContent({
      model: 'gemini-3-flash-preview',
      contents: `Write a very polite, humble, and poetic birthday greeting from ${sender} to ${name}. 
                 Context: They are very close friends (almost like partners), but have had 2 months of silence. 
                 It is Jan 14th. He gave her space and wants to reconnect gently without pressure. 
                 The tone should be: Respectful, valuing her importance, admiring her personality, and humble. 
                 Avoid being pushy or demanding an explanation for the silence.`,
      config: {
        responseMimeType: "application/json",
        responseSchema: {
          type: Type.OBJECT,
          properties: {
            poem: {
              type: Type.STRING,
              description: "A 4-line poetic stanza about time and connection."
            },
            message: {
              type: Type.STRING,
              description: "A humble letter-style message."
            },
            wish: {
              type: Type.STRING,
              description: "A beautiful one-sentence birthday wish."
            }
          },
          required: ["poem", "message", "wish"]
        }
      }
    });

    return JSON.parse(response.text || "{}");
  } catch (e) {
    console.error("Failed to parse AI response", e);
    return {
      poem: "Across the quiet time that passed,\nA bond remains, forever cast.\nOn this day of birth and light,\nYour spirit shines so warm and bright.",
      message: "I wanted to send a simple note to let you know I'm thinking of you on your special day. I've valued the space we've had, but I couldn't let today pass without acknowledging how much of a wonderful person you are. Happy Birthday, Iti.",
      wish: "May your day be as beautiful and peaceful as your heart."
    };
  }
};
