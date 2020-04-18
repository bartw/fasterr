import React from "react";
import NoHoverButton from './NoHoverButton';

const Button = ({ className, onClick, children }) => (
  <NoHoverButton
    onClick={onClick}
    className={`hover:bg-gray-200 ${className}`}
  >
    {children}
  </NoHoverButton>
);

export default Button;
