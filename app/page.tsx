"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

const features = [
  {
    image: "/project-1.png",
    title: "Explore Ideas",
    description:
      "Dive deep into any topic with structured AI support that expands your thinking without overwhelming you.",
  },
  {
    image: "/project-2.png",
    title: "Connect with Others",
    description:
      "Find collaborators, join spaces, and build meaningful connections in a calm, human-first environment.",
  },
  {
    image: "/project-3.png",
    title: "Grow with AI",
    description:
      "Work alongside intelligent agents that support your goals, sharpen your reasoning, and help you evolve.",
  },
];

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
    <main className="min-h-screen bg-black text-white">

      {/* HERO */}
      <section className="relative w-full min-h-[90vh] flex flex-col items-center justify-center text-center overflow-hidden">
        {/* Background image */}
        <Image
          src="/hero-main.png"
          alt=""
          fill
          className="object-cover object-center"
          priority
        />
        {/* Dark overlay */}
        <div className="absolute inset-0 bg-black/60" />

        {/* Content */}
        <div className="relative z-10 flex flex-col items-center px-6">
          <Image
            src="/symbio_logo.png"
            alt="Symbio"
            width={80}
            height={80}
            className="mb-8 rounded-xl"
          />

          <h1 className="text-6xl md:text-7xl font-extrabold tracking-tight">
            symbio AI
          </h1>

          <p className="mt-4 text-lg md:text-xl font-semibold tracking-widest text-gray-300 uppercase">
            Stay Connected
          </p>

          <p className="mt-6 text-base md:text-lg text-gray-400 max-w-2xl leading-relaxed">
            Living Mind — a hybrid intelligence system where you can speak,
            respond, support, and guide.
          </p>

          <div className="flex flex-wrap justify-center gap-4 mt-10">
            <a
              href="/profile"
              className="px-7 py-3 bg-white text-black font-semibold rounded-full hover:bg-gray-200 transition"
            >
              Join the community
            </a>
            <a
              href="/spaces"
              className="px-7 py-3 border border-white text-white font-semibold rounded-full hover:bg-white hover:text-black transition"
            >
              See what&apos;s happening
            </a>
          </div>
        </div>
      </section>

      {/* FEATURES */}
      <section className="w-full max-w-5xl mx-auto px-6 py-24">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((f) => (
            <div
              key={f.title}
              className="bg-neutral-900 rounded-2xl overflow-hidden border border-neutral-800"
            >
              <div className="relative w-full h-48">
                <Image
                  src={f.image}
                  alt={f.title}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-lg font-semibold mb-2">{f.title}</h3>
                <p className="text-sm text-gray-400 leading-relaxed">{f.description}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* AI TODAY NEWS FEED */}
      <section className="w-full max-w-4xl mx-auto px-6 pb-24">
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
