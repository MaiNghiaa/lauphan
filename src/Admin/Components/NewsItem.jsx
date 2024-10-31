// NewsItem.js
import React from "react";

export default function NewsItem({ item, onDelete, onEdit }) {
  return (
    <div className="border rounded-lg overflow-hidden shadow-lg">
      <img
        src={require(`../../Assets/Images/${item.img}`)}
        alt={item.title}
        className="w-full h-48 object-cover"
      />
      <div className="p-4">
        <h2 className="text-lg font-semibold">{item.title}</h2>
        <p className="text-gray-600">{item.tag}</p>
        <p className="mt-2">{item.description}</p>
        <div className="mt-4 flex gap-2">
          <button
            onClick={() => onEdit(item)}
            className="bg-yellow-500 text-white px-4 py-2 rounded hover:bg-yellow-600"
          >
            Edit
          </button>
          <button
            onClick={() => onDelete(item.id)}
            className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600"
          >
            Delete
          </button>
        </div>
      </div>
    </div>
  );
}
