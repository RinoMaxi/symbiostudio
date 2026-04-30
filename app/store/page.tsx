"use client";

import Image from "next/image";
import { useState } from "react";

const CATEGORIES = [
  "All",
  "Certifications & Compliance",
  "Courses & Training",
  "Books & Literature",
  "AI Tools & Software",
  "Regulatory Documents",
  "Hardware",
];

const categoryStyle: Record<string, string> = {
  "Certifications & Compliance": "text-emerald-400 border-emerald-900 bg-emerald-950/40",
  "Courses & Training":          "text-sky-400 border-sky-900 bg-sky-950/40",
  "Books & Literature":           "text-violet-400 border-violet-900 bg-violet-950/40",
  "AI Tools & Software":          "text-amber-400 border-amber-900 bg-amber-950/40",
  "Regulatory Documents":         "text-orange-400 border-orange-900 bg-orange-950/40",
  "Hardware":                     "text-neutral-400 border-neutral-700 bg-neutral-900/40",
};

type Product = {
  id: number;
  title: string;
  category: string;
  publisher: string;
  description: string;
  price: string;
  comingSoon?: boolean;
  featured?: boolean;
};

const products: Product[] = [
  {
    id: 1,
    title: "Certified AI Security Practitioner (CASP)",
    category: "Certifications & Compliance",
    publisher: "Apex Compliance Group",
    description:
      "Industry-recognised certification covering AI threat modelling, adversarial risk, model security auditing and EU AI Act compliance. Includes 12 months of CPD credits and a digital badge.",
    price: "£495",
    featured: true,
  },
  {
    id: 2,
    title: "ISO 45001 AI Integration Compliance Bundle",
    category: "Regulatory Documents",
    publisher: "SafeOps Institute",
    description:
      "Complete documentation suite for integrating AI systems into ISO 45001-aligned safety management frameworks. Includes gap analysis templates, audit checklists and incident reporting protocols.",
    price: "£299",
  },
  {
    id: 3,
    title: "UK AI in Clinical Settings: MHRA Regulatory Handbook",
    category: "Regulatory Documents",
    publisher: "MedReg Advisory",
    description:
      "Comprehensive regulatory guide for deploying AI in NHS and private healthcare settings. Covers MHRA Software as a Medical Device guidance, clinical evidence requirements and post-market surveillance obligations.",
    price: "£189",
  },
  {
    id: 4,
    title: "Advanced Prompt Engineering for Enterprise",
    category: "Courses & Training",
    publisher: "Symbio Academy",
    description:
      "6-week self-paced course covering prompt design, chain-of-thought reasoning, RAG patterns and AI output evaluation for enterprise deployments. Certificate of completion included.",
    price: "£129",
  },
  {
    id: 5,
    title: "Applied AI Ethics: A Decision Framework for Organisations",
    category: "Books & Literature",
    publisher: "Fairfield Institute",
    description:
      "Practical governance playbook for embedding ethical AI principles into product development, procurement and deployment. Widely used by FTSE 100 legal, finance and operations teams.",
    price: "£49",
  },
  {
    id: 6,
    title: "AI-Augmented Filmmaking: From Pre-Production to Post",
    category: "Courses & Training",
    publisher: "Frame Future Studio",
    description:
      "14 hours of video content covering AI tools for scripting, storyboarding, VFX, voice synthesis and colour grading. Taught by working directors and VFX supervisors with active credits.",
    price: "£199",
  },
  {
    id: 7,
    title: "AI Risk Assessment Toolkit for Financial Services",
    category: "AI Tools & Software",
    publisher: "Quant Risk Partners",
    description:
      "Excel-native and API-accessible toolkit for running AI model risk assessments against FCA and PRA expectations. Includes stress testing templates, model governance logs and audit trail generators.",
    price: "£749",
    featured: true,
  },
  {
    id: 8,
    title: "Symbio AI Device — Gen 1",
    category: "Hardware",
    publisher: "SymbioStudio",
    description:
      "The first AI hardware device built for professional community intelligence. Designed for Symbio members. Join the waitlist to be notified at launch.",
    price: "—",
    comingSoon: true,
  },
];

