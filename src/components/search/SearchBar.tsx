"use client";

import { useState, useEffect, useRef } from "react";

export default function SearchBar() {
  const [query, setQuery] = useState("");
  const [results, setResults] = useState<any[]>([]);
  const [loading, setLoading] = useState(false);
const [closing, setClosing] = useState(false);
const [activeIndex, setActiveIndex] = useState(-1);
const containerRef = useRef<HTMLDivElement>(null);

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
useEffect(() => {
  function handleClickOutside(event: MouseEvent) {
    if (containerRef.current && !containerRef.current.contains(event.target as Node)) {
      setQuery("");
      setResults([]);
      setActiveIndex(-1);
      setClosing(true);

      setTimeout(() => {
        setClosing(false);
      }, 180);
    }
  }

  document.addEventListener("mousedown", handleClickOutside);
  return () => document.removeEventListener("mousedown", handleClickOutside);
}, []);

  return () => clearTimeout(delay);
}, [query]);

function highlight(text: string, query: string) {
  if (!query) return text;
  const regex = new RegExp(`(${query})`, "gi");
  return text.replace(regex, "<strong>$1</strong>");
}
  return (
  <div ref={containerRef} className="relative w-full max-w-md">
      <input
        className="w-full border px-3 py-2 rounded"
        placeholder="Search..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      onKeyDown={(e) => {
  if (e.key === "ArrowDown") {
    e.preventDefault();
    setActiveIndex((prev) => Math.min(prev + 1, results.length - 1));
  }
  if (e.key === "ArrowUp") {
    e.preventDefault();
    setActiveIndex((prev) => Math.max(prev - 1, 0));
  }
  if (e.key === "Enter" && activeIndex >= 0) {
    window.location.href = `/items/${results[activeIndex].id}`;
  }
}}
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
    {results.map((r, index) => (
      <a
        key={r.id}
  href={`/items/${r.id}`}
  className={`
    block p-3 transition
    ${activeIndex === index ? "bg-gray-200" : "hover:bg-gray-100"}
  `}
      >
        <div
    className="font-semibold"
    dangerouslySetInnerHTML={{ __html: highlight(r.title, query) }}
  />
  <div
    className="text-sm text-gray-500"
    dangerouslySetInnerHTML={{ __html: highlight(r.summary, query) }}
  />
      </a>
    ))}
  </div>
)}

    </div>
  );
}


