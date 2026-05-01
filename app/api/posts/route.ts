import { NextResponse } from "next/server";
import fs from "fs";
import path from "path";

const FILE_PATH = path.join(process.cwd(), "data", "posts.json");

type Post = {
  id: string;
  author: string;
  content: string;
  space: string;
  likes: number;
  comments: number;
  points: number;
  created_at: string;
};

function readPosts(): Post[] {
  if (!fs.existsSync(FILE_PATH)) {
    fs.writeFileSync(FILE_PATH, "[]");
    return [];
  }
  return JSON.parse(fs.readFileSync(FILE_PATH, "utf-8"));
}

function writePosts(posts: Post[]) {
  fs.writeFileSync(FILE_PATH, JSON.stringify(posts, null, 2));
}

export async function GET() {
  const posts = readPosts();
  posts.sort(
    (a, b) => new Date(b.created_at).getTime() - new Date(a.created_at).getTime()
  );
  return NextResponse.json(posts);
}

export async function POST(request: Request) {
  const body = await request.json();

  if (!body.content?.trim()) {
    return NextResponse.json({ error: "Content is required" }, { status: 400 });
  }

  const newPost: Post = {
    id: crypto.randomUUID(),
    author: body.author ?? "anonymous",
    content: body.content.trim(),
    space: body.space ?? "General",
    likes: 0,
    comments: 0,
    points: 5,
    created_at: new Date().toISOString(),
  };

  const posts = readPosts();
  posts.push(newPost);
  writePosts(posts);

  return NextResponse.json(newPost, { status: 201 });
}
