import React from "react";

const Button = ({ type = "button", className, onClick, children }) => (
  <button
    type={type}
    onClick={onClick}
    className={`border-2 rounded-md border-gray-700 p-2 ${className ?? ""}`}
  >
    {children}
  </button>
);

export default Button;
