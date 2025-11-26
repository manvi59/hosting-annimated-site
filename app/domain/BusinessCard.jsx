// components/BusinessCard.js
import React from "react";

const BusinessCard = ({ title, children, className = "" }) => {
  return (
    <div className={`rounded-3xl p-8 ${className}`}>
      <h3 className="font-bold text-2xl mb-4">{title}</h3>
      <p className="text-gray-700 leading-relaxed">{children}</p>
    </div>
  );
};

export default BusinessCard;
