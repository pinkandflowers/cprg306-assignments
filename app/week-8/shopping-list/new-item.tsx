"use client";

import { useState } from "react";

// 👇 Add prop type (recommended in TypeScript)
interface NewItemProps {
  onAddItem: (item: {
    name: string;
    quantity: number;
    category: string;
  }) => void;
}

export default function NewItem({ onAddItem }: NewItemProps) {
  // -------- STATE VARIABLES --------
  const [name, setName] = useState("");
  const [quantity, setQuantity] = useState(1);
  const [category, setCategory] = useState("produce");
  const [nameTouched, setNameTouched] = useState(false);

  // -------- FORM SUBMISSION HANDLER --------
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!name || name.length < 2) {
      return; // validation still stops submission
    }

    const item = {
      name,
      quantity,
      category,
    };

    // ✅ Call parent handler instead of alert
    onAddItem(item);

    // Reset form
    setName("");
    setQuantity(1);
    setCategory("produce");
    setNameTouched(false);
  };

  const isFormInvalid = !name || name.length < 2;

  return (
    <form
      onSubmit={handleSubmit}
      className="w-full max-w-md bg-rose-50 p-6 rounded-2xl shadow-lg space-y-4 border border-rose-200"
    >
      <h2 className="text-3xl font-bold text-rose-600 text-center">
        🛒 Add New Item
      </h2>

      {/* -------- NAME INPUT -------- */}
      <div>
        <label className="block text-sm font-semibold text-rose-700 mb-1">
          Item Name
        </label>

        <input
          type="text"
          min="2"
          value={name}
          required
          onChange={(e) => setName(e.target.value)}
          onBlur={() => setNameTouched(true)}
          onFocus={() => setNameTouched(false)}
          className={`w-full px-3 py-2 rounded-2xl border 
            text-rose-900 placeholder-rose-300
            focus:outline-none focus:ring-2 transition
            ${
              !!name && nameTouched
                ? "border-red-400 focus:ring-red-300 bg-red-50"
                : "border-rose-300 focus:ring-rose-300 bg-white"
            }`}
          placeholder="e.g. Strawberries 🍓"
        />

        {nameTouched && name.trim().length < 2 && (
          <p className="text-red-500 text-sm mt-1">
            Please enter an item - minimum of 2 characters please ❤️
          </p>
        )}
      </div>

      {/* -------- QUANTITY INPUT -------- */}
      <div>
        <label className="block text-sm font-semibold text-rose-700 mb-1">
          Quantity
        </label>

        <input
          type="number"
          min="1"
          max="99"
          required
          value={quantity}
          onChange={(e) => setQuantity(Number(e.target.value))}
          className="
            w-full px-3 py-2 rounded-2xl border 
            text-rose-900
            border-rose-300 bg-white 
            focus:outline-none focus:ring-2 focus:ring-rose-300
          "
        />
      </div>

      {/* -------- CATEGORY SELECT -------- */}
      <div>
        <label className="block text-sm font-semibold text-rose-700 mb-1">
          Category
        </label>

        <select
          value={category}
          onChange={(e) => setCategory(e.target.value)}
          className="
            w-full px-3 py-2 rounded-2xl border 
            text-rose-900
            border-rose-300 bg-white 
            focus:outline-none focus:ring-2 focus:ring-rose-300
          "
        >
          <option value="produce">🍎 Produce</option>
          <option value="dairy">🥛 Dairy</option>
          <option value="bakery">🥐 Bakery</option>
          <option value="meat">🍗 Meat</option>
          <option value="frozen">❄️ Frozen Foods</option>
          <option value="canned">🥫 Canned Goods</option>
          <option value="dry">🌾 Dry Goods</option>
          <option value="beverages">🧃 Beverages</option>
          <option value="snacks">🍿 Snacks</option>
          <option value="household">🧼 Household</option>
          <option value="other">✨ Other</option>
        </select>
      </div>

      {/* -------- SUBMIT BUTTON -------- */}
      <button
        type="submit"
        disabled={isFormInvalid}
        className="
          w-full bg-rose-500 text-white py-2 rounded-full
          font-semibold text-lg
          hover:bg-rose-600 transition
          disabled:bg-rose-200 disabled:cursor-not-allowed
        "
      >
        Add Item
      </button>
    </form>
  );
}