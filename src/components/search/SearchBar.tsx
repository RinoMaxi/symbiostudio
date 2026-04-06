"use client";

import { useState, useEffect } from "react";

export default function SearchBar() {
  const [query, setQuery] = useState("");
  const [results, setResults] = useState<any[]>([]);
  const [loading, setLoading] = useState(false);
const [closing, setClosing] = useState(false);

  useEffect(() => {
  if (!query) {
    setClosing(true);
    setTimeout(() => {
      setResults([]);
      setClosing(false);
    }, 180);
    return;
  }

  const delay = setTimeout(async () => {
    setLoading(true);
    const res = await fetch(`/api/search?q=${query}`);
    const data = await res.json();
    setResults(data);
    setLoading(false);
  }, 200);

  return () => clearTimeout(delay);
}, [query]);


  return (
    <div className="relative w-full max-w-md">
      <input
        className="w-full border px-3 py-2 rounded"
        placeholder="Search..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />

      {loading && (
        <div className="absolute top-full mt-2 text-sm text-gray-500">
          Loading...
        </div>
      )}

      {(results.length > 0 || closing) && (
  <div
    className={`
      absolute top-full mt-2 w-full bg-white shadow-lg rounded-lg border border-gray-200 origin-top
      ${closing ? "animate-dropdown-out" : "animate-dropdown"}
    `}
  >
    {results.map((r) => (
      <a
        key={r.id}
        href={`/items/${r.id}`}
        className="block p-3 hover:bg-gray-100 transition"
      >
        <div className="font-semibold">{r.title}</div>
        <div className="text-sm text-gray-500">{r.summary}</div>
      </a>
    ))}
  </div>
)}

    </div>
  );
}


