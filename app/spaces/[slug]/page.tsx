"use client";

import Image from "next/image";
import { useState } from "react";
import Link from "next/link";
import { useParams } from "next/navigation";

const spaceData: Record<string, {
  name: string;
  description: string;
  icon: string;
  members: number;
  category: string;
}> = {
  "ai-film": {
    name: "AI in Film & Creative Production",
    description: "Filmmakers, studios and creative AI tool builders share pipelines, solve production challenges and shape the future of storytelling.",
    icon: "🎬",
    members: 24,
    category: "Creative",
  },
  "ai-security": {
    name: "AI Security, Ethics & Governance",
    description: "Security professionals, ethicists and enterprise teams navigate AI risk, compliance and responsible deployment.",
    icon: "🔐",
    members: 31,
    category: "Security",
  },
  "ai-finance": {
    name: "AI in Finance & Markets",
    description: "Analysts, traders and fintech builders discuss AI-driven decision making, risk modelling and market intelligence.",
    icon: "📈",
    members: 18,
    category: "Finance",
  },
  "ai-medicine": {
    name: "AI in Medicine & Healthcare",
    description: "Medical professionals and health AI developers share case studies, tools and breakthroughs in clinical AI.",
    icon: "🏥",
    members: 22,
    category: "Healthcare",
  },
  "ai-education": {
    name: "AI in Education",
    description: "Educators and EdTech builders reimagining learning, assessment and personalised education through AI.",
    icon: "🎓",
    members: 15,
    category: "Education",
  },
  "ai-safety": {
    name: "AI in Workplace Safety",
    description: "H&S managers, safety AI developers and industry leaders solving real compliance, reporting and risk challenges with AI.",
    icon: "⚠️",
    members: 9,
    category: "Safety",
  },
};

const defaultSpace = {
  name: "Space",
  description: "A professional community for AI practitioners.",
  icon: "🤖",
  members: 12,
  category: "General",
};

const relatedSpaces = [
  { name: "AI in Finance & Markets", slug: "ai-finance", icon: "📈" },
  { name: "AI Security & Governance", slug: "ai-security", icon: "🔐" },
  { name: "AI in Education", slug: "ai-education", icon: "🎓" },
];

const topContributors = [
  { name: "Mara Chen", initials: "MC", posts: 41, role: "ML Engineer" },
  { name: "James Obi", initials: "JO", posts: 29, role: "Product Lead" },
  { name: "Priya Shah", initials: "PS", posts: 17, role: "Researcher" },
  { name: "Luca Ferretti", initials: "LF", posts: 12, role: "Founder" },
];

const seedPosts = [
  {
    id: "1",
    author: "Mara Chen",
    initials: "MC",
    role: "ML Engineer",
    time: "2h ago",
    content: "Has anyone successfully integrated LLM-based anomaly detection into a real-time pipeline? We're hitting latency issues at ~50ms p99 and trying to decide whether to move inference to the edge or batch the alerts.",
    likes: 14,
    comments: 7,
    liked: false,
  },
  {
    id: "2",
    author: "James Obi",
    initials: "JO",
    role: "Product Lead",
    time: "5h ago",
    content: "Just published a breakdown of our internal evaluation framework for AI vendor selection — covers accuracy benchmarks, data residency, audit trails and pricing models. Happy to share the template if anyone wants it.",
    likes: 32,
    comments: 11,
    liked: false,
  },
  {
    id: "3",
    author: "Priya Shah",
    initials: "PS",
    role: "Researcher",
    time: "1d ago",
    content: "Paper recommendation: 'Constitutional AI in High-Stakes Domains' (NeurIPS 2025). The section on uncertainty quantification is directly applicable to anyone deploying models where wrong answers have real consequences. Link in comments.",
    likes: 51,
    comments: 18,
    liked: false,
  },
  {
    id: "4",
    author: "Luca Ferretti",
    initials: "LF",
    role: "Founder",
    time: "2d ago",
    content: "Quick poll — what's your team's biggest blocker right now? (A) Evaluation / benchmarking, (B) Data quality & labelling, (C) Internal buy-in / procurement, (D) Regulatory compliance. We're planning our Q3 content around the most common answers.",
    likes: 23,
    comments: 34,
    liked: false,
  },
];

type Post = typeof seedPosts[number];

