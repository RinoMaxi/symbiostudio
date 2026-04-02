import { useEffect, useState } from "react";
import Link from "next/link";

export default function RelatedItems({ currentItem, allItems }) {
  const [related, setRelated] = useState([]);

  useEffect(() => {
    if (!currentItem || !allItems) return;

    const tags = currentItem.tags || [];
    const type = currentItem.type;

    // 1. Filter by overlapping tags
    let tagMatches = allItems.filter(item =>
      item.id !== currentItem.id &&
      item.tags?.some(tag => tags.includes(tag))
    );

    // 2. If fewer than 4, fill with same-type items
    if (tagMatches.length < 4) {
      const typeMatches = allItems.filter(item =>
        item.id !== currentItem.id && item.type === type
      );

      const combined = [...tagMatches];
      typeMatches.forEach(item => {
        if (!combined.some(i => i.id === item.id)) {
          combined.push(item);
        }
      });

      tagMatches = combined;
    }

    // 3. Limit to 4 items
    setRelated(tagMatches.slice(0, 4));
  }, [currentItem, allItems]);

  if (!related.length) return null;

  return (
    <div className="mt-12">
      <div className="flex justify-between items-center mb-4">
        <h3 className="text-xl font-semibold">Related Items</h3>

        <Link
          href={`/commons?related=${currentItem.id}`}
          className="text-sm text-blue-500 hover:text-blue-600 transition"
        >
          View All Related →
        </Link>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {related.map((item, index) => (
          <Link
            key={item.id}
            href={`/commons/${item.id}`}
            className="group block p-4 rounded-lg border border-neutral-800 hover:bg-neutral-900/70 hover:shadow-lg hover:shadow-neutral-900/70 transition-all duration-300 fade-in"
            style={{ animationDelay: `${index * 80}ms` }}
          >
            {/* Thumbnail */}
            {item.thumbnail ? (
              <img
                src={item.thumbnail}
                alt={item.title}
                className="w-full h-32 object-cover rounded-md mb-3 opacity-90 group-hover:opacity-100 transition-opacity duration-300"
              />
            ) : (
              <div className="w-full h-32 rounded-md bg-neutral-800 flex items-center justify-center">
                <span className="text-sm">No Thumbnail</span>
              </div>
            )}

            {/* Title */}
            <h4 className="font-medium text-base mb-1 group-hover:text-white transition-colors duration-300">
              {item.title}
            </h4>

            {/* Tags */}
            <div className="flex flex-wrap gap-1">
              {item.tags?.slice(0, 3).map(tag => (
                <span
                  key={tag}
                  className="text-xs px-2 py-1 bg-neutral-800 rounded-full text-neutral-300"
                >
                  {tag}
                </span>
              ))}
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
