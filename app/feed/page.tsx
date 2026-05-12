"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

type Post = {
  id: string;
  author: string;
  content: string;
  space: string;
  likes: number;
  comments: number;
  points: number;
  created_at: string;
};

function relativeTime(iso: string): string {
  const diff = Date.now() - new Date(iso).getTime();
  const mins = Math.floor(diff / 60000);
  if (mins < 1) return "just now";
  if (mins < 60) return `${mins}m ago`;
  const hrs = Math.floor(mins / 60);
  if (hrs < 24) return `${hrs}h ago`;
  const days = Math.floor(hrs / 24);
  if (days === 1) return "yesterday";
  return `${days}d ago`;
}

export default function FeedPage() {
  const [posts, setPosts] = useState<Post[]>([]);
  const [newPost, setNewPost] = useState("");
  const [liked, setLiked] = useState<string[]>([]);
  const [loading, setLoading] = useState(true);
  const [posting, setPosting] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    fetch("/api/posts")
      .then((r) => {
        if (!r.ok) throw new Error(`${r.status}`);
        return r.json();
      })
      .then((data) => setPosts(data))
      .catch(() => setError("Could not load posts."))
      .finally(() => setLoading(false));
  }, []);

  const handlePost = async () => {
    if (!newPost.trim() || posting) return;
    setPosting(true);

    try {
      const res = await fetch("/api/posts", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ author: "rinomax", content: newPost, space: "General" }),
      });
      const data = await res.json();
      if (res.ok) {
        setPosts((prev) => [data, ...prev]);
        setNewPost("");
      }
    } finally {
      setPosting(false);
    }
  };

  const handleLike = (id: string) => {
    if (liked.includes(id)) return;
    setLiked((prev) => [...prev, id]);
    setPosts((prev) =>
      prev.map((p) => (p.id === id ? { ...p, likes: p.likes + 1 } : p))
    );
  };

  return (
    <main className="relative min-h-screen w-full">
      <Image src="/hero-main.png" alt="" fill className="absolute inset-0 object-cover object-top" priority />
      <div className="absolute inset-0 bg-black/70" />

      <div className="relative z-10 max-w-2xl mx-auto px-4 py-16">
        <h1 className="text-3xl text-white font-semibold mb-2">Feed</h1>
        <p className="text-neutral-400 mb-8">What the community is building, solving, and sharing.</p>

        {/* Create Post */}
        <div className="bg-black/60 border border-neutral-700 rounded-2xl p-5 mb-8">
          <textarea
            className="w-full bg-transparent text-white placeholder-neutral-500 text-sm resize-none outline-none mb-4"
            rows={3}
            placeholder="Share something with the community — a solution, a question, a discovery..."
            value={newPost}
            onChange={(e) => setNewPost(e.target.value)}
          />
          <div className="flex justify-between items-center">
            <span className="text-neutral-500 text-xs">+5 points for posting</span>
            <button
              onClick={handlePost}
              disabled={!newPost.trim() || posting}
              className="px-5 py-2 bg-white text-black text-sm font-semibold rounded-full hover:bg-neutral-200 transition disabled:opacity-40 disabled:cursor-not-allowed"
            >
              {posting ? "Posting…" : "Post"}
            </button>
          </div>
        </div>

        {/* Posts */}
        {loading ? (
          <div className="flex flex-col gap-4">
            {[1, 2, 3].map((n) => (
              <div key={n} className="bg-black/60 border border-neutral-800 rounded-2xl p-5 animate-pulse">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-8 h-8 rounded-full bg-neutral-800" />
                  <div className="h-3 w-24 bg-neutral-800 rounded" />
                </div>
                <div className="space-y-2">
                  <div className="h-3 bg-neutral-800 rounded w-full" />
                  <div className="h-3 bg-neutral-800 rounded w-4/5" />
                </div>
              </div>
            ))}
          </div>
        ) : error ? (
          <p className="text-neutral-500 text-sm text-center py-10">{error}</p>
        ) : posts.length === 0 ? (
          <p className="text-neutral-500 text-sm text-center py-10">No posts yet. Be the first to share something.</p>
        ) : (
          <div className="flex flex-col gap-6">
            {posts.map((post) => (
              <div key={post.id} className="bg-black/60 border border-neutral-700 rounded-2xl p-5">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-8 h-8 rounded-full bg-neutral-700 overflow-hidden">
                    <Image src="/symbio_logo.png" alt={post.author} width={32} height={32} className="object-contain" />
                  </div>
                  <div>
                    <span className="text-white text-sm font-semibold">{post.author}</span>
                    <span className="text-neutral-500 text-xs ml-2">{relativeTime(post.created_at)}</span>
                  </div>
                  <span className="ml-auto text-xs text-neutral-500 border border-neutral-700 rounded-full px-3 py-1">
                    {post.space}
                  </span>
                </div>

                <p className="text-neutral-200 text-sm leading-relaxed mb-4">{post.content}</p>

                <div className="flex items-center gap-5 text-neutral-500 text-xs">
                  <button
                    onClick={() => handleLike(post.id)}
                    className={`flex items-center gap-1 hover:text-white transition ${liked.includes(post.id) ? "text-white" : ""}`}
                  >
                    ▲ {post.likes}
                  </button>
                  <button className="flex items-center gap-1 hover:text-white transition">
                    💬 {post.comments}
                  </button>
                  <span className="ml-auto text-emerald-500">+{post.points} pts</span>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </main>
  );
}
