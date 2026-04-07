import { NextResponse } from "next/server";
import { runAI } from "@/lib/ai";

export async function POST(req: Request) {
  const { text } = await req.json();

  const prompt = `
  Summarize the following content in 5 bullet points.
  Keep it clear, concise, and helpful.

  CONTENT:
  ${text}
  `;

  const summary = await runAI(prompt);

  return NextResponse.json({ summary });
}
