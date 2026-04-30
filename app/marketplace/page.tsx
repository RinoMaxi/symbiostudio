"use client";
import Image from "next/image";
import { useState } from "react";

const categories = [
  "All",
  "AI Agents",
  "LLMs & Models",
  "Security & Compliance",
  "Healthcare AI",
  "Finance AI",
  "Creative AI",
];

const listings = [
  {
    id: 1,
    name: "ContractGuard AI",
    category: "Security & Compliance",
    description: "Automated contract risk analysis powered by fine-tuned LLMs. Flags liability clauses, GDPR exposure and non-standard terms in seconds.",
    creator: "LexTech Labs",
    price: "From $299/mo",
  },
  {
    id: 2,
    name: "ClinicalNote Pro",
    category: "Healthcare AI",
    description: "AI scribe that converts doctor-patient conversations into structured clinical notes, integrated with major EHR systems.",
    creator: "MedFlow AI",
    price: "Contact for pricing",
  },
  {
    id: 3,
    name: "SceneForge",
    category: "Creative AI",
    description: "End-to-end AI pipeline for pre-production — script breakdown, shot list generation, location scouting suggestions and budget estimation.",
    creator: "Forge Studios",
    price: "From $149/mo",
  },
  {
    id: 4,
    name: "RiskSense Markets",
    category: "Finance AI",
    description: "Real-time AI risk modelling for equity and derivatives portfolios. Stress-tests positions against macro scenarios with sub-second latency.",
    creator: "Quant Foundry",
    price: "Contact for pricing",
  },
  {
    id: 5,
    name: "WorkflowAgent",
    category: "AI Agents",
    description: "Deploy autonomous agents that manage your ops workflows — from CRM updates to Slack summaries and meeting scheduling, without human input.",
    creator: "AgentStack",
    price: "From $199/mo",
  },
  {
    id: 6,
    name: "FoundationKit",
    category: "LLMs & Models",
    description: "Fine-tuned industry-specific LLMs for legal, medical and financial domains. Deploy via API with your own system prompt and guardrails.",
    creator: "ModelBase",
    price: "From $499/mo",
  },
];