function Avatar({ initials, size = "md" }: { initials: string; size?: "sm" | "md" }) {
  const dim = size === "sm" ? "w-7 h-7 text-xs" : "w-9 h-9 text-sm";
  return (
    <div className={`${dim} rounded-full bg-neutral-700 border border-neutral-600 flex items-center justify-center text-white font-semibold shrink-0`}>
      {initials}
    </div>
  );
}

function PostCard({ post, onLike }: { post: Post; onLike: (id: string) => void }) {
  return (
    <div className="bg-black/60 border border-neutral-700 rounded-2xl p-5 hover:border-neutral-500 transition">
      <div className="flex items-start gap-3 mb-3">
        <Avatar initials={post.initials} />
        <div className="flex-1 min-w-0">
          <div className="flex items-baseline gap-2 flex-wrap">
            <span className="text-white text-sm font-semibold">{post.author}</span>
            <span className="text-neutral-500 text-xs">{post.role}</span>
            <span className="text-neutral-600 text-xs ml-auto">{post.time}</span>
          </div>
        </div>
      </div>
      <p className="text-neutral-300 text-sm leading-relaxed mb-4">{post.content}</p>
      <div className="flex items-center gap-5">
        <button
          onClick={() => onLike(post.id)}
          className={`flex items-center gap-1.5 text-xs transition ${post.liked ? "text-white" : "text-neutral-500 hover:text-neutral-300"}`}
        >
          <svg width="14" height="14" viewBox="0 0 24 24" fill={post.liked ? "currentColor" : "none"} stroke="currentColor" strokeWidth="2">
            <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
          </svg>
          {post.likes + (post.liked ? 1 : 0)}
        </button>
        <button className="flex items-center gap-1.5 text-xs text-neutral-500 hover:text-neutral-300 transition">
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
          </svg>
          {post.comments}
        </button>
        <button className="flex items-center gap-1.5 text-xs text-neutral-500 hover:text-neutral-300 transition ml-auto">
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <circle cx="18" cy="5" r="3" /><circle cx="6" cy="12" r="3" /><circle cx="18" cy="19" r="3" />
            <line x1="8.59" y1="13.51" x2="15.42" y2="17.49" /><line x1="15.41" y1="6.51" x2="8.59" y2="10.49" />
          </svg>
          Share
        </button>
      </div>
    </div>
  );
}

