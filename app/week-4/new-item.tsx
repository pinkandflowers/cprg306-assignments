"use client"; 
// This tells Next.js this component runs on the client (needed for useState)

import { useState } from "react";
// Import React's useState hook so we can manage form state

export default function NewItem() {
  // -------- STATE VARIABLES --------

  // Stores the item name typed by the user
  const [name, setName] = useState("");

  // Stores the quantity (starts at 1)
  const [quantity, setQuantity] = useState(1);

  // Stores the selected category
  const [category, setCategory] = useState("produce");

  // Tracks whether the user has interacted with the name field
  // Used to prevent showing errors too early
  const [nameTouched, setNameTouched] = useState(false);

  // -------- FORM SUBMISSION HANDLER --------
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    // Prevents page reload when form is submitted
    e.preventDefault();

    // Manual validation check
    if (!name || name.length < 2) {
      alert("💗 Item name must be at least 2 characters!");
      return; // Stops the function if invalid
    }

    // Create item object using current state
    const item = {
      name,
      quantity,
      category,
    };

    // Log item to the console
    console.log(item);

    // Show confirmation alert
    alert(
      `✨ Item Added ✨
Name: ${name}
Quantity: ${quantity}
Category: ${category}`
    );

    // Reset form back to default values
    setName("");
    setQuantity(1);
    setCategory("produce");
    setNameTouched(false);
  };

  // Determines whether the submit button should be disabled
  const isFormInvalid = !name || name.length < 2;

  return (
    <form
      onSubmit={handleSubmit}
      className="w-full max-w-md bg-rose-50 p-6 rounded-2xl shadow-lg space-y-4 border border-rose-200"
    >
      {/* -------- FORM TITLE -------- */}
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
          value={name} // Controlled input tied to state
          required
          onChange={(e) => setName(e.target.value)} // Updates name as user types
          onBlur={() => setNameTouched(true)} // Marks field as "touched"
          onFocus={() => setNameTouched(false)} 

          // 👇 THIS IS WHERE THE TEXT COLOR FIX LIVES
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

        {/* Error message only shows after interaction or if less than 2 characters */}
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
          value={quantity} // Controlled number input
          onChange={(e) => setQuantity(Number(e.target.value))} // Convert to number
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
          value={category} // Controlled select
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
        disabled={isFormInvalid} // Disabled if form is invalid
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