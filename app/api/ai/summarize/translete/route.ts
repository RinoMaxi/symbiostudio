import { NextResponse } from "next/server";
import { runAI } from "@/lib/ai";

export async function POST(req: Request) {
  const { text, target } = await req.json();

  const prompt = `
  Translate the following text into ${target}.
  Keep meaning accurate. Do not add anything.

  TEXT:
  ${text}
  `;

  const translated = await runAI(prompt);

  return NextResponse.json({ translated });
}
