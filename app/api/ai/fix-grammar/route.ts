import { NextResponse } from "next/server";
import { runAI } from "@/lib/ai";

export async function POST(req: Request) {
  const { text } = await req.json();

  const prompt = `
Fix the grammar, punctuation, and clarity of the following text.
Rules:
- Do NOT change the tone
- Do NOT rewrite the meaning
- Do NOT expand or shorten the text
- Only correct grammar, punctuation, and clarity

TEXT:
${text}
  `;

  const result = await runAI(prompt);

  return NextResponse.json({ result });
}
