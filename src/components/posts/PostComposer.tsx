"use client";

import { useRef, useState } from "react";

export type Post = {
  id: string;
  author: string;
  content: string;
  space: string;
  likes: number;
  comments: number;
  points: number;
  created_at: string;
  media_urls: string[];
  video_url: string | null;
};

type MediaAttachment = {
  url: string;
  name: string;
  type: "image" | "document";
};

interface Props {
  space: string;
  onPostCreated: (post: Post) => void;
  placeholder?: string;
  title?: string;
  rows?: number;
}

function getEmbedUrl(url: string): string | null {
  try {
    const u = new URL(url);
    if (
      (u.hostname === "youtube.com" || u.hostname === "www.youtube.com") &&
      u.searchParams.get("v")
    ) {
      return `https://www.youtube.com/embed/${u.searchParams.get("v")}`;
    }
    if (u.hostname === "youtu.be") {
      return `https://www.youtube.com/embed${u.pathname}`;
    }
    if (u.hostname === "vimeo.com" || u.hostname === "www.vimeo.com") {
      const id = u.pathname.split("/").filter(Boolean)[0];
      if (id && /^\d+$/.test(id)) {
        return `https://player.vimeo.com/video/${id}`;
      }
    }
    return null;
  } catch {
    return null;
  }
}

