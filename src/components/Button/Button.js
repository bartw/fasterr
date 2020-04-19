import React from "react";
import NoHoverButton from "./NoHoverButton";

const Button = ({ type, className, onClick, children }) => (
  <NoHoverButton
    type={type}
    onClick={onClick}
    className={`bg-gray-100 hover:bg-gray-300 ${className}`}
  >
    {children}
  </NoHoverButton>
);

export default Button;
