import { NextResponse } from "next/server";
import { createServerSupabase } from "@/lib/supabase-server";

const IMAGE_MAX = 10 * 1024 * 1024;
const DOC_MAX = 25 * 1024 * 1024;
const ALLOWED_TYPES = new Set([
  "image/jpeg",
  "image/png",
  "image/gif",
  "image/webp",
  "application/pdf",
  "application/msword",
  "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
]);

export async function POST(request: Request) {
  let formData: FormData;
  try {
    formData = await request.formData();
  } catch {
    return NextResponse.json({ error: "Invalid form data" }, { status: 400 });
  }

  const file = formData.get("file") as File | null;
  if (!file) {
    return NextResponse.json({ error: "No file provided" }, { status: 400 });
  }

  if (!ALLOWED_TYPES.has(file.type)) {
    return NextResponse.json({ error: "File type not allowed" }, { status: 400 });
  }

  const isImage = file.type.startsWith("image/");
  const maxSize = isImage ? IMAGE_MAX : DOC_MAX;
  if (file.size > maxSize) {
    return NextResponse.json(
      { error: `File exceeds ${isImage ? "10MB" : "25MB"} limit` },
      { status: 400 }
    );
  }

  const supabase = createServerSupabase();
  const ext = file.name.split(".").pop() ?? "bin";
  const path = `${Date.now()}-${Math.random().toString(36).slice(2)}.${ext}`;

  const { error } = await supabase.storage
    .from("post-media")
    .upload(path, file, { contentType: file.type, upsert: false });

  if (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }

  const {
    data: { publicUrl },
  } = supabase.storage.from("post-media").getPublicUrl(path);

  return NextResponse.json({
    url: publicUrl,
    name: file.name,
    type: isImage ? "image" : "document",
  });
}
