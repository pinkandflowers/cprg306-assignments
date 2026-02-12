"use client";

import { useState } from "react";
import Item from "./item";
import items from "./items.json";

export default function ItemList() {
  const [sortBy, setSortBy] = useState("name");

  // Sort normally (name or category)
  const sortedItems = [...items].sort((a, b) => {
    if (sortBy === "name") {
      return a.name.localeCompare(b.name);
    } else if (sortBy === "category") {
      return a.category.localeCompare(b.category);
    }
    return 0;
  });

  // Group items by category
  const groupedItems = items.reduce((groups, item) => {
    if (!groups[item.category]) {
      groups[item.category] = [];
    }
    groups[item.category].push(item);
    return groups;
  }, {});

  // Sort categories alphabetically
  const sortedCategories = Object.keys(groupedItems).sort();

  return (
    <div className="w-full max-w-md">
      {/* Buttons */}
      <div className="flex flex-wrap gap-3 mb-6">
        {["name", "category", "grouped"].map((type) => (
            <button
            key={type}
            onClick={() => setSortBy(type)}
            className={`
                px-5 py-2 rounded-full text-sm font-semibold transition-all duration-200
                shadow-sm border
                ${
                sortBy === type
                    ? "bg-rose-600 text-white border-rose-600 shadow-md scale-105"
                    : "bg-white text-rose-700 border-rose-200 hover:bg-rose-100 hover:shadow-md hover:-translate-y-0.5"
                }
            `}
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
            <Item
              key={item.id}
              name={item.name}
              quantity={item.quantity}
              category={item.category}
            />
          ))}
        </ul>
      ) : (
        <div className="space-y-6">
          {sortedCategories.map((category) => (
            <div key={category}>
              <h3 className="text-lg font-bold capitalize mb-2">
                {category}
              </h3>

              <ul className="space-y-2">
                {groupedItems[category]
                  .sort((a, b) => a.name.localeCompare(b.name))
                  .map((item) => (
                    <Item
                      key={item.id}
                      name={item.name}
                      quantity={item.quantity}
                      category={item.category}
                    />
                  ))}
              </ul>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}