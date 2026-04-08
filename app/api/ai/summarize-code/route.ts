import { NextResponse } from "next/server";
import { runAI } from "@/lib/ai";

export async function POST(req: Request) {
  const { text } = await req.json();

  const prompt = `
Summarize the following code.
Rules:
- Provide a clear, concise explanation of what the code does
- Focus on purpose, flow, and key logic
- Do NOT rewrite the code
- Do NOT add new features
- Do NOT speculate about missing context
- Output only the summary, no extra commentary

CODE:
${text}
  `;

  const result = await runAI(prompt);

  return NextResponse.json({ result });
}
