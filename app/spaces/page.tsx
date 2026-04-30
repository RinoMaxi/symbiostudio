"use client";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

const foundingSpaces = [
  {
    name: "AI in Film & Creative Production",
    description: "Filmmakers, studios and creative AI tool builders share pipelines, solve production challenges and shape the future of storytelling.",
    slug: "ai-film",
    members: 24,
    icon: "🎬",
  },
  {
    name: "AI Security, Ethics & Governance",
    description: "Security professionals, ethicists and enterprise teams navigate AI risk, compliance and responsible deployment.",
    slug: "ai-security",
    members: 31,
    icon: "🔐",
  },
  {
    name: "AI in Finance & Markets",
    description: "Analysts, traders and fintech builders discuss AI-driven decision making, risk modelling and market intelligence.",
    slug: "ai-finance",
    members: 18,
    icon: "📈",
  },
  {
    name: "AI in Medicine & Healthcare",
    description: "Medical professionals and health AI developers share case studies, tools and breakthroughs in clinical AI.",
    slug: "ai-medicine",
    members: 22,
    icon: "🏥",
  },
  {
    name: "AI in Education",
    description: "Educators and EdTech builders reimagining learning, assessment and personalised education through AI.",
    slug: "ai-education",
    members: 15,
    icon: "🎓",
  },
  {
    name: "AI in Workplace Safety",
    description: "H&S managers, safety AI developers and industry leaders solving real compliance, reporting and risk challenges with AI.",
    slug: "ai-safety",
    members: 9,
    icon: "⚠️",
  },
];

export default function SpacesPage() {
  const [showPropose, setShowPropose] = useState(false);
  const [proposalName, setProposalName] = useState("");
  const [proposalDesc, setProposalDesc] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handlePropose = () => {
    if (!proposalName.trim()) return;
    setSubmitted(true);
    setProposalName("");
    setProposalDesc("");
  };

  return (
    <main className="relative overflow-hidden w-full min-h-screen px-6 py-16 md:px-12 lg:px-24">
      <Image src="/project-1.png" alt="" fill className="absolute inset-0 object-cover object-top" priority />
      <div className="absolute inset-0 bg-black/60" />

      <div className="relative z-10 max-w-5xl mx-auto">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <h1 className="text-4xl text-white tracking-wide mb-3" style={{ fontFamily: "MontserratSemiBold" }}>
              Spaces
            </h1>
            <p className="text-neutral-300 text-lg max-w-xl">
              Professional communities where AI problems meet AI solutions.
              Join a space, share your challenge, find your answer.
            </p>
          </div>
          <button
            onClick={() => setShowPropose(!showPropose)}
            className="shrink-0 px-6 py-3 border border-white text-white text-sm font-semibold rounded-full hover:bg-white hover:text-black transition"
          >
            + Propose a Space
          </button>
        </div>

        {/* Propose a Space Form */}
        {showPropose && (
          <div className="bg-black/70 border border-neutral-600 rounded-2xl p-6 mb-10">
            {submitted ? (
              <div className="text-center py-4">
                <p className="text-white text-lg font-semibold mb-2">Proposal submitted ✓</p>
                <p className="text-neutral-400 text-sm">We'll review your Space proposal and open it when enough members support it. You'll earn points when it launches.</p>
                <button onClick={() => { setSubmitted(false); setShowPropose(false); }} className="mt-4 text-neutral-500 text-xs underline">Close</button>
              </div>
            ) : (
              <>
                <h2 className="text-white font-semibold mb-4">Propose a New Space</h2>
                <p className="text-neutral-400 text-sm mb-5">Have a professional AI topic that needs its own community? Propose it. When enough members support it, it opens.</p>
                <input
                  type="text"
                  placeholder="Space name (e.g. AI in Agriculture)"
                  value={proposalName}
                  onChange={(e) => setProposalName(e.target.value)}
                  className="w-full bg-neutral-900 border border-neutral-700 rounded-xl px-4 py-3 text-white text-sm mb-3 outline-none placeholder-neutral-500"
                />
                <textarea
                  placeholder="What problem does this Space solve? Who is it for?"
                  value={proposalDesc}
                  onChange={(e) => setProposalDesc(e.target.value)}
                  rows={3}
                  className="w-full bg-neutral-900 border border-neutral-700 rounded-xl px-4 py-3 text-white text-sm mb-4 outline-none placeholder-neutral-500 resize-none"
                />
                <div className="flex justify-between items-center">
                  <span className="text-neutral-500 text-xs">+20 points when your Space is approved</span>
                  <button
                    onClick={handlePropose}
                    className="px-6 py-2 bg-white text-black text-sm font-semibold rounded-full hover:bg-neutral-200 transition"
                  >
                    Submit Proposal
                  </button>
                </div>
              </>
            )}
          </div>
        )}

        {/* Founding Spaces */}
        <p className="text-neutral-500 text-xs uppercase tracking-widest mb-6">Founding Spaces</p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {foundingSpaces.map((space) => (
            <div key={space.slug} className="bg-black/60 border border-neutral-700 rounded-2xl px-6 py-6 flex flex-col gap-4 hover:border-neutral-500 transition">
              <div className="text-3xl">{space.icon}</div>
              <div>
                <h2 className="text-white text-lg font-semibold mb-2">{space.name}</h2>
                <p className="text-neutral-400 text-sm leading-relaxed">{space.description}</p>
              </div>
              <div className="flex items-center justify-between mt-auto">
                <span className="text-neutral-500 text-xs">{space.members} members</span>
                <Link
                  href={`/spaces/${space.slug}`}
                  className="px-5 py-2 rounded-full bg-white text-black text-sm font-semibold hover:bg-neutral-200 transition text-center"
                >
                  Enter Space
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}
