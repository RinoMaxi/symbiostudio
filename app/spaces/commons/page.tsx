"use client";

import { useEffect, useState } from "react";

export default function CommonsPage() {
  const [items, setItems] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function loadCommons() {
      try {
        const res = await fetch("/commons", {
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
    <main className="w-full min-h-screen px-6 py-16">
      <h1 className="text-3xl mb-8">The Commons</h1>

      {loading && <p>Loading shared items...</p>}

      {!loading && items.length === 0 && (
        <p>No items published yet.</p>
      )}

      {!loading && items.length > 0 && (
        <ul className="space-y-4">
          {items.map((item) => (
            <li key={item.id} className="p-4 rounded-lg bg-neutral-100">
              <strong>{item.title}</strong>
              <p className="text-sm text-neutral-600">{item.summary}</p>
            </li>
          ))}
        </ul>
      )}
    </main>
  );
}

