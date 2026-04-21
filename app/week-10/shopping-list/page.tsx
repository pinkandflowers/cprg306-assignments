"use client";

import { useState } from "react";
import ItemList from "@/app/week-10/shopping-list/item-list"; // Shopping list component
import NewItem from "@/app/week-10/shopping-list/new-item"; // Form to add new items
import MealIdeas from "@/app/week-10/shopping-list/meal-ideas.js"; // Dynamic meal ideas component
import { getItems, addItem } from "@/app/week-10/_services/shopping-list-services.js";
import {useUserAuth} from "@/app/week-10/_utils/auth-context.js";

import { useEffect } from "react";

type ItemType = { id?: string; name: string; quantity: number; category: string };

export default function Page() {
  // ---------------------------
  // STATE VARIABLES
  // ---------------------------
  const [items, setItems] = useState<ItemType[]>([]);
  const [selectedIngredient, setSelectedIngredient] = useState(""); // Selected item for meal ideas
  const { user } = useUserAuth(); // Get current user from auth context 

  useEffect(() => {
    if (!user) {
      console.error("User not ready yet");
      return;
    }
  
    async function loadItems() {
      const itemsList = await getItems(user.uid);
      setItems(itemsList);
    }
  
    loadItems();
  }, [user]); // ✅ IMPORTANT

  // ---------------------------
  // EVENT HANDLERS
  // ---------------------------

  // Add new item to shopping list
  const handleAddItem = async (newItem: ItemType) => {
    if (!user) {
      console.error("User not ready yet");
      return;
    }

    const id = await addItem(user.uid, newItem); // ✅ FIXED

    const itemWithId = { ...newItem, id };

    setItems((prev) => [...prev, itemWithId]);
  };

  // Handle item click: clean name & set as selected ingredient
  const handleSelectIngredient = (ingredient: string) => {
    const cleaned = ingredient
    .split(",")[0] // Remove everything after comma
    .replace(
      /([\u2700-\u27BF]|[\uE000-\uF8FF]|[\uD800-\uDBFF][\uDC00-\uDFFF]|[\u2011-\u26FF])/g,
      "" // Remove emojis
    )
    .trim();
    
    
    setSelectedIngredient(cleaned);
  };

  // ---------------------------
  // RENDER
  // ---------------------------
  return (
    <main className="min-h-screen flex flex-col items-center bg-rose-50 p-6">
      {/* Page Title */}
      <h1 className="text-4xl font-extrabold text-rose-700 mb-6 text-center">
        Shopping List 📒
      </h1>

      {/* FLEX CONTAINER: LEFT = Form + List, RIGHT = Meal Ideas */}
      <div className="flex flex-col md:flex-row w-full max-w-6xl gap-6">
        
        {/* LEFT SIDE */}
        <div className="flex-1 flex flex-col gap-6">
          {/* Form */}
          <NewItem onAddItem={handleAddItem} />

          {/* Shopping List */}
          <section className="bg-white rounded-2xl shadow-lg p-6 border border-rose-200">
            <h2 className="text-2xl font-bold text-rose-600 mb-4">Your Items 🛒</h2>
            <ItemList items={items} onItemClick={handleSelectIngredient} />
          </section>
        </div>

        {/* RIGHT SIDE */}
        <div className="flex-1">
          <section className="bg-lime-100 rounded-2xl shadow-lg p-6 border border-lime-200">
            {selectedIngredient ? (
              <MealIdeas ingredient={selectedIngredient} />
            ) : (
              <p className="text-xl font-bold text-rose-700 text-center">
                Please select an item from your shopping list to view meal ideas 🍽️
              </p>
            )}
          </section>
        </div>
      </div>
    </main>
  );
}