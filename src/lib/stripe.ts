import Stripe from "stripe";

export const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!, {
  apiVersion: "2026-04-22.dahlia",
});

export const PRICE_IDS: Record<string, Record<string, string>> = {
  premium: {
    monthly: process.env.STRIPE_PREMIUM_MONTHLY_PRICE_ID!,
    yearly: process.env.STRIPE_PREMIUM_YEARLY_PRICE_ID!,
  },
  elite: {
    monthly: process.env.STRIPE_ELITE_MONTHLY_PRICE_ID!,
    yearly: process.env.STRIPE_ELITE_YEARLY_PRICE_ID!,
  },
};

export type Plan = "free" | "premium" | "elite";
export type BillingPeriod = "monthly" | "yearly";
