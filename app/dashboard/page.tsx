"use client";

import { useEffect, useState } from "react";
import { useUser } from "@clerk/nextjs";
import { useRouter } from "next/navigation";
import Image from "next/image";

type Subscription = {
  plan: string;
  billing_period: string | null;
  status: string;
  current_period_end: string | null;
};

const quickActions = [
  { label: "Read the Feed", href: "/" },
  { label: "Join a Space", href: "/spaces" },
  { label: "Create Post", href: "/spaces/commons" },
];

function capitalize(s: string) {
  return s.charAt(0).toUpperCase() + s.slice(1);
}

export default function DashboardPage() {
  const { isLoaded, isSignedIn, user } = useUser();
  const router = useRouter();
  const [news, setNews] = useState<any[]>([]);
  const [subscription, setSubscription] = useState<Subscription>({
    plan: "free",
    billing_period: null,
    status: "active",
    current_period_end: null,
  });
  const [portalLoading, setPortalLoading] = useState(false);

  useEffect(() => {
    if (isLoaded && !isSignedIn) {
      router.replace("/sign-in");
    }
  }, [isLoaded, isSignedIn, router]);

  useEffect(() => {
    if (!isSignedIn) return;
    fetch("/api/stripe/subscription")
      .then((r) => r.json())
      .then((data) => {
        if (data && !data.error) setSubscription(data);
      })
      .catch(() => {});
  }, [isSignedIn]);

  useEffect(() => {
    fetch("/api/improve/news")
      .then((r) => r.json())
      .then(setNews)
      .catch(() => {});
  }, []);

  async function openPortal() {
    setPortalLoading(true);
    try {
      const res = await fetch("/api/stripe/portal", { method: "POST" });
      const data = await res.json();
      if (data.url) window.location.href = data.url;
    } finally {
      setPortalLoading(false);
    }
  }

  if (!isLoaded || !isSignedIn) {
    return (
      <main className="min-h-screen bg-black flex items-center justify-center">
        <div className="w-6 h-6 rounded-full border-2 border-white border-t-transparent animate-spin" />
      </main>
    );
  }

  const firstName =
    user.firstName ||
    user.username ||
    user.emailAddresses?.[0]?.emailAddress?.split("@")[0] ||
    "there";

  const tierLabel = capitalize(subscription.plan);
  const billingLabel =
    subscription.plan !== "free" && subscription.billing_period
      ? ` · ${capitalize(subscription.billing_period)}`
      : "";
  const renewalLabel =
    subscription.current_period_end
      ? new Date(subscription.current_period_end).toLocaleDateString("en-GB", {
          day: "numeric",
          month: "short",
          year: "numeric",
        })
      : null;

  const statCards = [
    {
      label: "Membership Tier",
      value: `${tierLabel}${billingLabel}`,
      sub: renewalLabel ? `Renews ${renewalLabel}` : null,
    },
    { label: "Points", value: "0", sub: null },
    { label: "Posts", value: "0", sub: null },
  ];

  return (
    <main className="relative min-h-screen bg-black text-white">
      <Image src="/project-2.png" alt="" fill className="absolute inset-0 object-cover object-center" priority />
      <div className="absolute inset-0 bg-black/70" />
      <div className="relative z-10 max-w-5xl mx-auto px-4 md:px-6 py-12">

        {/* Header */}
        <h1 className="text-4xl md:text-5xl font-extrabold mb-10">
          Welcome back, {firstName}
        </h1>

        {/* Stat cards */}
        <section className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-10">
          {statCards.map((card) => (
            <div
              key={card.label}
              className="bg-neutral-900 border border-neutral-800 rounded-2xl px-6 py-5"
            >
              <p className="text-sm text-gray-400 mb-1">{card.label}</p>
              <p className="text-3xl font-bold">{card.value}</p>
              {card.sub && (
                <p className="text-xs text-gray-500 mt-1">{card.sub}</p>
              )}
            </div>
          ))}
        </section>

        {/* Subscription actions */}
        <section className="mb-10 flex flex-col sm:flex-row gap-3">
          {subscription.plan === "free" ? (
            <a
              href="/pricing"
              className="px-6 py-3 bg-white text-black font-semibold rounded-full hover:bg-gray-200 transition text-center text-sm"
            >
              Upgrade Membership
            </a>
          ) : (
            <button
              onClick={openPortal}
              disabled={portalLoading}
              className="px-6 py-3 bg-neutral-800 border border-neutral-600 text-white font-semibold rounded-full hover:bg-neutral-700 transition text-sm disabled:opacity-50"
            >
              {portalLoading ? "Opening…" : "Manage Subscription"}
            </button>
          )}
        </section>

        {/* Quick actions */}
        <section className="mb-14">
          <h2 className="text-xl font-semibold mb-4">Quick Actions</h2>
          <div className="flex flex-col sm:flex-row gap-3">
            {quickActions.map((action) => (
              <a
                key={action.label}
                href={action.href}
                className="px-6 py-3 bg-white text-black font-semibold rounded-full hover:bg-gray-200 transition text-center"
              >
                {action.label}
              </a>
            ))}
          </div>
        </section>

        {/* Latest in AI */}
        <section>
          <h2 className="text-2xl font-bold mb-6">Latest in AI</h2>

          {news.length === 0 && (
            <p className="text-gray-400">News will appear here soon.</p>
          )}

          {news.map((item: any, index: number) => (
            <div
              key={index}
              className="flex flex-col md:flex-row gap-4 mb-6 border-b border-gray-700 pb-6"
            >
              {item.image && (
                <img
                  src={item.image}
                  alt=""
                  className="w-full h-48 md:w-24 md:h-24 object-cover rounded"
                />
              )}
              <div>
                <a
                  href={item.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xl font-semibold text-blue-400 hover:underline"
                >
                  {item.title}
                </a>
                <p className="text-gray-300 mt-2">{item.summary}</p>
                <p className="text-gray-500 text-sm mt-1">{item.source}</p>
              </div>
            </div>
          ))}
        </section>

      </div>
    </main>
  );
}
