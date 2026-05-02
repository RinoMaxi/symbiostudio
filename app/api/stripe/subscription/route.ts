import { NextResponse } from "next/server";
import { auth } from "@clerk/nextjs/server";
import { createServerSupabase } from "@/lib/supabase-server";

export async function GET() {
  const { userId } = await auth();
  if (!userId) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const supabase = createServerSupabase();
  const { data } = await supabase
    .from("subscriptions")
    .select("plan, billing_period, status, current_period_end")
    .eq("clerk_user_id", userId)
    .single();

  return NextResponse.json(
    data ?? { plan: "free", billing_period: null, status: "active", current_period_end: null }
  );
}
