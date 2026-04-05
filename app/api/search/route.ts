import Fuse from "fuse.js";
import data from "@/data/items.json";

export async function GET(req: Request) {
  const { searchParams } = new URL(req.url);
  const q = searchParams.get("q") || "";

  if (!q) return Response.json([]);

  const fuse = new Fuse(data, {
    keys: ["title", "summary"],
    threshold: 0.4,
  });

  const results = fuse.search(q).map((r) => r.item);

  return Response.json(results);
}

