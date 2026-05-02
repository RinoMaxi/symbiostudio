"use client";

import Image from "next/image";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { useAuth } from "@clerk/nextjs";

type Tier = {
  name: string;
  monthlyPrice: number | null;
  annualPrice: number | null;
  annualNote?: string;
  tagline: string;
  cta: string;
  ctaStyle: "outline" | "fill" | "gold";
  popular?: boolean;
  features: string[];
};

const tiers: Tier[] = [
  {
    name: "Free",
    monthlyPrice: 0,
    annualPrice: 0,
    tagline: "Get started with the Symbio community.",
    cta: "Join Free",
    ctaStyle: "outline",
    features: [
      "Limited AI interactions daily",
      "Access to public Feed",
      "Browse all Spaces",
      "Basic community participation",
      "Earn Symbio points",
      "View Store listings",
    ],
  },
  {
    name: "Premium",
    monthlyPrice: 5,
    annualPrice: 50,
    tagline: "Everything you need to get the most from Symbio.",
    cta: "Start Premium",
    ctaStyle: "fill",
    features: [
      "Unlimited AI sessions",
      "Full Feed access and posting",
      "Join all Spaces",
      "Access private community channels",
      "Premium workshops and events",
      "Enhanced points earning +20%",
      "Early access to new features",
      "Priority support",
    ],
  },
  {
    name: "Elite",
    monthlyPrice: 10,
    annualPrice: 100,
    annualNote: "Save 2 months",
    tagline: "For professionals who want to lead, publish and be recognised.",
    cta: "Go Elite",
    ctaStyle: "gold",
    popular: true,
    features: [
      "Everything in Premium",
      "Elite-only masterclasses",
      "Creator publishing privileges",
      "Points earning +50%",
      "Top Contributor recognition badges",
      "Eligibility for Symbio AI Device rewards",
      "Private mastermind groups",
      "Fastest support — dedicated channel",
    ],
  },
];

function CheckIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" className="shrink-0 mt-0.5">
      <polyline points="20 6 9 17 4 12" />
    </svg>
  );
}

