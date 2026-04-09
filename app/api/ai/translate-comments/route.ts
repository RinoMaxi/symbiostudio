import { NextResponse } from "next/server";
import { runAI } from "@/lib/ai";

export async function POST(req: Request) {
  const { code, targetLanguage } = await req.json();

  const prompt = `
Translate ONLY the comments in the following code into ${targetLanguage}.
Do NOT modify any code.
Do NOT rewrite variable names.
Do NOT change formatting.
Do NOT add explanations.

Return the full code with translated comments.

CODE:
${code}
  `;

  const result = await runAI(prompt);

  return NextResponse.json({ result });
}
