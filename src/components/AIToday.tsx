"use client";

import { useEffect, useState } from "react";
import NewsItem from "./NewsItem";

export default function AIToday() {
  const [news, setNews] = useState([]);

  useEffect(() => {
    async function loadNews() {
      try {
        const res = await fetch("/api/news", { cache: "no-store" });
        const data = await res.json();
        setNews(data);
      } catch (err) {
        console.error("Failed to load news:", err);
      }
    }

    loadNews();
  }, []);

  return (
    <section className="w-full max-w-4xl mx-auto mt-10 px-4">
      <h2 className="text-3xl font-bold mb-6">AI Today</h2>

      {news.length === 0 && (
        <p className="text-gray-400">News will appear here soon…</p>
      )}

      {news.map((item: any, index: number) => (
        <NewsItem
          key={index}
          title={item.title}
          summary={item.summary}
          source={item.source}
          url={item.url}
          image={item.image}
        />
      ))}
    </section>
  );
}


