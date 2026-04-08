"use client";

import { useEffect } from "react";

export default function AIModal({ open, onClose, content }) {
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
    <div className="fixed inset-0 bg-black/40 backdrop-blur-sm flex items-center justify-center z-[9999]">
      <div className="bg-white w-full max-w-xl rounded-xl shadow-xl p-6 animate-fadeIn">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-lg font-semibold">AI Result</h2>
          <button
            onClick={onClose}
            className="text-gray-500 hover:text-gray-700"
          >
            ✕
          </button>
        </div>

        <div className="max-h-[60vh] overflow-y-auto whitespace-pre-wrap text-gray-800">
          {content}
        </div>
      </div>
    </div>
  );
}
