import { NextResponse } from "next/server";
import { runAI } from "@/lib/ai";

export async function POST(req: Request) {
  const { text } = await req.json();

  const prompt = `
Refactor the following code.
Rules:
- Keep the same functionality
- Improve readability and structure
- Use modern best practices
- Do NOT add new features
- Do NOT remove required logic
- Do NOT invent missing variables or imports
- Only output the refactored code, nothing else

CODE:
${text}
  `;

  const result = await runAI(prompt);

  return NextResponse.json({ result });
}
