import { NextResponse } from "next/server";
import { readFile, writeFile } from "fs/promises";
import path from "path";

const filePath = path.join(process.cwd(), "app/data/news.json");

export async function GET() {
  const data = await readFile(filePath, "utf8");
  return NextResponse.json(JSON.parse(data));
}

export async function POST(req: Request) {
  const apiKey = req.headers.get("x-api-key");
  if (apiKey !== process.env.NEWS_API_KEY) {
    return new NextResponse("Unauthorized", { status: 401 });
  }

  const body = await req.json();
  await writeFile(filePath, JSON.stringify(body, null, 2), "utf8");

  return new NextResponse("OK", { status: 200 });
}
