// item.tsx
import React from "react";

// -------- PROPS INTERFACE --------
// Defines the data each shopping list item must receive
interface ItemProps {
  name: string;
  quantity: number;
  category: string;
}

// -------- ITEM COMPONENT --------
// Displays a single shopping list item
const Item: React.FC<ItemProps> = ({ name, quantity, category }) => {
  return (
    // List item container with soft rose background and hover effect
    <li className="
      flex justify-between items-center
      bg-rose-50 border border-rose-200
      shadow-sm rounded-xl p-4 mb-3
      hover:bg-rose-100 transition
    ">
      {/* Item name + category */}
      <div className="flex flex-col">
        {/* Item name */}
        <span className="font-bold text-lg text-rose-700">
          {name}
        </span>

        {/* Category label */}
        <span className="text-sm text-rose-500 capitalize">
          {category}
        </span>
      </div>

      {/* Quantity badge */}
      <span className="
        bg-rose-200 text-rose-800
        px-3 py-1 rounded-full
        text-sm font-semibold
      ">
        x{quantity}
      </span>
    </li>
  );
};

export default Item;