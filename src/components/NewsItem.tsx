import React from "react";

interface NewsItemProps {
  title: string;
  summary: string;
  source: string;
  url: string;
  image?: string;
}

export default function NewsItem({
  title,
  summary,
  source,
  url,
  image,
}: NewsItemProps) {
  return (
    <div className="flex gap-4 mb-6 border-b border-gray-700 pb-6">
      {image && (
        <img
          src={image}
          alt=""
          className="w-24 h-24 object-cover rounded"
        />
      )}

      <div>
        <a
          href={url}
          target="_blank"
          className="text-xl font-semibold hover:underline"
        >
          {title}
        </a>

        <p className="text-gray-300 mt-2">{summary}</p>

        <p className="text-gray-500 text-sm mt-1">{source}</p>
      </div>
    </div>
  );
}
