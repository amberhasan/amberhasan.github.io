// Card.js
import React from "react";
import "./Card.css"; // Optional for specific card styling

function Card({ title, items }) {
  return (
    <div className="card">
      <h3>{title}</h3>
      <ul>
        {items.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  );
}

export default Card;