export default function SpaceInteriorPage() {
  const { slug } = useParams<{ slug: string }>();
  const space = spaceData[slug] ?? defaultSpace;

  const [posts, setPosts] = useState<Post[]>(seedPosts);
  const [draft, setDraft] = useState("");
  const [posting, setPosting] = useState(false);
  const [joined, setJoined] = useState(false);

  const handleLike = (id: string) => {
    setPosts((prev) =>
      prev.map((p) => (p.id === id ? { ...p, liked: !p.liked } : p))
    );
  };

  const handlePost = () => {
    if (!draft.trim()) return;
    setPosting(true);
    setTimeout(() => {
      const newPost: Post = {
        id: String(Date.now()),
        author: "You",
        initials: "YO",
        role: "Member",
        time: "Just now",
        content: draft.trim(),
        likes: 0,
        comments: 0,
        liked: false,
      };
      setPosts((prev) => [newPost, ...prev]);
      setDraft("");
      setPosting(false);
    }, 600);
  };

  return (
    <main className="relative overflow-hidden w-full min-h-screen px-6 py-16 md:px-12 lg:px-24">
      <Image src="/project-3.png" alt="" fill className="absolute inset-0 object-cover object-top" priority />
      <div className="absolute inset-0 bg-black/65" />

      <div className="relative z-10 max-w-6xl mx-auto">

        {/* Space Header */}
        <div className="mb-10">
          <div className="flex items-start justify-between gap-6 flex-wrap">
            <div className="flex items-start gap-4">
              <div className="text-4xl mt-1">{space.icon}</div>
              <div>
                <p className="text-neutral-500 text-xs uppercase tracking-widest mb-1">
                  <Link href="/spaces" className="hover:text-neutral-300 transition">Spaces</Link>
                  <span className="mx-2">/</span>
                  {space.category}
                </p>
                <h1 className="text-3xl text-white tracking-wide mb-2" style={{ fontFamily: "MontserratSemiBold" }}>
                  {space.name}
                </h1>
                <p className="text-neutral-300 text-sm leading-relaxed max-w-2xl">{space.description}</p>
              </div>
            </div>
            <button
              onClick={() => setJoined((j) => !j)}
              className={`shrink-0 px-6 py-2.5 rounded-full text-sm font-semibold transition ${
                joined
                  ? "bg-neutral-800 text-neutral-300 border border-neutral-600 hover:border-neutral-400"
                  : "bg-white text-black hover:bg-neutral-200"
              }`}
            >
              {joined ? "✓ Joined" : "Join Space"}
            </button>
          </div>
        </div>

        {/* Two-column layout */}
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_300px] gap-8">

          {/* Main Feed */}
          <div className="flex flex-col gap-5">

            {/* Post Composer */}
            <div className="bg-black/60 border border-neutral-700 rounded-2xl p-5">
              <p className="text-white text-sm font-semibold mb-3">Post to this Space</p>
              <textarea
                value={draft}
                onChange={(e) => setDraft(e.target.value)}
                placeholder="Share an insight, question or resource with this community…"
                rows={4}
                className="w-full bg-neutral-900 border border-neutral-700 rounded-xl px-4 py-3 text-white text-sm outline-none placeholder-neutral-500 resize-none focus:border-neutral-500 transition mb-3"
              />
              <div className="flex items-center justify-between">
                <span className="text-neutral-600 text-xs">{draft.length} / 1000</span>
                <button
                  onClick={handlePost}
                  disabled={!draft.trim() || posting}
                  className="px-6 py-2 bg-white text-black text-sm font-semibold rounded-full hover:bg-neutral-200 transition disabled:opacity-40 disabled:cursor-not-allowed"
                >
                  {posting ? "Posting…" : "Post"}
                </button>
              </div>
            </div>

            {/* Feed label */}
            <div className="flex items-center gap-3">
              <p className="text-neutral-500 text-xs uppercase tracking-widest">Discussion Feed</p>
              <div className="flex-1 h-px bg-neutral-800" />
            </div>

            {/* Posts */}
            {posts.map((post) => (
              <PostCard key={post.id} post={post} onLike={handleLike} />
            ))}
          </div>

          {/* Sidebar */}
          <aside className="flex flex-col gap-5">

            {/* Members */}
            <div className="bg-black/60 border border-neutral-700 rounded-2xl p-5">
              <p className="text-neutral-500 text-xs uppercase tracking-widest mb-4">Space Members</p>
              <div className="flex items-end gap-3">
                <span className="text-white text-4xl font-bold" style={{ fontFamily: "MontserratSemiBold" }}>
                  {space.members + (joined ? 1 : 0)}
                </span>
                <span className="text-neutral-400 text-sm mb-1">members</span>
              </div>
              <p className="text-neutral-500 text-xs mt-2">Founding members earn Symbiosis OG status when the Space reaches 50.</p>
            </div>

            {/* Top Contributors */}
            <div className="bg-black/60 border border-neutral-700 rounded-2xl p-5">
              <p className="text-neutral-500 text-xs uppercase tracking-widest mb-4">Top Contributors</p>
              <div className="flex flex-col gap-3">
                {topContributors.map((c, i) => (
                  <div key={c.name} className="flex items-center gap-3">
                    <span className="text-neutral-600 text-xs w-4 text-right">{i + 1}</span>
                    <Avatar initials={c.initials} size="sm" />
                    <div className="flex-1 min-w-0">
                      <p className="text-white text-xs font-semibold truncate">{c.name}</p>
                      <p className="text-neutral-500 text-xs">{c.role}</p>
                    </div>
                    <span className="text-neutral-400 text-xs shrink-0">{c.posts} posts</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Related Spaces */}
            <div className="bg-black/60 border border-neutral-700 rounded-2xl p-5">
              <p className="text-neutral-500 text-xs uppercase tracking-widest mb-4">Related Spaces</p>
              <div className="flex flex-col gap-2">
                {relatedSpaces
                  .filter((s) => s.slug !== slug)
                  .slice(0, 3)
                  .map((s) => (
                    <Link
                      key={s.slug}
                      href={`/spaces/${s.slug}`}
                      className="flex items-center gap-3 px-3 py-2.5 rounded-xl border border-neutral-800 hover:border-neutral-600 hover:bg-neutral-900/50 transition"
                    >
                      <span className="text-lg">{s.icon}</span>
                      <span className="text-neutral-300 text-xs leading-snug">{s.name}</span>
                    </Link>
                  ))}
              </div>
            </div>

          </aside>
        </div>
      </div>
    </main>
  );
}
