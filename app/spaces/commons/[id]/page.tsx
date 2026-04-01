"use client";

import { useEffect, useState } from "react";

export default function CommonsItemPage({ params }: { params: { id: string } }) {
  const [item, setItem] = useState<any>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function loadItem() {
      try {
        const res = await fetch(`/commons/${params.id}`, {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
        });

        const data = await res.json();
        setItem(data);
      } catch (err) {
        console.error("Failed to load item:", err);
      } finally {
        setLoading(false);
      }
    }

    loadItem();
  }, [params.id]);

  return (
    <main className="w-full min-h-screen px-6 py-16">
      {loading && <p>Loading item details...</p>}

      {!loading && !item && (
        <p>Item not found.</p>
      )}

      {!loading && item && (
        <>
          <h1 className="text-3xl mb-4">{item.title}</h1>
          <p className="text-neutral-600 mb-8">{item.summary}</p>

          <section className="p-6 rounded-xl bg-neutral-100 shadow-sm">
            <h2 className="text-xl font-semibold mb-4">Snapshot</h2>
            <pre className="text-sm whitespace-pre-wrap">
              {JSON.stringify(item.snapshot_data, null, 2)}
            </pre>
          </section>
        </>
      )}
    </main>
  );
}