export default function PricingPage() {
  const [annual, setAnnual] = useState(false);
  const [loading, setLoading] = useState<string | null>(null);
  const { isSignedIn } = useAuth();
  const router = useRouter();

  async function handleCheckout(tier: Tier) {
    if (tier.monthlyPrice === 0) {
      router.push(isSignedIn ? "/dashboard" : "/sign-up");
      return;
    }
    if (!isSignedIn) {
      router.push("/sign-in");
      return;
    }
    const plan = tier.name.toLowerCase();
    const billingPeriod = annual ? "yearly" : "monthly";
    const key = `${plan}-${billingPeriod}`;
    setLoading(key);
    try {
      const res = await fetch("/api/stripe/checkout", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ plan, billingPeriod }),
      });
      const data = await res.json();
      if (data.url) window.location.href = data.url;
    } finally {
      setLoading(null);
    }
  }

  return (
    <main className="relative overflow-hidden w-full min-h-screen px-6 py-16 md:px-12 lg:px-24">
      <Image src="/project-2.png" alt="" fill className="absolute inset-0 object-cover object-top" priority />
      <div className="absolute inset-0 bg-black/72" />

      <div className="relative z-10 max-w-5xl mx-auto">

        {/* Header */}
        <div className="text-center mb-4">
          <p className="text-neutral-500 text-xs uppercase tracking-widest mb-4">Membership</p>
          <h1 className="text-4xl text-white tracking-wide mb-4" style={{ fontFamily: "MontserratSemiBold" }}>
            Simple, transparent pricing
          </h1>
          <p className="text-neutral-300 text-base max-w-xl mx-auto leading-relaxed">
            Join the platform where AI professionals, creators and organisations collaborate, learn and build together.
          </p>
        </div>

        {/* Billing toggle */}
        <div className="flex items-center justify-center gap-4 mb-12 mt-8">
          <span className={`text-sm transition ${!annual ? "text-white" : "text-neutral-500"}`}>Monthly</span>
          <button
            onClick={() => setAnnual(!annual)}
            className={`relative w-12 h-6 rounded-full border transition-colors ${
              annual ? "bg-white border-white" : "bg-neutral-800 border-neutral-600"
            }`}
          >
            <span
              className={`absolute top-0.5 w-5 h-5 rounded-full transition-all ${
                annual ? "left-6 bg-black" : "left-0.5 bg-neutral-400"
              }`}
            />
          </button>
          <span className={`text-sm transition ${annual ? "text-white" : "text-neutral-500"}`}>
            Annual
            <span className="ml-2 text-[11px] text-emerald-400 font-semibold">Save 2 months</span>
          </span>
        </div>

        {/* Tier cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mb-16">
          {tiers.map((tier) => {
            const price = annual ? tier.annualPrice : tier.monthlyPrice;
            const isElite = tier.ctaStyle === "gold";
            const isFill = tier.ctaStyle === "fill";

            return (
              <div
                key={tier.name}
                className={`relative flex flex-col rounded-2xl p-7 transition ${
                  isElite
                    ? "bg-gradient-to-b from-neutral-800/80 to-black/80 border border-neutral-400 shadow-[0_0_40px_rgba(255,255,255,0.05)]"
                    : "bg-black/60 border border-neutral-700 hover:border-neutral-500"
                }`}
              >
                {/* Most popular badge */}
                {tier.popular && (
                  <div className="absolute -top-3.5 left-1/2 -translate-x-1/2">
                    <span className="px-4 py-1 rounded-full text-[11px] font-semibold bg-white text-black tracking-wide whitespace-nowrap">
                      Most Popular
                    </span>
                  </div>
                )}

                {/* Tier name */}
                <p
                  className={`text-xs font-semibold uppercase tracking-widest mb-5 ${
                    isElite ? "text-neutral-300" : "text-neutral-500"
                  }`}
                >
                  {tier.name}
                </p>

                {/* Price */}
                <div className="mb-2">
                  {price === 0 ? (
                    <span className="text-4xl text-white font-bold" style={{ fontFamily: "MontserratSemiBold" }}>
                      Free
                    </span>
                  ) : (
                    <div className="flex items-end gap-1">
                      <span className="text-4xl text-white font-bold" style={{ fontFamily: "MontserratSemiBold" }}>
                        £{price}
                      </span>
                      <span className="text-neutral-500 text-sm mb-1.5">
                        /{annual ? "yr" : "mo"}
                      </span>
                    </div>
                  )}
                </div>

                {/* Annual note */}
                {annual && tier.annualNote && (
                  <p className="text-emerald-400 text-xs mb-3">{tier.annualNote}</p>
                )}
                {annual && !tier.annualNote && price !== null && price > 0 && (
                  <p className="text-neutral-600 text-xs mb-3">
                    £{((tier.monthlyPrice ?? 0) * 12).toFixed(0)} billed annually
                  </p>
                )}
                {(!annual || tier.annualNote == null) && price === 0 && (
                  <p className="text-neutral-600 text-xs mb-3">No card required</p>
                )}

                {/* Tagline */}
                <p className="text-neutral-400 text-sm leading-relaxed mb-6">{tier.tagline}</p>

                {/* CTA */}
                {(() => {
                  const key = `${tier.name.toLowerCase()}-${annual ? "yearly" : "monthly"}`;
                  const isLoading = loading === key;
                  return (
                    <button
                      onClick={() => handleCheckout(tier)}
                      disabled={isLoading}
                      className={`w-full py-2.5 rounded-full text-sm font-semibold mb-7 transition disabled:opacity-60 disabled:cursor-not-allowed ${
                        isElite
                          ? "bg-white text-black hover:bg-neutral-200"
                          : isFill
                          ? "bg-white text-black hover:bg-neutral-200"
                          : "border border-white text-white hover:bg-white hover:text-black"
                      }`}
                    >
                      {isLoading ? "Redirecting…" : tier.cta}
                    </button>
                  );
                })()}

                {/* Divider */}
                <div className="h-px bg-neutral-800 mb-6" />

                {/* Feature list */}
                <ul className="flex flex-col gap-3">
                  {tier.features.map((f) => (
                    <li key={f} className={`flex items-start gap-2.5 text-sm ${isElite ? "text-neutral-200" : "text-neutral-400"}`}>
                      <span className={isElite ? "text-white" : "text-neutral-500"}>
                        <CheckIcon />
                      </span>
                      {f}
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>

        {/* FAQ-style trust row */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-16">
          {[
            { label: "Cancel anytime", detail: "No lock-in. Downgrade or cancel from your account settings." },
            { label: "Secure payments", detail: "Processed by Stripe. We never store your card details." },
            { label: "VAT included", detail: "All prices shown include UK VAT. EU members billed at local rates." },
          ].map((item) => (
            <div key={item.label} className="border border-neutral-800 rounded-xl px-5 py-4 bg-black/40">
              <p className="text-white text-sm font-semibold mb-1">{item.label}</p>
              <p className="text-neutral-500 text-xs leading-relaxed">{item.detail}</p>
            </div>
          ))}
        </div>

        {/* Publishers & Organisations */}
        <div className="border border-neutral-700 rounded-2xl p-8 bg-black/50">
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
            <div className="flex-1">
              <p className="text-neutral-500 text-xs uppercase tracking-widest mb-3">For Publishers &amp; Organisations</p>
              <h2 className="text-white text-xl font-semibold mb-3" style={{ fontFamily: "MontserratSemiBold" }}>
                Reach thousands of verified AI professionals
              </h2>
              <p className="text-neutral-400 text-sm leading-relaxed max-w-xl">
                Companies, certification bodies, publishers and training providers can list certifications, compliance documents, regulatory guides, courses and AI products in the Symbio Store and Marketplace. Organisation membership includes publisher access, analytics, branded listings and priority placement.
              </p>
              <ul className="mt-4 flex flex-col gap-2">
                {[
                  "List certifications, courses, regulatory documents and AI tools",
                  "Branded publisher profile with verification badge",
                  "Sales analytics and audience insights",
                  "Team seats included — onboard your whole organisation",
                ].map((f) => (
                  <li key={f} className="flex items-start gap-2.5 text-sm text-neutral-400">
                    <span className="text-neutral-500 mt-0.5"><CheckIcon /></span>
                    {f}
                  </li>
                ))}
              </ul>
            </div>
            <div className="shrink-0 flex flex-col items-start md:items-center gap-3">
              <button className="px-8 py-3 bg-white text-black text-sm font-semibold rounded-full hover:bg-neutral-200 transition">
                Contact Us
              </button>
              <p className="text-neutral-600 text-xs">We respond within 1 business day</p>
            </div>
          </div>
        </div>

      </div>
    </main>
  );
}
