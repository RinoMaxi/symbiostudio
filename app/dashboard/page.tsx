"use client";

import { useEffect, useState } from "react";
import { useUser } from "@clerk/nextjs";
import { useRouter } from "next/navigation";

const statCards = [
  { label: "Membership Tier", value: "Free" },
  { label: "Points", value: "0" },
  { label: "Posts", value: "0" },
];

const quickActions = [
  { label: "Read the Feed", href: "/" },
  { label: "Join a Space", href: "/spaces" },
  { label: "Create Post", href: "/spaces/commons" },
];

export default function DashboardPage() {
  const { isLoaded, isSignedIn, user } = useUser();
  const router = useRouter();
  const [news, setNews] = useState<any[]>([]);

  useEffect(() => {
    if (isLoaded && !isSignedIn) {
      router.replace("/sign-in");
    }
  }, [isLoaded, isSignedIn, router]);

  useEffect(() => {
    async function loadNews() {
      try {
        const res = await fetch("/api/improve/news");
        const data = await res.json();
        setNews(data);
      } catch {
        // silently fail
      }
    }
    loadNews();
  }, []);

  if (!isLoaded || !isSignedIn) {
    return (
      <main className="min-h-screen bg-black flex items-center justify-center">
        <div className="w-6 h-6 rounded-full border-2 border-white border-t-transparent animate-spin" />
      </main>
    );
  }

  const firstName = user.firstName || user.username || user.emailAddresses?.[0]?.emailAddress?.split("@")[0] || "there";

  return (
    <main className="min-h-screen bg-black text-white px-4 md:px-6 py-12 max-w-5xl mx-auto">

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
          </div>
        ))}
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

    </main>
  );
}
