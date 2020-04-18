import React from "react";

const Button = ({ className, onClick, children }) => (
  <button
    onClick={onClick}
    className={`border-2 rounded-md border-alpha p-2 ${className ?? ''}`}
  >
    {children}
  </button>
);

export default Button;
