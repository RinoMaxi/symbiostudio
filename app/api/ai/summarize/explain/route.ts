import { NextResponse } from "next/server";
import { runAI } from "@/lib/ai";

export async function POST(req: Request) {
  const { text } = await req.json();

  const prompt = `
  Explain the following text clearly and simply.
  Break down the meaning, context, and purpose.
  Avoid adding new information.

  TEXT:
  ${text}
  `;

  const explanation = await runAI(prompt);

  return NextResponse.json({ explanation });
}
