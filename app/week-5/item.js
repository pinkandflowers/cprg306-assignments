export default function Item({ name, quantity, category }) {
    return (
      <li className="bg-rose-50 border border-rose-200 rounded-xl p-4 shadow-sm hover:shadow-md transition-all duration-200 hover:-translate-y-0.5">
        
        <div className="flex justify-between items-center">
          <h3 className="font-semibold text-rose-800 text-lg">
            {name}
          </h3>
  
          <span className="bg-rose-600 text-white text-xs px-3 py-1 rounded-full">
            x{quantity}
          </span>
        </div>
  
        <p className="text-sm text-rose-600 mt-1 capitalize">
          {category}
        </p>
  
      </li>
    );
  }