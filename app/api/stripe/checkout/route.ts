import { NextRequest, NextResponse } from "next/server";
import { auth, currentUser } from "@clerk/nextjs/server";
import { stripe, PRICE_IDS } from "@/lib/stripe";
import { createServerSupabase } from "@/lib/supabase-server";

export async function POST(req: NextRequest) {
  const { userId } = await auth();
  if (!userId) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const { plan, billingPeriod } = await req.json();
  const priceId = PRICE_IDS[plan]?.[billingPeriod];
  if (!priceId) {
    return NextResponse.json({ error: "Invalid plan or billing period" }, { status: 400 });
  }

  const supabase = createServerSupabase();
  const { data: existing } = await supabase
    .from("subscriptions")
    .select("stripe_customer_id")
    .eq("clerk_user_id", userId)
    .single();

  let customerId = existing?.stripe_customer_id as string | undefined;

  if (!customerId) {
    const user = await currentUser();
    const email = user?.emailAddresses?.[0]?.emailAddress;
    const customer = await stripe.customers.create({
      email,
      metadata: { clerk_user_id: userId },
    });
    customerId = customer.id;
  }

  const appUrl = process.env.NEXT_PUBLIC_APP_URL || "http://localhost:3000";

  const session = await stripe.checkout.sessions.create({
    customer: customerId,
    mode: "subscription",
    line_items: [{ price: priceId, quantity: 1 }],
    subscription_data: {
      metadata: { clerk_user_id: userId, plan, billing_period: billingPeriod },
    },
    success_url: `${appUrl}/dashboard?subscription=success`,
    cancel_url: `${appUrl}/pricing`,
    metadata: { clerk_user_id: userId, plan, billing_period: billingPeriod },
  });

  return NextResponse.json({ url: session.url });
}
