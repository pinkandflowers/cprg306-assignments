"use client";

import { useState } from "react";

interface ItemListProps {
  items: {
    id?: string;
    name: string;
    quantity: number;
    category: string;
  }[];
  onItemClick: (itemName: string) => void;
}

export default function ItemList({ items, onItemClick }: ItemListProps) {
  const [sortBy, setSortBy] = useState("name");

  // Copy items to avoid mutating props
  const itemsCopy = [...items];

  // ---------------------------
  // SORTING
  // ---------------------------
  const sortedItems = [...itemsCopy].sort((a, b) => {
    if (sortBy === "name") return (a.name ?? "").localeCompare(b.name ?? "");
    if (sortBy === "category") return (a.category ?? "").localeCompare(b.category ?? "");
    return 0;
  });

  const groupedItems = itemsCopy.reduce<Record<string, typeof items[0][]>>((groups, item) => {
    const categoryKey = item.category || "Uncategorized";
    if (!groups[categoryKey]) groups[categoryKey] = [];
    groups[categoryKey].push(item);
    return groups;
  }, {});

  const sortedCategories = Object.keys(groupedItems).sort();

  // ---------------------------
  // RENDER
  // ---------------------------
  return (
    <div className="w-full">
      {/* Sort / Group Buttons */}
      <div className="flex flex-wrap gap-3 mb-6">
        {["name", "category", "grouped"].map((type) => (
          <button
            key={type}
            onClick={() => setSortBy(type)}
            className={`px-5 py-2 rounded-full text-sm font-semibold transition-all duration-200 shadow-sm border ${
              sortBy === type
                ? "bg-rose-600 text-white border-rose-600 shadow-md scale-105"
                : "bg-white text-rose-700 border-rose-200 hover:bg-rose-100 hover:shadow-md hover:-translate-y-0.5"
            }`}
          >
            {type === "name" && "Sort by Name"}
            {type === "category" && "Sort by Category"}
            {type === "grouped" && "Group by Category"}
          </button>
        ))}
      </div>

      {/* Conditional Rendering */}
      {sortBy !== "grouped" ? (
        <ul className="space-y-2">
          {sortedItems.map((item) => (
            <li
              key={item.id ?? item.name}
              className="cursor-pointer p-2 rounded hover:bg-rose-100"
              onClick={() => onItemClick(item.name)}
            >
              {item.name} ({item.quantity}) – <span className="italic">{item.category}</span>
            </li>
          ))}
        </ul>
      ) : (
        <div className="space-y-6">
          {sortedCategories.map((category) => {
            const sortedGroup = [...groupedItems[category]].sort((a, b) =>
              (a.name ?? "").localeCompare(b.name ?? "")
            );

            return (
              <div key={category}>
                <h3 className="text-lg font-bold capitalize mb-2">{category}</h3>
                <ul className="space-y-2">
                  {sortedGroup.map((item) => (
                    <li
                      key={item.id ?? item.name}
                      className="cursor-pointer p-2 rounded hover:bg-rose-100"
                      onClick={() => onItemClick(item.name)}
                    >
                      {item.name} ({item.quantity})
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
}