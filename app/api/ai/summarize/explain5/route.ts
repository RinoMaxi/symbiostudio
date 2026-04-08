import { NextResponse } from "next/server";
import { runAI } from "@/lib/ai";

export async function POST(req: Request) {
  const { text } = await req.json();

  const prompt = `
Explain the following text like I'm 5 years old.
Use simple words. Use short sentences.
Do NOT add new information. Just simplify.

TEXT:
${text}
  `;

  const result = await runAI(prompt);

  return NextResponse.json({ result });
}
