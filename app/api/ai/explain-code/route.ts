import { NextResponse } from "next/server";
import { runAI } from "@/lib/ai";

export async function POST(req: Request) {
  const { text } = await req.json();

  const prompt = `
Explain the following code line by line.
For each line:
- Say what it does
- Say why it matters
- Keep explanations clear and accurate
- Do NOT rewrite the code
- Do NOT add new functionality

CODE:
${text}
  `;

  const result = await runAI(prompt);

  return NextResponse.json({ result });
}
