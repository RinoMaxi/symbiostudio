import { NextRequest, NextResponse } from "next/server";
import Stripe from "stripe";
import { stripe } from "@/lib/stripe";
import { createServerSupabase } from "@/lib/supabase-server";

export async function POST(req: NextRequest) {
  const body = await req.text();
  const sig = req.headers.get("stripe-signature");

  if (!sig) {
    return NextResponse.json({ error: "Missing stripe-signature header" }, { status: 400 });
  }

  let event: Stripe.Event;
  try {
    event = stripe.webhooks.constructEvent(body, sig, process.env.STRIPE_WEBHOOK_SECRET!);
  } catch {
    return NextResponse.json({ error: "Webhook signature verification failed" }, { status: 400 });
  }

  const supabase = createServerSupabase();

  switch (event.type) {
    case "checkout.session.completed": {
      const session = event.data.object as Stripe.Checkout.Session;
      if (session.mode !== "subscription") break;

      const clerkUserId = session.metadata?.clerk_user_id;
      const plan = session.metadata?.plan;
      const billingPeriod = session.metadata?.billing_period ?? "monthly";
      const customerId = session.customer as string;
      const subscriptionId = session.subscription as string;

      if (!clerkUserId || !plan) break;

      const subscription = await stripe.subscriptions.retrieve(subscriptionId);
      const periodEnd = subscription.items.data[0]?.current_period_end;

      await supabase.from("subscriptions").upsert(
        {
          clerk_user_id: clerkUserId,
          stripe_customer_id: customerId,
          stripe_subscription_id: subscriptionId,
          plan,
          billing_period: billingPeriod,
          status: subscription.status,
          current_period_end: periodEnd ? new Date(periodEnd * 1000).toISOString() : null,
          updated_at: new Date().toISOString(),
        },
        { onConflict: "clerk_user_id" }
      );
      break;
    }

    case "customer.subscription.updated": {
      const subscription = event.data.object as Stripe.Subscription;
      const periodEnd = subscription.items.data[0]?.current_period_end;

      await supabase
        .from("subscriptions")
        .update({
          status: subscription.status,
          current_period_end: periodEnd ? new Date(periodEnd * 1000).toISOString() : null,
          updated_at: new Date().toISOString(),
        })
        .eq("stripe_subscription_id", subscription.id);
      break;
    }

    case "customer.subscription.deleted": {
      const subscription = event.data.object as Stripe.Subscription;

      await supabase
        .from("subscriptions")
        .update({
          plan: "free",
          status: "canceled",
          stripe_subscription_id: null,
          current_period_end: null,
          updated_at: new Date().toISOString(),
        })
        .eq("stripe_subscription_id", subscription.id);
      break;
    }

    case "invoice.payment_failed": {
      const invoice = event.data.object as Stripe.Invoice;
      const subscriptionId = (invoice as any).subscription as string | null;
      if (!subscriptionId) break;

      await supabase
        .from("subscriptions")
        .update({ status: "past_due", updated_at: new Date().toISOString() })
        .eq("stripe_subscription_id", subscriptionId);
      break;
    }
  }

  return NextResponse.json({ received: true });
}
