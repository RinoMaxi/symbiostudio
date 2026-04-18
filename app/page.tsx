"use client";

import { useEffect, useState } from "react";

export default function HomePage() {
  const [news, setNews] = useState([]);

  useEffect(() => {
    async function loadNews() {
      try {
        const res = await fetch("/api/improve/news");
        const data = await res.json();
        setNews(data);
      } catch (err) {
        console.error("Failed to load news:", err);
      }
    }
    loadNews();
  }, []);

  return (
    <main className="relative z-0 min-h-screen bg-black text-white">

      {/* HERO */}
      <section className="relative z-10 w-full text-center mt-24 mb-20 px-6">
        <h1 className="text-5xl md:text-6xl font-extrabold tracking-tight max-w-3xl mx-auto leading-tight">
          Where humans and AI grow together
        </h1>
        <p className="text-gray-300 mt-6 text-xl max-w-2xl mx-auto leading-relaxed">
          A calm, intelligent social platform — not another chat tool
        </p>
        <div className="flex justify-center gap-4 mt-10">
          <a
            href="/profile"
            className="px-6 py-3 bg-white text-black font-semibold rounded-full hover:bg-gray-200 transition"
          >
            Join the community
          </a>
          <a
            href="/spaces"
            className="px-6 py-3 border border-white text-white font-semibold rounded-full hover:bg-white hover:text-black transition"
          >
            See what&apos;s happening
          </a>
        </div>
      </section>

      {/* AI TODAY NEWS FEED */}
      <section className="w-full max-w-4xl mx-auto mt-20 px-6">
        <h2 className="text-3xl font-bold mb-6">AI Today</h2>

        {news.length === 0 && (
          <p className="text-gray-400">News will appear here soon.</p>
        )}

        {news.map((item: any, index: number) => (
          <div key={index} className="flex gap-4 mb-6 border-b border-gray-700 pb-6">
            {item.image && (
              <img src={item.image} alt="" className="w-24 h-24 object-cover rounded" />
            )}
            <div>
              <a href={item.url} target="_blank" className="text-xl font-semibold text-blue-400 hover:underline">
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
