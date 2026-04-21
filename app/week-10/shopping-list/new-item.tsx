"use client";

import { useState } from "react";

interface NewItemProps {
  onAddItem: (item: { name: string; quantity: number; category: string }) => void;
}

export default function NewItem({ onAddItem }: NewItemProps) {
  const [name, setName] = useState("");
  const [quantity, setQuantity] = useState(1);
  const [category, setCategory] = useState("produce");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || name.length < 2) return;

    onAddItem({ name, quantity, category });
    setName("");
    setQuantity(1);
    setCategory("produce");
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4 p-6 bg-rose-50 rounded-2xl shadow-lg border border-rose-200">
      <input
        type="text"
        placeholder="Item name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        className="w-full p-2 border rounded"
      />
      <input
        type="number"
        min={1}
        value={quantity}
        onChange={(e) => setQuantity(Number(e.target.value))}
        className="w-full p-2 border rounded"
      />
      <select value={category} onChange={(e) => setCategory(e.target.value)} className="w-full p-2 border rounded">
        <option value="produce">Produce</option>
        <option value="dairy">Dairy</option>
        <option value="bakery">Bakery</option>
        <option value="meat">Meat</option>
        <option value="frozen">Frozen</option>
        <option value="canned">Canned</option>
        <option value="dry">Dry</option>
        <option value="beverages">Beverages</option>
        <option value="snacks">Snacks</option>
        <option value="household">Household</option>
        <option value="other">Other</option>
      </select>
      <button type="submit" className="w-full py-2 bg-rose-500 text-white rounded-full">Add Item</button>
    </form>
  );
}