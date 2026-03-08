import { GoogleGenAI } from "@google/genai";

const apiKey = process.env.GEMINI_API_KEY || '';
const ai = new GoogleGenAI({ apiKey });

export const getRatControlAdvice = async (userQuery: string): Promise<string> => {
  if (!apiKey) {
    return "System Error: API Key missing. Please contact Kola directly.";
  }

  try {
    const response = await ai.models.generateContent({
      model: 'gemini-3-flash-preview',
      contents: userQuery,
      config: {
        systemInstruction: `You are the AI Safety Advisor for 'Kola's Rat P Supply' in Tembisa, South Africa.
        Your persona is professional, slightly edgy, and extremely knowledgeable about pest control.
        The business sells rat poison for R15 (single) and R150 (monthly subscription).
        Address: 325 Sedibeng Section, Tembisa. Contact: 0608564191.
        
        Rules:
        1. Warn users about safety (pets/children) if they ask about usage.
        2. Keep answers short, punchy, and persuasive.
        3. Use a tone that fits a 'black and red' heavy metal aesthetic website.
        4. If the user asks about prices, quote the R15/item and R150/month prices directly.`,
      },
    });
    
    return response.text || "Connection interrupted. The rats are chewing the cables.";
  } catch (error) {
    console.error("Gemini API Error:", error);
    return "Error connecting to HQ. Call 0608564191 for immediate assistance.";
  }
};