import { NextResponse } from "next/server";
import { runAI } from "@/lib/ai";

export async function POST(req: Request) {
  const { text, tone } = await req.json();

  const prompt = `
Rewrite the following text in a ${tone} tone.
Preserve the meaning. Improve clarity, flow, and readability.
Do NOT add new information.

TEXT:
${text}
  `;

  const improved = await runAI(prompt);

  return NextResponse.json({ improved });
}
