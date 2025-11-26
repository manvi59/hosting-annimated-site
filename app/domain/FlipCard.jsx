// components/FlipCard.jsx
import React from "react";
import "./style.css"; // We'll add the CSS separately

const FlipCard = ({ frontContent, backContent, className = "" }) => {
  return (
    <div className={`flip-card ${className}`}>
      <div className="flip-card-inner flex flex-col h-full">
        {/* Front side */}
        <div className="flip-card-front rounded-3xl p-8 flex flex-col gap-6">
          {frontContent}
        </div>

        {/* Back side */}
        <div className="flip-card-back rounded-3xl">
          {backContent}
        </div>
      </div>
    </div>
  );
};

export default FlipCard;
