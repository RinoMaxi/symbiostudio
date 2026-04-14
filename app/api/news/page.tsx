"use client";

import { useEffect, useState } from "react";

export default function NewsPage() {
const [news, setNews] = useState([]);

useEffect(() => {
async function loadNews() {
try {
const res = await fetch("/api/improve/news", { cache: "no-store" });
const data = await res.json();
setNews(data);
} catch (err) {
console.error("Failed to load news:", err);
}
}

loadNews();
}, []);

return (
<div style={{ padding: "2rem" }}>
<h1 style={{ marginBottom: "1.5rem" }}>Latest News</h1>

{news.length === 0 && <p>No news available.</p>}

<div style={{ display: "grid", gap: "1.5rem" }}>
{news.map((item, index) => (
<div
key={index}
style={{
padding: "1rem",
border: "1px solid #ccc",
borderRadius: "8px",
background: "#fafafa",
}}
>
<h2>{item.title}</h2>
<p>{item.summary}</p>
<p>
<strong>Source:</strong> {item.source}
</p>
<a
href={item.url}
target="_blank"
rel="noopener noreferrer"
style={{ color: "blue" }}
>
Read full article →
</a>
</div>
))}
</div>
</div>
);
}
