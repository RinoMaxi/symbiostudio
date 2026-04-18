import OpenAI from "openai";
import Groq from "groq-sdk";

export async function runAI(prompt: string) {
  const groq = new Groq({ apiKey: process.env.GROQ_API_KEY! });
  const openai = new OpenAI({ apiKey: process.env.OPENAI_API_KEY! });

  try {
    const groqRes = await groq.chat.completions.create({
      model: "mixtral-8x7b-32768",
      messages: [{ role: "user", content: prompt }],
      temperature: 0.4,
    });

    return groqRes.choices[0].message.content;
  } catch (err) {
    console.warn("Groq failed, falling back to OpenAI:", err);

    // Fallback to OpenAI
    const openaiRes = await openai.chat.completions.create({
      model: "gpt-4o-mini",
      messages: [{ role: "user", content: prompt }],
      temperature: 0.4,
    });

    return openaiRes.choices[0].message.content;
  }
}
