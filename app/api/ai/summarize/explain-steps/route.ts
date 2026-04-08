import { NextResponse } from "next/server";
import { runAI } from "@/lib/ai";

export async function POST(req: Request) {
  const { text } = await req.json();

  const prompt = `
Explain the following text step by step.
Use numbered steps (1., 2., 3., ...).
Each step should be clear and concise.
Do NOT add new information, only unpack the logic.

TEXT:
${text}
  `;

  const result = await runAI(prompt);

  return NextResponse.json({ result });
}
