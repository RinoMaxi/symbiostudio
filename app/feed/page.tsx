"use client";
import { useState } from "react";
import Image from "next/image";

const mockPosts = [
  {
    id: 1,
    author: "rinomax",
    avatar: "/symbio_logo.png",
    time: "2 hours ago",
    content: "Just tested GPT-5 on complex reasoning tasks — the improvement in multi-step logic is real. Anyone else noticing it handles contradictions much better now?",
    likes: 12,
    comments: 4,
    space: "AI Tools & Productivity",
    points: 15,
  },
  {
    id: 2,
    author: "alex_builds",
    avatar: "/symbio_logo.png",
    time: "5 hours ago",
    content: "Built a prompt chain that automates my entire client onboarding process. Saved 3 hours this week alone. Happy to share the template — drop a comment if you want it.",
    likes: 28,
    comments: 11,
    space: "Prompt Engineering",
    points: 40,
  },
  {
    id: 3,
    author: "maria_ai",
    avatar: "/symbio_logo.png",
    time: "yesterday",
    content: "Question for the community: what's your go-to AI tool for summarising long research papers? I've tried 4 different ones this month and none feel right yet.",
    likes: 7,
    comments: 9,
    space: "Learning & Resources",
    points: 10,
  },
];

export default function FeedPage() {
  const [posts, setPosts] = useState(mockPosts);
  const [newPost, setNewPost] = useState("");
  const [liked, setLiked] = useState<number[]>([]);

  const handlePost = () => {
    if (!newPost.trim()) return;
    const post = {
      id: Date.now(),
      author: "rinomax",
      avatar: "/symbio_logo.png",
      time: "just now",
      content: newPost,
      likes: 0,
      comments: 0,
      space: "General",
      points: 5,
    };
    setPosts([post, ...posts]);
    setNewPost("");
  };

  const handleLike = (id: number) => {
    if (liked.includes(id)) return;
    setLiked([...liked, id]);
    setPosts(posts.map(p => p.id === id ? { ...p, likes: p.likes + 1 } : p));
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
              className="px-5 py-2 bg-white text-black text-sm font-semibold rounded-full hover:bg-neutral-200 transition"
            >
              Post
            </button>
          </div>
        </div>

        {/* Posts */}
        <div className="flex flex-col gap-6">
          {posts.map((post) => (
            <div key={post.id} className="bg-black/60 border border-neutral-700 rounded-2xl p-5">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-8 h-8 rounded-full bg-neutral-700 overflow-hidden">
                  <Image src={post.avatar} alt={post.author} width={32} height={32} className="object-contain" />
                </div>
                <div>
                  <span className="text-white text-sm font-semibold">{post.author}</span>
                  <span className="text-neutral-500 text-xs ml-2">{post.time}</span>
                </div>
                <span className="ml-auto text-xs text-neutral-500 border border-neutral-700 rounded-full px-3 py-1">{post.space}</span>
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
      </div>
    </main>
  );
}
