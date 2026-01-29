// item.tsx
import React from "react";

// Define the props interface
interface ItemProps {
  name: string;
  quantity: number;
  category: string;
}

// Functional component
const Item: React.FC<ItemProps> = ({ name, quantity, category }) => {
  return (
    <li className="flex justify-between items-center bg-white shadow-md rounded-md p-4 mb-2 hover:bg-gray-50 transition">
      <div className="flex flex-col">
        <span className="font-semibold text-lg text-gray-800">{name}</span>
        <span className="text-sm text-gray-500">{category}</span>
      </div>
      <span className="font-medium text-gray-700">{quantity}</span>
    </li>
  );
};

export default Item;