export default function MarketplacePage() {
  const [search, setSearch] = useState("");
  const [activeCategory, setActiveCategory] = useState("All");
  const [showForm, setShowForm] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({ name: "", category: "", description: "", price: "" });

  const filtered = listings.filter((l) => {
    const matchesCategory = activeCategory === "All" || l.category === activeCategory;
    const matchesSearch =
      l.name.toLowerCase().includes(search.toLowerCase()) ||
      l.description.toLowerCase().includes(search.toLowerCase()) ||
      l.creator.toLowerCase().includes(search.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const handleSubmit = () => {
    if (!form.name.trim()) return;
    setSubmitted(true);
    setForm({ name: "", category: "", description: "", price: "" });
  };

  return (
    <main className="relative overflow-hidden w-full min-h-screen px-6 py-16 md:px-12 lg:px-24">
      <Image src="/project-2.png" alt="" fill className="absolute inset-0 object-cover object-top" priority />
      <div className="absolute inset-0 bg-black/70" />

      <div className="relative z-10 max-w-6xl mx-auto">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10">
          <div>
            <h1 className="text-4xl text-white tracking-wide mb-3" style={{ fontFamily: "MontserratSemiBold" }}>
              Marketplace
            </h1>
            <p className="text-neutral-300 text-lg max-w-xl">
              Discover AI products, agents and services built by professionals for professionals.
            </p>
          </div>
          <button
            onClick={() => setShowForm(!showForm)}
            className="shrink-0 px-6 py-3 border border-white text-white text-sm font-semibold rounded-full hover:bg-white hover:text-black transition"
          >
            + List Your Product
          </button>
        </div>

        {/* List Your Product Form */}
        {showForm && (
          <div className="bg-black/70 border border-neutral-600 rounded-2xl p-6 mb-10">
            {submitted ? (
              <div className="text-center py-4">
                <p className="text-white text-lg font-semibold mb-2">Listing submitted ✓</p>
                <p className="text-neutral-400 text-sm">Our team will review your product and publish it within 2 business days.</p>
                <button
                  onClick={() => { setSubmitted(false); setShowForm(false); }}
                  className="mt-4 text-neutral-500 text-xs underline"
                >
                  Close
                </button>
              </div>
            ) : (
              <>
                <h2 className="text-white font-semibold mb-1">List Your Product or Service</h2>
                <p className="text-neutral-400 text-sm mb-5">Reach thousands of professionals actively looking for AI solutions in your space.</p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-3">
                  <input
                    type="text"
                    placeholder="Product name"
                    value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                    className="bg-neutral-900 border border-neutral-700 rounded-xl px-4 py-3 text-white text-sm outline-none placeholder-neutral-500"
                  />
                  <select
                    value={form.category}
                    onChange={(e) => setForm({ ...form, category: e.target.value })}
                    className="bg-neutral-900 border border-neutral-700 rounded-xl px-4 py-3 text-sm outline-none text-neutral-300"
                  >
                    <option value="">Select category</option>
                    {categories.slice(1).map((c) => (
                      <option key={c} value={c}>{c}</option>
                    ))}
                  </select>
                </div>
                <textarea
                  placeholder="Short description of what your product does and who it's for"
                  value={form.description}
                  onChange={(e) => setForm({ ...form, description: e.target.value })}
                  rows={3}
                  className="w-full bg-neutral-900 border border-neutral-700 rounded-xl px-4 py-3 text-white text-sm mb-3 outline-none placeholder-neutral-500 resize-none"
                />
                <input
                  type="text"
                  placeholder='Pricing (e.g. "From $99/mo" or "Contact for pricing")'
                  value={form.price}
                  onChange={(e) => setForm({ ...form, price: e.target.value })}
                  className="w-full bg-neutral-900 border border-neutral-700 rounded-xl px-4 py-3 text-white text-sm mb-4 outline-none placeholder-neutral-500"
                />
                <div className="flex justify-end">
                  <button
                    onClick={handleSubmit}
                    className="px-6 py-2 bg-white text-black text-sm font-semibold rounded-full hover:bg-neutral-200 transition"
                  >
                    Submit Listing
                  </button>
                </div>
              </>
            )}
          </div>
        )}

        {/* Search */}
        <div className="relative mb-6">
          <input
            type="text"
            placeholder="Search products, services or creators..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full bg-black/60 border border-neutral-700 rounded-xl px-5 py-3 text-white text-sm outline-none placeholder-neutral-500 focus:border-neutral-500 transition"
          />
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap gap-2 mb-10">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-4 py-1.5 rounded-full text-xs font-semibold border transition ${
                activeCategory === cat
                  ? "bg-white text-black border-white"
                  : "border-neutral-700 text-neutral-400 hover:border-neutral-500 hover:text-white"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Listings */}
        {filtered.length === 0 ? (
          <p className="text-neutral-500 text-sm">No listings match your search.</p>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filtered.map((listing) => (
              <div
                key={listing.id}
                className="bg-black/60 border border-neutral-700 rounded-2xl px-6 py-6 flex flex-col gap-3 hover:border-neutral-500 transition"
              >
                <span className="text-xs text-neutral-500 border border-neutral-700 rounded-full px-3 py-1 w-fit">
                  {listing.category}
                </span>
                <div>
                  <h2 className="text-white text-lg font-semibold mb-1">{listing.name}</h2>
                  <p className="text-neutral-400 text-sm leading-relaxed">{listing.description}</p>
                </div>
                <div className="mt-auto flex items-center justify-between pt-3 border-t border-neutral-800">
                  <div>
                    <p className="text-neutral-500 text-xs">by {listing.creator}</p>
                    <p className="text-white text-sm font-semibold mt-0.5">{listing.price}</p>
                  </div>
                  <button className="px-5 py-2 rounded-full bg-white text-black text-sm font-semibold hover:bg-neutral-200 transition">
                    View
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </main>
  );
}
