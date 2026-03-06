"use client";

import { useState, useEffect } from "react";

// Function to fetch meal ideas from TheMealDB API
async function fetchMealIdeas(ingredient) {
  try {
    const res = await fetch(
      `https://www.themealdb.com/api/json/v1/1/filter.php?i=${ingredient}`
    );
    const data = await res.json();
    // The API returns meals array or null if nothing found
    return data.meals || [];
  } catch (error) {
    console.error("Error fetching meals:", error);
    return [];
  }
}

// MealIdeas component
export default function MealIdeas({ ingredient }) {
  const [meals, setMeals] = useState([]);

  // Function to load meals into state
  async function loadMealIdeas() {
    const results = await fetchMealIdeas(ingredient);
    setMeals(results);
  }

  // Call loadMealIdeas whenever ingredient changes
  useEffect(() => {
    if (ingredient) {
      loadMealIdeas();
    }
  }, [ingredient]);

  return (
    <div className="mt-6">
      <h2 className="text-xl font-bold mb-4">
        Meal Ideas for: <span className="text-rose-600">{ingredient}</span>
      </h2>
      {meals.length === 0 ? (
        <p>No meal ideas found for this ingredient.</p>
      ) : (
        <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {meals.map((meal) => (
            <li
              key={meal.idMeal}
              className="border border-rose-200 rounded-lg p-3 shadow hover:shadow-md transition"
            >
              <img
                src={meal.strMealThumb}
                alt={meal.strMeal}
                className="w-full h-32 object-cover rounded-md mb-2"
              />
              <p className="font-semibold text-rose-700">{meal.strMeal}</p>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}