export default function StorePage() {
  const [search, setSearch] = useState("");
  const [activeCategory, setActiveCategory] = useState("All");
  const [showForm, setShowForm] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [waitlisted, setWaitlisted] = useState(false);
  const [form, setForm] = useState({
    productName: "",
    category: "",
    publisher: "",
    description: "",
    price: "",
  });

  const filtered = products.filter((p) => {
    const matchCat = activeCategory === "All" || p.category === activeCategory;
    const q = search.toLowerCase();
    const matchSearch =
      p.title.toLowerCase().includes(q) ||
      p.description.toLowerCase().includes(q) ||
      p.publisher.toLowerCase().includes(q) ||
      p.category.toLowerCase().includes(q);
    return matchCat && matchSearch;
  });

  const handleSubmit = () => {
    if (!form.productName.trim()) return;
    setSubmitted(true);
    setForm({ productName: "", category: "", publisher: "", description: "", price: "" });
  };

  return (
    <main className="relative overflow-hidden w-full min-h-screen px-6 py-16 md:px-12 lg:px-24">
      <Image src="/project-3.png" alt="" fill className="absolute inset-0 object-cover object-top" priority />
      <div className="absolute inset-0 bg-black/72" />

      <div className="relative z-10 max-w-6xl mx-auto">

        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-3">
          <div>
            <p className="text-neutral-500 text-xs uppercase tracking-widest mb-3">SymbioStudio Store</p>
            <h1 className="text-4xl text-white tracking-wide mb-3" style={{ fontFamily: "MontserratSemiBold" }}>
              Certifications, Courses &amp; Compliance
            </h1>
            <p className="text-neutral-300 text-base max-w-2xl leading-relaxed">
              Verified regulatory documents, professional certifications, expert-led training and
              AI tools — built for practitioners who need to act, not just learn.
            </p>
          </div>
          <button
            onClick={() => setShowForm(!showForm)}
            className="shrink-0 px-6 py-3 border border-white text-white text-sm font-semibold rounded-full hover:bg-white hover:text-black transition"
          >
            + List Your Product
          </button>
        </div>

        {/* Trust bar */}
        <div className="flex flex-wrap gap-6 mb-10 mt-5">
          {[
            { label: "Verified publishers only", icon: "✓" },
            { label: "CPD-recognised certifications", icon: "✓" },
            { label: "Instant access on purchase", icon: "✓" },
            { label: "GBP pricing, VAT included", icon: "✓" },
          ].map((item) => (
            <span key={item.label} className="flex items-center gap-1.5 text-neutral-500 text-xs">
              <span className="text-emerald-500">{item.icon}</span>
              {item.label}
            </span>
          ))}
        </div>

        {/* List Your Product Form */}
        {showForm && (
          <div className="bg-black/70 border border-neutral-600 rounded-2xl p-6 mb-10">
            {submitted ? (
              <div className="text-center py-6">
                <p className="text-white text-lg font-semibold mb-2">Submission received ✓</p>
                <p className="text-neutral-400 text-sm max-w-md mx-auto">
                  Our editorial team will review your listing within 5 business days. Publishers must meet our verification standards before going live.
                </p>
                <button
                  onClick={() => { setSubmitted(false); setShowForm(false); }}
                  className="mt-5 text-neutral-500 text-xs underline"
                >
                  Close
                </button>
              </div>
            ) : (
              <>
                <h2 className="text-white font-semibold mb-1" style={{ fontFamily: "MontserratSemiBold" }}>
                  List Your Product or Publication
                </h2>
                <p className="text-neutral-400 text-sm mb-5">
                  Reach thousands of verified AI professionals. All listings are editorially reviewed before publishing.
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-3">
                  <input
                    type="text"
                    placeholder="Product or document title"
                    value={form.productName}
                    onChange={(e) => setForm({ ...form, productName: e.target.value })}
                    className="bg-neutral-900 border border-neutral-700 rounded-xl px-4 py-3 text-white text-sm outline-none placeholder-neutral-500 focus:border-neutral-500 transition"
                  />
                  <select
                    value={form.category}
                    onChange={(e) => setForm({ ...form, category: e.target.value })}
                    className="bg-neutral-900 border border-neutral-700 rounded-xl px-4 py-3 text-sm outline-none text-neutral-300 focus:border-neutral-500 transition"
                  >
                    <option value="">Select category</option>
                    {CATEGORIES.slice(1).map((c) => (
                      <option key={c} value={c}>{c}</option>
                    ))}
                  </select>
                </div>
                <input
                  type="text"
                  placeholder="Publisher or author name"
                  value={form.publisher}
                  onChange={(e) => setForm({ ...form, publisher: e.target.value })}
                  className="w-full bg-neutral-900 border border-neutral-700 rounded-xl px-4 py-3 text-white text-sm mb-3 outline-none placeholder-neutral-500 focus:border-neutral-500 transition"
                />
                <textarea
                  placeholder="Short description — who is this for and what does it cover?"
                  value={form.description}
                  onChange={(e) => setForm({ ...form, description: e.target.value })}
                  rows={3}
                  className="w-full bg-neutral-900 border border-neutral-700 rounded-xl px-4 py-3 text-white text-sm mb-3 outline-none placeholder-neutral-500 resize-none focus:border-neutral-500 transition"
                />
                <input
                  type="text"
                  placeholder='Price in GBP (e.g. "£149" or "From £299/yr")'
                  value={form.price}
                  onChange={(e) => setForm({ ...form, price: e.target.value })}
                  className="w-full bg-neutral-900 border border-neutral-700 rounded-xl px-4 py-3 text-white text-sm mb-4 outline-none placeholder-neutral-500 focus:border-neutral-500 transition"
                />
                <div className="flex items-center justify-between">
                  <p className="text-neutral-600 text-xs">Symbio charges a 12% platform fee on all sales.</p>
                  <button
                    onClick={handleSubmit}
                    className="px-6 py-2 bg-white text-black text-sm font-semibold rounded-full hover:bg-neutral-200 transition"
                  >
                    Submit for Review
                  </button>
                </div>
              </>
            )}
          </div>
        )}

        {/* Search */}
        <div className="relative mb-5">
          <svg
            className="absolute left-4 top-1/2 -translate-y-1/2 text-neutral-500"
            width="15" height="15" viewBox="0 0 24 24" fill="none"
            stroke="currentColor" strokeWidth="2"
          >
            <circle cx="11" cy="11" r="8" /><line x1="21" y1="21" x2="16.65" y2="16.65" />
          </svg>
          <input
            type="text"
            placeholder="Search certifications, courses, documents, tools…"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full bg-black/60 border border-neutral-700 rounded-xl pl-10 pr-5 py-3 text-white text-sm outline-none placeholder-neutral-500 focus:border-neutral-500 transition"
          />
        </div>

        {/* Category Pills */}
        <div className="flex flex-wrap gap-2 mb-10">
          {CATEGORIES.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-4 py-1.5 rounded-full text-xs font-semibold border transition ${
                activeCategory === cat
                  ? "bg-white text-black border-white"
                  : "border-neutral-700 text-neutral-400 hover:border-neutral-500 hover:text-white"
              }`}
            >
              {cat === "Hardware" ? "Hardware — coming soon" : cat}
            </button>
          ))}
        </div>

        {/* Results count */}
        {search || activeCategory !== "All" ? (
          <p className="text-neutral-600 text-xs mb-6">
            {filtered.length} {filtered.length === 1 ? "result" : "results"}
            {activeCategory !== "All" ? ` in ${activeCategory}` : ""}
            {search ? ` for "${search}"` : ""}
          </p>
        ) : (
          <p className="text-neutral-500 text-xs uppercase tracking-widest mb-6">All Products</p>
        )}

        {/* Grid */}
        {filtered.length === 0 ? (
          <div className="text-center py-20">
            <p className="text-neutral-400 text-sm mb-2">No products match your search.</p>
            <button
              onClick={() => { setSearch(""); setActiveCategory("All"); }}
              className="text-neutral-600 text-xs underline"
            >
              Clear filters
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {filtered.map((product) => (
              <div
                key={product.id}
                className={`relative bg-black/60 border rounded-2xl px-6 py-6 flex flex-col gap-3 transition ${
                  product.comingSoon
                    ? "border-neutral-800 opacity-70"
                    : product.featured
                    ? "border-neutral-500 hover:border-neutral-300"
                    : "border-neutral-700 hover:border-neutral-500"
                }`}
              >
                {/* Featured ribbon */}
                {product.featured && !product.comingSoon && (
                  <span className="absolute top-4 right-4 text-[10px] text-neutral-300 border border-neutral-600 bg-neutral-900 rounded-full px-2 py-0.5 tracking-wide">
                    Featured
                  </span>
                )}

                {/* Category badge */}
                <span
                  className={`text-[11px] font-medium border rounded-full px-3 py-1 w-fit ${
                    categoryStyle[product.category] ?? "text-neutral-400 border-neutral-700"
                  }`}
                >
                  {product.category}
                </span>

                {/* Title + description */}
                <div className="flex-1">
                  <h2 className="text-white text-[15px] font-semibold leading-snug mb-2">
                    {product.title}
                    {product.comingSoon && (
                      <span className="ml-2 text-[10px] text-neutral-500 font-normal align-middle">Coming Soon</span>
                    )}
                  </h2>
                  <p className="text-neutral-400 text-sm leading-relaxed">{product.description}</p>
                </div>

                {/* Footer */}
                <div className="mt-auto pt-4 border-t border-neutral-800 flex items-end justify-between gap-3">
                  <div>
                    <p className="text-neutral-500 text-xs mb-0.5">
                      {product.category === "Courses & Training" || product.category === "Books & Literature"
                        ? "Author"
                        : "Publisher"}{" "}
                      · <span className="text-neutral-400">{product.publisher}</span>
                    </p>
                    <p className="text-white text-base font-bold" style={{ fontFamily: "MontserratSemiBold" }}>
                      {product.price}
                      {product.price !== "—" && (
                        <span className="text-neutral-500 text-xs font-normal ml-1">GBP inc. VAT</span>
                      )}
                    </p>
                  </div>

                  {product.comingSoon ? (
                    <button
                      onClick={() => setWaitlisted(true)}
                      className={`shrink-0 px-5 py-2 rounded-full text-sm font-semibold transition border ${
                        waitlisted
                          ? "border-neutral-600 text-neutral-500 cursor-default"
                          : "border-white text-white hover:bg-white hover:text-black"
                      }`}
                    >
                      {waitlisted ? "On waitlist ✓" : "Join Waitlist"}
                    </button>
                  ) : (
                    <button className="shrink-0 px-5 py-2 rounded-full bg-white text-black text-sm font-semibold hover:bg-neutral-200 transition">
                      Get Access
                    </button>
                  )}
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Publisher CTA footer */}
        <div className="mt-16 border border-neutral-800 rounded-2xl p-8 bg-black/40 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <div>
            <p className="text-white font-semibold mb-1" style={{ fontFamily: "MontserratSemiBold" }}>
              Are you a publisher, certification body or course creator?
            </p>
            <p className="text-neutral-400 text-sm max-w-lg">
              List your regulatory documents, professional certifications or expert courses in front of thousands of verified AI practitioners.
            </p>
          </div>
          <button
            onClick={() => { setShowForm(true); window.scrollTo({ top: 0, behavior: "smooth" }); }}
            className="shrink-0 px-6 py-3 bg-white text-black text-sm font-semibold rounded-full hover:bg-neutral-200 transition"
          >
            Apply to Publish
          </button>
        </div>

      </div>
    </main>
  );
}
