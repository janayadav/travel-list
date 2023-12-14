import React from "react";

export default function Stats({ items }) {
  if (!items.length)
    return (
      <p className="stats">
        <em>start adding items to packing list ✈️</em>
      </p>
    );
  const numItems = items.length;
  const numPacked = items.filter((item) => item.packed).length;
  const percentage = Math.round((numPacked / numItems) * 100);
  return (
    <div>
      <footer className="stats">
        <em>
          {percentage === 100
            ? "you got everything to go 🛩️"
            : `💼you have ${numItems} items on your list , you lready packed
          ${numPacked} (${percentage} %)`}
        </em>
      </footer>
    </div>
  );
}
