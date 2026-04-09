import { useEffect, useState } from "react";
import ReactMarkdown from "react-markdown";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { oneDark } from "react-syntax-highlighter/dist/esm/styles/prism";


export default function AIModal({ open, onClose, content }) {
const [activeTab, setActiveTab] = useState("rewrite");

  // Close on Escape
  useEffect(() => {
    function handleKey(e) {
      if (e.key === "Escape") onClose();
    }
    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, [onClose]);

  if (!open) return null;

  return (
    <div className="fixed inset-0 bg-black/40 backdrop-blur-sm flex items-center justify-center z-50">
      <div className="bg-white w-full max-w-xl rounded-xl shadow-xl p-6">

        {/* HEADER */}
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-lg font-semibold">AI Result</h2>

          <div className="flex items-center gap-3">
            <button
              onClick={() => navigator.clipboard.writeText(content)}
              className="text-sm px-3 py-1 rounded bg-gray-200 hover:bg-gray-300"
            >
              Copy
            </button>

            <button
              onClick={() => {
                const sel = window.getSelection();
                if (!sel || sel.rangeCount === 0) return;
                const range = sel.getRangeAt(0);
                range.deleteContents();
                range.insertNode(document.createTextNode(content));
                onClose();
              }}
              className="text-sm px-3 py-1 rounded bg-blue-500 text-white hover:bg-blue-600"
            >
              Insert
            </button>

            <button
              onClick={onClose}
              className="text-gray-500 hover:text-gray-700 text-xl"
            >
              ×
            </button>
          </div>
        </div>

        {/* CONTENT */}
        <div className="max-h-[60vh] overflow-y-auto prose prose-neutral">
{/* TAB BAR */}
<div className="flex gap-2 mb-4 border-b pb-2">
  {[
    { id: "rewrite", label: "Rewrite" },
    { id: "explain", label: "Explain" },
    { id: "code", label: "Code Tools" },
    { id: "translate", label: "Translate" },
    { id: "summary", label: "Summary" },
  ].map((tab) => (
    <button
      key={tab.id}
      onClick={() => setActiveTab(tab.id)}
      className={`text-sm px-3 py-1 rounded ${
        activeTab === tab.id
          ? "bg-blue-500 text-white"
          : "bg-gray-100 hover:bg-gray-200"
      }`}
    >
      {tab.label}
    </button>
  ))}
</div>
{activeTab === "rewrite" && (
  <div>

    {/* TONE SELECTOR */}
    <div className="flex gap-2 mb-4 flex-wrap">
      {["professional", "casual", "academic", "friendly", "simplified", "formal"].map((tone) => (
        <button
          key={tone}
          onClick={async () => {
            const res = await fetch("/api/ai/improve", {
              method: "POST",
              headers: { "Content-Type": "application/json" },
              body: JSON.stringify({ text: content, tone }),
            });
            const data = await res.json();
            onClose();
            setTimeout(() => {
              window.dispatchEvent(
                new CustomEvent("open-ai-modal", { detail: data.result })
              );
            }, 10);
          }}
          className="text-xs px-2 py-1 rounded bg-gray-100 hover:bg-gray-200 border"
        >
          {tone}
        </button>
      ))}
    </div>

    {/* LENGTH CONTROLS */}
    {/* paste your length buttons here */}

    {/* FIX GRAMMAR */}
    {/* paste your Fix Grammar button here */}

    {/* READABLE REWRITE (coming soon) */}

  </div>
)}

          {/* LENGTH CONTROLS */}
          <div className="flex gap-2 mb-4 flex-wrap">
            {[
              { label: "Shorter", mode: "shorter and more concise" },
              { label: "Longer", mode: "longer and more detailed" },
              { label: "Punchier", mode: "more punchy and impactful" },
            ].map(({ label, mode }) => (
              <button
                key={label}
                onClick={async () => {
                  const res = await fetch("/api/ai/length", {
                    method: "POST",
                    headers: { "Content-Type": "application/json" },
                    body: JSON.stringify({ text: content, mode }),
                  });

                  const data = await res.json();
                  onClose();

                  setTimeout(() => {
                    window.dispatchEvent(
                      new CustomEvent("open-ai-modal", { detail: data.result })
                    );
                  }, 10);
                }}
                className="text-xs px-2 py-1 rounded bg-gray-100 hover:bg-gray-200 border"
              >
                {label}
              </button>
            ))}
          </div>

          {/* EXPLAIN LIKE I'M 5 */}
          <button
            onClick={async () => {
              const res = await fetch("/api/ai/explain5", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ text: content }),
              });

              const data = await res.json();
              onClose();

              setTimeout(() => {
                window.dispatchEvent(
                  new CustomEvent("open-ai-modal", { detail: data.result })
                );
              }, 10);
            }}
            className="text-xs px-2 py-1 rounded bg-yellow-100 hover:bg-yellow-200 border mb-4"
          >
            Explain Like I'm 5
          </button>

          {/* EXPLAIN STEP BY STEP */}
          <button
            onClick={async () => {
              const res = await fetch("/api/ai/explain-steps", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ text: content }),
              });

              const data = await res.json();
              onClose();

              setTimeout(() => {
                window.dispatchEvent(
                  new CustomEvent("open-ai-modal", { detail: data.result })
                );
              }, 10);
            }}
            className="text-xs px-2 py-1 rounded bg-green-100 hover:bg-green-200 border mb-4 ml-2"
          >
            Explain Step‑by‑Step
          </button>
