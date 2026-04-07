"use client";
import {
  HomeIcon,
  FolderIcon,
  BoltIcon,
  MagnifyingGlassIcon,
  PlusIcon,
  UserGroupIcon,
} from "@heroicons/react/24/outline";

import { useState, useEffect, useRef } from "react";

export default function CommandPalette() {
  const [open, setOpen] = useState(false);
  const [query, setQuery] = useState("");
  const [results, setResults] = useState<any[]>([]);
  const [activeIndex, setActiveIndex] = useState(-1);

  const paletteRef = useRef<HTMLDivElement>(null);

  // Open with Cmd+K / Ctrl+K
  useEffect(() => {
    function handleKey(e: KeyboardEvent) {
      if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === "k") {
        e.preventDefault();
        setOpen(true);
      }
      if (e.key === "Escape") {
        setOpen(false);
      }
    }
    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, []);

  // Click outside to close
  useEffect(() => {
    function handleClickOutside(e: MouseEvent) {
      if (paletteRef.current && !paletteRef.current.contains(e.target as Node)) {
        setOpen(false);
      }
    }
    if (open) document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [open]);

  // Fetch results
  useEffect(() => {
    if (!query) {
      setResults([]);
      return;
    }

    const delay = setTimeout(async () => {
      const res = await fetch(`/api/search?q=${query}`);
      const data = await res.json();
      setResults(data);
    }, 200);

    return () => clearTimeout(delay);
  }, [query]);

  // Highlight helper
  function highlight(text: string, query: string) {
    if (!query) return text;
    const regex = new RegExp(`(${query})`, "gi");
    return text.replace(regex, "<strong>$1</strong>");
  }

  if (!open) return null;
const commands = [
  {
    section: "Navigation",
    items: [
      {
        id: "home",
        label: "Go to Home",
        icon: HomeIcon,
        shortcut: "G H",
        action: () => (window.location.href = "/"),
      },
      {
        id: "studio",
        label: "Go to Studio",
        icon: BoltIcon,
        shortcut: "G S",
        action: () => (window.location.href = "/studio"),
      },
      {
        id: "agents",
        label: "Open Agents",
        icon: UserGroupIcon,
        shortcut: "G A",
        action: () => (window.location.href = "/agents"),
      },
      {
        id: "projects",
        label: "Open Projects",
        icon: FolderIcon,
        shortcut: "G P",
        action: () => (window.location.href = "/projects"),
      },
    ],
  },

  {
    section: "Actions",
    items: [
      {
        id: "new-project",
        label: "New Project",
        icon: PlusIcon,
        shortcut: "N P",
        action: () => alert("New Project Created!"),
      },
      {
        id: "search",
        label: "Open Search",
        icon: MagnifyingGlassIcon,
        shortcut: "S",
        action: () => document.querySelector("#search")?.focus(),
      },
    ],
  },

  {
    section: "AI Tools",
    items: [
      {
        id: "ai-summary",
        label: "Summarize Page",
        icon: BoltIcon,
        shortcut: "A S",
        action: () => alert("AI Summary Placeholder"),
      },
    ],
  },
];

  return (
    <div className="fixed inset-0 bg-black/40 backdrop-blur-sm flex items-start justify-center pt-32 z-50">
      <div
        ref={paletteRef}
        className="bg-white w-full max-w-xl rounded-xl shadow-xl p-4"
      >
        <input
          autoFocus
          className="w-full border px-3 py-2 rounded mb-3"
          placeholder="Type a command or search..."
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
  filteredCommands[activeIndex].action();
}

          }}
        />

        <div className="max-h-80 overflow-y-auto">
  {filteredCommands.map((cmd, index) => (
    <div
      key={cmd.id}
      className={`
        p-3 rounded cursor-pointer
        ${activeIndex === index ? "bg-gray-200" : "hover:bg-gray-100"}
      `}
      onMouseEnter={() => setActiveIndex(index)}
      onClick={() => cmd.action()}
    >
      {cmd.label}
    </div>
  ))}
</div>
<div className="max-h-80 overflow-y-auto">
          {results.map((r, index) => (
            <div
              key={r.id}
              className={`
                p-3 rounded cursor-pointer
                ${activeIndex === index ? "bg-gray-200" : "hover:bg-gray-100"}
              `}
              onMouseEnter={() => setActiveIndex(index)}
              onClick={() => (window.location.href = `/items/${r.id}`)}
            >
              <div
                className="font-semibold"
                dangerouslySetInnerHTML={{ __html: highlight(r.title, query) }}
              />
              <div
                className="text-sm text-gray-500"
                dangerouslySetInnerHTML={{ __html: highlight(r.summary, query) }}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
