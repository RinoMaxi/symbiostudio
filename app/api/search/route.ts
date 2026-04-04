import items from "@/data/items.json";

export async function GET(req: Request) {
  const { searchParams } = new URL(req.url);
  const q = searchParams.get("q")?.toLowerCase() || "";

  if (!q) return Response.json([]);

  const results = items
    .map(item => {
      const score =
        (item.title.toLowerCase().includes(q) ? 3 : 0) +
        (item.summary?.toLowerCase().includes(q) ? 1 : 0) +
        (item.tags?.some(t => t.toLowerCase().includes(q)) ? 2 : 0);

      return { ...item, score };
    })
    .filter(r => r.score > 0)
    .sort((a, b) => b.score - a.score);

  return Response.json(results);
}
