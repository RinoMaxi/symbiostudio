"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

export default function CommonsPage() {
  const [items, setItems] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const router = useRouter();
const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timeout = setTimeout(() => setIsVisible(true), 30);
    return () => clearTimeout(timeout);
  }, []);
  useEffect(() => {
    async function loadCommons() {
      try {
        const res = await fetch("/api/improve/news", {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
        });

        const data = await res.json();
        setItems(data);
      } catch (err) {
        console.error("Failed to load commons:", err);
      } finally {
        setLoading(false);
      }
    }

    loadCommons();
  }, []);

  return (
    <main
    className={`w-full min-h-screen px-6 py-16 commons-fade-in ${
      isVisible ? "visible" : ""
    }`}
  >
      <h1 className="text-3xl mb-8">The Commons</h1>

      {loading && <p>Loading shared items...</p>}

      {!loading && items.length === 0 && (
        <p>No items published yet.</p>
      )}

      {!loading && items.length > 0 && (
        <div
          className="
            grid
            grid-cols-1
            sm:grid-cols-2
            md:grid-cols-3
            lg:grid-cols-4
            gap-8
          "
        >
          {items.map((item, index) => (
  <div
    key={item.id}
    onClick={() => router.push(`/spaces/commons/${item.id}`)}
    style={{ transitionDelay: `${index * 50}ms` }}
    className={`
      p-6
      rounded-xl
      bg-neutral-100
      shadow-sm
      hover:shadow-md
      transition-shadow
      cursor-pointer
      card-fade
      ${isVisible ? "visible" : ""}
    `}
  >
    <h2 className="text-lg font-semibold mb-2">{item.title}</h2>
    <p className="text-sm text-neutral-600">{item.summary}</p>
  </div>
))}

        </div>
      )}
    </main>
  );
}