<button
  onClick={async () => {
    const res = await fetch("/api/ai/explain-code", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ text: content }),
    });

    const data = await res.json();

    onClose();

    setTimeout(() => {
      window.dispatchEvent(
        new CustomEvent("open-ai-modal", { detail: data.result })
      );
    }, 10);
  }}
  className="text-xs px-2 py-1 rounded bg-purple-100 hover:bg-purple-200 border mb-4 ml-2"
>
  Explain Code Logic
</button>
{/* REFACTOR CODE */}
<button
  onClick={async () => {
    const res = await fetch("/api/ai/refactor-code", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ text: content }),
    });

    const data = await res.json();

    onClose();

    setTimeout(() => {
      window.dispatchEvent(
        new CustomEvent("open-ai-modal", { detail: data.result })
      );
    }, 10);
  }}
  className="text-xs px-2 py-1 rounded bg-red-100 hover:bg-red-200 border mb-4 ml-2"
>
  Refactor Code
</button>   {/*
{/* SUMMARIZE CODE */}
<button
  onClick={async () => {
    const res = await fetch("/api/ai/summarize-code", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ text: content }),
    });

    const data = await res.json();

    onClose();

    setTimeout(() => {
      window.dispatchEvent(
        new CustomEvent("open-ai-modal", { detail: data.result })
      );
    }, 10);
  }}
  className="text-xs px-2 py-1 rounded bg-orange-100 hover:bg-orange-200 border mb-4 ml-2"
>
  Summarize Code
</button>
{/* FIX GRAMMAR */}
<button
  onClick={async () => {
    const res = await fetch("/api/ai/fix-grammar", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ text: content }),
    });

    const data = await res.json();
    onClose();

    setTimeout(() => {
      window.dispatchEvent(
        new CustomEvent("open-ai-modal", { detail: data.result })
      );
    }, 10);
  }}
  className="text-xs px-2 py-1 rounded bg-blue-100 hover:bg-blue-200 border mb-4 ml-2"
>
  Fix Grammar
</button>


          {/* MARKDOWN RENDERING */}
          <ReactMarkdown
            components={{
              code({ inline, className, children, ...props }) {
                const match = /language-(\w+)/.exec(className || "");
                return !inline && match ? (
                  <SyntaxHighlighter
                    style={oneDark}
                    language={match[1]}
                    PreTag="div"
                    className="rounded-md my-4"
                    {...props}
                  >
                    {String(children).replace(/\n$/, "")}
                  </SyntaxHighlighter>
                ) : (
                  <code className={className} {...props}>
                    {children}
                  </code>
                );
              },
            }}
          >
            {content}
          </ReactMarkdown>

        </div>
      </div>
    </div>
  );
}

