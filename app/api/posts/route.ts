import { NextResponse } from "next/server";
import { createServerSupabase } from "@/lib/supabase-server";

export async function GET(request: Request) {
  console.log("[posts GET] handler called");
  const { searchParams } = new URL(request.url);
  const spaceFilter = searchParams.get("space");

  let supabase: ReturnType<typeof createServerSupabase>;
  try {
    supabase = createServerSupabase();
  } catch (e) {
    console.error("[posts GET] createServerSupabase threw:", e);
    return NextResponse.json({ error: "Supabase client init failed" }, { status: 500 });
  }

  let query = supabase.from("posts").select("*").order("created_at", { ascending: false });
  if (spaceFilter) query = query.eq("space", spaceFilter);

  const { data, error, status, statusText } = await query;

  if (error) {
    console.error("[posts GET] Supabase error:", JSON.stringify({ code: error.code, message: error.message, details: error.details, hint: error.hint, status, statusText }));
    return NextResponse.json({ error: error.message }, { status: 500 });
  }

  console.log("[posts GET] success, row count:", data?.length ?? 0);
  return NextResponse.json(data);
}

export async function POST(request: Request) {
  console.log("[posts POST] handler called");
  const body = await request.json();
  console.log("[posts POST] body:", JSON.stringify({ author: body.author, space: body.space, contentLength: body.content?.length }));

  if (!body.content?.trim()) {
    return NextResponse.json({ error: "Content is required" }, { status: 400 });
  }

  let supabase;
  try {
    supabase = createServerSupabase();
  } catch (e) {
    console.error("[posts POST] createServerSupabase threw:", e);
    return NextResponse.json({ error: "Supabase client init failed" }, { status: 500 });
  }

  const { data, error, status, statusText } = await supabase
    .from("posts")
    .insert({
      author: body.author ?? "anonymous",
      content: body.content.trim(),
      space: body.space ?? "General",
    })
    .select()
    .single();

  if (error) {
    console.error("[posts POST] Supabase error:", JSON.stringify({ code: error.code, message: error.message, details: error.details, hint: error.hint, status, statusText }));
    return NextResponse.json({ error: error.message }, { status: 500 });
  }

  console.log("[posts POST] success, inserted id:", data?.id);
  return NextResponse.json(data, { status: 201 });
}