export default function PostComposer({
  space,
  onPostCreated,
  placeholder,
  title,
  rows = 3,
}: Props) {
  const [content, setContent] = useState("");
  const [attachments, setAttachments] = useState<MediaAttachment[]>([]);
  const [videoUrl, setVideoUrl] = useState("");
  const [videoMode, setVideoMode] = useState(false);
  const [uploading, setUploading] = useState(false);
  const [uploadError, setUploadError] = useState<string | null>(null);
  const [posting, setPosting] = useState(false);
  const imgRef = useRef<HTMLInputElement>(null);
  const docRef = useRef<HTMLInputElement>(null);

  const uploadFile = async (file: File) => {
    setUploading(true);
    setUploadError(null);
    try {
      const fd = new FormData();
      fd.append("file", file);
      const res = await fetch("/api/upload", { method: "POST", body: fd });
      const data = await res.json();
      if (!res.ok) throw new Error(data.error ?? "Upload failed");
      setAttachments((prev) => [
        ...prev,
        { url: data.url, name: data.name, type: data.type },
      ]);
    } catch (e) {
      setUploadError(e instanceof Error ? e.message : "Upload failed");
    } finally {
      setUploading(false);
    }
  };

  const removeAttachment = (index: number) => {
    setAttachments((prev) => prev.filter((_, i) => i !== index));
  };

  const handleSubmit = async () => {
    if (
      (!content.trim() && attachments.length === 0) ||
      posting ||
      uploading
    )
      return;
    setPosting(true);
    try {
      const embedUrl = videoUrl ? getEmbedUrl(videoUrl) : null;
      const res = await fetch("/api/posts", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          author: "rinomax",
          content: content.trim(),
          space,
          media_urls: attachments.map((a) => a.url),
          video_url: embedUrl,
        }),
      });
      const data = await res.json();
      if (res.ok) {
        onPostCreated(data);
        setContent("");
        setAttachments([]);
        setVideoUrl("");
        setVideoMode(false);
      }
    } finally {
      setPosting(false);
    }
  };

  const embedUrl = videoUrl ? getEmbedUrl(videoUrl) : null;
  const canSubmit =
    (content.trim().length > 0 || attachments.length > 0) &&
    !posting &&
    !uploading;

  return (
    <div className="bg-black/60 border border-neutral-700 rounded-2xl p-5">
      {title && (
        <p className="text-white text-sm font-semibold mb-3">{title}</p>
      )}

      <textarea
        className="w-full bg-transparent text-white placeholder-neutral-500 text-sm resize-none outline-none mb-3"
        rows={rows}
        placeholder={
          placeholder ?? "Share something with the community…"
        }
        value={content}
        onChange={(e) => setContent(e.target.value)}
      />

      {videoMode && (
        <div className="mb-3">
          <input
            type="url"
            value={videoUrl}
            onChange={(e) => setVideoUrl(e.target.value)}
            placeholder="Paste a YouTube or Vimeo URL…"
            className="w-full bg-neutral-900 border border-neutral-700 rounded-xl px-4 py-2.5 text-white text-sm outline-none placeholder-neutral-500 focus:border-neutral-500 transition"
          />
          {videoUrl && !embedUrl && (
            <p className="text-neutral-500 text-xs mt-1.5">
              Enter a valid YouTube or Vimeo URL to see a preview.
            </p>
          )}
          {embedUrl && (
            <div className="mt-2 aspect-video rounded-xl overflow-hidden">
              <iframe
                src={embedUrl}
                className="w-full h-full"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </div>
          )}
        </div>
      )}

      {attachments.length > 0 && (
        <div className="flex flex-wrap gap-2 mb-3">
          {attachments.map((a, i) =>
            a.type === "image" ? (
              <div
                key={i}
                className="relative group w-20 h-20 rounded-lg overflow-hidden border border-neutral-700"
              >
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={a.url}
                  alt={a.name}
                  className="w-full h-full object-cover"
                />
                <button
                  onClick={() => removeAttachment(i)}
                  className="absolute top-1 right-1 w-5 h-5 bg-black/70 rounded-full text-white text-xs flex items-center justify-center opacity-0 group-hover:opacity-100 transition"
                >
                  ×
                </button>
              </div>
            ) : (
              <div
                key={i}
                className="flex items-center gap-2 bg-neutral-800 border border-neutral-700 rounded-lg px-3 py-2 max-w-[200px]"
              >
                <span className="text-base shrink-0">📄</span>
                <span className="text-xs text-neutral-300 truncate flex-1">
                  {a.name}
                </span>
                <button
                  onClick={() => removeAttachment(i)}
                  className="text-neutral-500 hover:text-white transition text-sm shrink-0 leading-none"
                >
                  ×
                </button>
              </div>
            )
          )}
        </div>
      )}

      <div className="flex items-center justify-between">
        <div className="flex items-center gap-1">
          <button
            onClick={() => imgRef.current?.click()}
            disabled={uploading}
            title="Attach image (max 10 MB)"
            className="p-2 text-neutral-500 hover:text-white rounded-lg hover:bg-neutral-800 transition disabled:opacity-40"
          >
            <svg
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.5"
            >
              <rect x="3" y="3" width="18" height="18" rx="2" ry="2" />
              <circle cx="8.5" cy="8.5" r="1.5" />
              <polyline points="21 15 16 10 5 21" />
            </svg>
          </button>
          <button
            onClick={() => docRef.current?.click()}
            disabled={uploading}
            title="Attach PDF or Word document (max 25 MB)"
            className="p-2 text-neutral-500 hover:text-white rounded-lg hover:bg-neutral-800 transition disabled:opacity-40"
          >
            <svg
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.5"
            >
              <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
              <polyline points="14 2 14 8 20 8" />
              <line x1="16" y1="13" x2="8" y2="13" />
              <line x1="16" y1="17" x2="8" y2="17" />
              <polyline points="10 9 9 9 8 9" />
            </svg>
          </button>
          <button
            onClick={() => setVideoMode((v) => !v)}
            title="Embed YouTube or Vimeo video"
            className={`p-2 rounded-lg transition ${
              videoMode
                ? "text-white bg-neutral-800"
                : "text-neutral-500 hover:text-white hover:bg-neutral-800"
            }`}
          >
            <svg
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.5"
            >
              <polygon points="23 7 16 12 23 17 23 7" />
              <rect x="1" y="5" width="15" height="14" rx="2" ry="2" />
            </svg>
          </button>
          {uploading && (
            <span className="text-neutral-500 text-xs ml-1">Uploading…</span>
          )}
          {!uploading && uploadError && (
            <span className="text-red-400 text-xs ml-1">{uploadError}</span>
          )}
        </div>

        <div className="flex items-center gap-3">
          <span className="text-neutral-500 text-xs hidden sm:block">
            +5 points
          </span>
          <button
            onClick={handleSubmit}
            disabled={!canSubmit}
            className="px-5 py-2 bg-white text-black text-sm font-semibold rounded-full hover:bg-neutral-200 transition disabled:opacity-40 disabled:cursor-not-allowed"
          >
            {posting ? "Posting…" : "Post"}
          </button>
        </div>
      </div>

      <input
        ref={imgRef}
        type="file"
        accept="image/*"
        className="hidden"
        onChange={(e) => {
          const file = e.target.files?.[0];
          if (file) uploadFile(file);
          e.target.value = "";
        }}
      />
      <input
        ref={docRef}
        type="file"
        accept=".pdf,.doc,.docx,application/pdf,application/msword,application/vnd.openxmlformats-officedocument.wordprocessingml.document"
        className="hidden"
        onChange={(e) => {
          const file = e.target.files?.[0];
          if (file) uploadFile(file);
          e.target.value = "";
        }}
      />
    </div>
  );
}
