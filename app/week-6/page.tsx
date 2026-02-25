"use client";

//my imports
import {useState} from "react";
import ItemList from "@/app/week-6/item-list";
import NewItem from "@/app/week-6/new-item";
import itemsData from "@/app/week-6/items.json";

export default function Page() {
  // Initialize state with items.json
  const [items, setItems] = useState(itemsData);

  // Add item handler
  const handleAddItem = (newItem: {
    name: string;
    quantity: number;
    category: string;
  }) => {
    setItems((prevItems) => [...prevItems, newItem]);
  };

  return (
    <main className="min-h-screen flex flex-col items-center bg-rose-50 p-6">
      <h1 className="text-4xl font-extrabold text-rose-700 mb-6 text-center">
        Shopping List 📒
      </h1>

      {/* Add Item Form */}
      <NewItem onAddItem={handleAddItem} />

      {/* Card wrapper */}
      <section className="max-w-xl w-full mx-auto bg-white rounded-2xl shadow-lg p-6 border border-rose-200 mt-6">
        <ItemList items={items} />
      </section>
    </main>
  );
}