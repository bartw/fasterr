import React from "react";
import NoHoverButton from "./NoHoverButton";

const Button = ({ className, onClick, children }) => (
  <NoHoverButton
    onClick={onClick}
    className={`bg-gray-100 hover:bg-gray-300 ${className}`}
  >
    {children}
  </NoHoverButton>
);

export default Button;
