"use client";

import { useState } from "react";
import Item from "./item"; // Make sure this points to your Item component file

interface ItemListProps {
  items: {
    id?: string;
    name: string;
    quantity: number;
    category: string;
  }[];
  onItemClick: (itemName: string) => void;}

export default function ItemList({ items, onItemClick }: ItemListProps) {
  // ---------------------------
  // STATE
  // ---------------------------
  const [sortBy, setSortBy] = useState("name"); // Sort type: "name", "category", or "grouped"

  // Make a copy of items to avoid mutating props
  const itemsCopy = [...items];

  // ---------------------------
  // SORTING
  // ---------------------------
  // Sort normally by name or category
  const sortedItems = [...itemsCopy].sort((a, b) => {
    if (sortBy === "name") return a.name.localeCompare(b.name);
    if (sortBy === "category") return a.category.localeCompare(b.category);
    return 0;
  });

  // Group items by category for "grouped" view
  const groupedItems = itemsCopy.reduce<Record<string, typeof items[0][]>>((groups, item) => {
    if (!groups[item.category]) groups[item.category] = [];
    groups[item.category].push(item);
    return groups;
  }, {});

  // Alphabetically sort the categories
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

      {/* Conditional Rendering of Items */}
      {sortBy !== "grouped" ? (
        // Normal sorted list
        <ul className="space-y-2">
          {sortedItems.map((item) => (
            <Item
              key={item.id ?? item.name}
              name={item.name}
              quantity={item.quantity}
              category={item.category}
              onSelect={onItemClick} // Pass click handler
            />
          ))}
        </ul>
      ) : (
        // Grouped by category
        <div className="space-y-6">
          {sortedCategories.map((category) => {
            const sortedGroup = [...groupedItems[category]].sort((a, b) =>
              a.name.localeCompare(b.name)
            );

            return (
              <div key={category}>
                <h3 className="text-lg font-bold capitalize mb-2">{category}</h3>
                <ul className="space-y-2">
                  {sortedGroup.map((item) => (
                    <Item
                      key={item.id ?? item.name}
                      name={item.name}
                      quantity={item.quantity}
                      category={item.category}
                      onSelect={onItemClick} // Pass click handler
                    />
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