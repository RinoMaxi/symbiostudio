import { NextResponse } from "next/server";
import { runAI } from "@/lib/ai";

export async function POST(req: Request) {
  const { text, mode } = await req.json();

  const prompt = `
Rewrite the following text to be ${mode}.
Preserve meaning. Improve clarity. Do not add new information.

TEXT:
${text}
  `;

  const result = await runAI(prompt);

  return NextResponse.json({ result });
}
