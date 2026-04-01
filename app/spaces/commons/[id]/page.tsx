"use client";

import { useEffect, useState } from "react";

export default function CommonsItemPage({ params }: { params: { id: string } }) {
  const [item, setItem] = useState<any>(null);
  const [loading, setLoading] = useState(true);

  // ------------------------------------------------------------
  // LOAD ITEM ON PAGE OPEN
  // ------------------------------------------------------------
  useEffect(() => {
    async function loadItem() {
      try {
        const res = await fetch(`/commons/${params.id}`, {
          method: "GET",
          headers: { "Content-Type": "application/json" },
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

  // ------------------------------------------------------------
  // ACTION BAR FUNCTIONS
  // ------------------------------------------------------------
  async function handleSave() {
    try {
      const res = await fetch(`/commons/${params.id}/save-to-studio`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
      });

      if (!res.ok) throw new Error("Failed to save");
      alert("Saved to your Studio");
    } catch (err) {
      console.error(err);
      alert("Could not save");
    }
  }

  async function handleFork() {
    try {
      const res = await fetch(`/commons/${params.id}/fork-project`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
      });

      if (!res.ok) throw new Error("Failed to fork");
      alert("Project forked into your Studio");
    } catch (err) {
      console.error(err);
      alert("Could not fork project");
    }
  }

  async function handleWithdraw() {
    try {
      const res = await fetch(`/commons/${params.id}/withdraw`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
      });

      if (!res.ok) throw new Error("Failed to withdraw");
      alert("Item withdrawn from the Commons");
    } catch (err) {
      console.error(err);
      alert("Could not withdraw");
    }
  }

  // ------------------------------------------------------------
  // UI
  // ------------------------------------------------------------
  return (
    <main className="w-full min-h-screen px-6 py-16">
      {loading && <p>Loading item details...</p>}
      {!loading && !item && <p>Item not found.</p>}

      {!loading && item && (
        <>
          {/* Back Button */}
          <button
            onClick={() => window.history.back()}
            className="
              mb-8
              px-4 py-2
              rounded-lg
              bg-neutral-200
              text-neutral-800
              hover:bg-neutral-300
              transition
            "
          >
            ← Back
          </button>

          {/* Title */}
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

          {/* Action Bar */}
          <div className="flex gap-4 mb-10">
            <button
              onClick={handleSave}
              className="
                px-4 py-2 
                rounded-lg 
                bg-neutral-800 
                text-white 
                hover:bg-neutral-700 
                transition
              "
            >
              Save to Studio
            </button>

            {item.type === "project" && (
              <button
                onClick={handleFork}
                className="
                  px-4 py-2 
                  rounded-lg 
                  bg-neutral-200 
                  text-neutral-800 
                  hover:bg-neutral-300 
                  transition
                "
              >
                Fork Project
              </button>
            )}

            {item.is_owner && (
              <button
                onClick={handleWithdraw}
                className="
                  px-4 py-2 
                  rounded-lg 
                  bg-red-200 
                  text-red-800 
                  hover:bg-red-300 
                  transition
                "
              >
                Withdraw
              </button>
            )}
          </div>

          {/* Snapshot Renderer */}
          <section className="p-6 rounded-xl bg-neutral-100 shadow-sm">
            <h2 className="text-xl font-semibold mb-4">Snapshot</h2>

            {/* CARD TYPE */}
            {item.type === "card" && (
              <div>
                <h3 className="text-lg font-semibold mb-2">
                  {item.snapshot_data.title}
                </h3>
                <p className="text-neutral-700 whitespace-pre-wrap">
                  {item.snapshot_data.body}
                </p>
              </div>
            )}

            {/* PROJECT TYPE */}
            {item.type === "project" && (
              <div className="space-y-8">
                {item.snapshot_data.sections.map((section: any) => (
                  <div
                    key={section.id}
                    className="p-4 rounded-lg bg-white shadow-sm"
                  >
                    <h3 className="text-lg font-semibold mb-3">
                      {section.title}
                    </h3>

                    <div className="space-y-4">
                      {section.cards.map((card: any) => (
                        <div
                          key={card.id}
                          className="p-3 rounded-md bg-neutral-50"
                        >
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

          {/* Related Items */}
          {item.related_items && item.related_items.length > 0 && (
            <section className="mt-16">
              <h2 className="text-xl font-semibold mb-6">Related Items</h2>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {item.related_items.map((rel: any) => (
                  <div
                    key={rel.id}
                    onClick={() =>
                      (window.location.href = `/spaces/commons/${rel.id}`)
                    }
                    className="
                      p-4 
                      rounded-lg 
                      bg-neutral-100 
                      shadow-sm 
                      hover:shadow-md 
                      transition 
                      cursor-pointer
                    "
                  >
                    <h3 className="text-lg font-semibold mb-1">{rel.title}</h3>
                    <p className="text-sm text-neutral-600">{rel.summary}</p>
                  </div>
                ))}
              </div>
            </section>
          )}
        </>
      )}
    </main>
  );
}



