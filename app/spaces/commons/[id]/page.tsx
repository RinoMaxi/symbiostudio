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
          <h1 className="text-3xl mb-2">{item.title}</h1>

{/* Type Label */}
<p className="text-sm text-neutral-500 mb-4">
  {item.type === "project" ? "Project" : "Card"}
</p>

{/* Summary */}
<p className="text-neutral-700 mb-6">{item.summary}</p>

{/* Themes */}
{item.themes && item.themes.length > 0 && (
  <div className="flex flex-wrap gap-2 mb-10">
    {item.themes.map((theme: string) => (
      <span
        key={theme}
        className="
          px-3 py-1 
          text-sm 
          rounded-full 
          bg-neutral-200 
          text-neutral-700
        "
      >
        {theme}
      </span>
    ))}
  </div>
)}

          <section className="p-6 rounded-xl bg-neutral-100 shadow-sm">
  <h2 className="text-xl font-semibold mb-4">Snapshot</h2>

  {item.type === "card" && (
    <div>
      <h3 className="text-lg font-semibold mb-2">{item.snapshot_data.title}</h3>
      <p className="text-neutral-700 whitespace-pre-wrap">
        {item.snapshot_data.body}
      </p>
    </div>
  )}

  {item.type === "project" && (
    <div className="space-y-8">
      {item.snapshot_data.sections.map((section: any) => (
        <div key={section.id} className="p-4 rounded-lg bg-white shadow-sm">
          <h3 className="text-lg font-semibold mb-3">{section.title}</h3>

          <div className="space-y-4">
            {section.cards.map((card: any) => (
              <div key={card.id} className="p-3 rounded-md bg-neutral-50">
                <h4 className="font-semibold mb-1">{card.title}</h4>
                <p className="text-neutral-700 whitespace-pre-wrap">
                  {card.body}
                </p>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  )}
</section>
        </>
      )}
    </main>
  );
}
