"use client";

import { useEffect, useState } from "react";

export default function AIToday() {
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

    {/* HERO SECTION */}
    <section className="w-full text-center mt-20 mb-20">
      <h1 className="text-6xl font-extrabold tracking-tight">
        SymbioStudio
      </h1>

      <p className="text-gray-300 mt-6 text-xl max-w-2xl mx-auto leading-relaxed">
        Step into the future. Grow with AI. Shape your mind.
      </p>
    </section>

    {/* NEWS SECTION */}
    <section className="w-full max-w-4xl mx-auto mt-32">
      <h2 className="text-3xl font-bold mb-6">AI Today</h2>

      {news.length === 0 && (
        <p className="text-gray-400">News will appear here soon.</p>
      )}

      {news.map((item: any, index: number) => (
        <div key={index} className="flex gap-4 mb-6 border-b border-gray-700 pb-6">
          {item.image && (
            <img
              src={item.image}
              alt=""
              className="w-24 h-24 object-cover rounded"
            />
          )}

          <div>
            <a
              href={item.url}
              target="_blank"
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















