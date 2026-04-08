import { NextResponse } from "next/server";
import { runAI } from "@/lib/ai";

export async function POST(req: Request) {
  const { text } = await req.json();

  const prompt = `
  Rewrite the following text. 
  Make it clearer, more concise, and more professional.
  Preserve the meaning.

  TEXT:
  ${text}
  `;

  const rewritten = await runAI(prompt);

  return NextResponse.json({ rewritten });
}
