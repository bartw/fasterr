import React from "react";
import NoHoverButton from "./NoHoverButton";

const PrimaryButton = ({ type, className, onClick, children }) => (
  <NoHoverButton
    type={type}
    onClick={onClick}
    className={`bg-gray-700 text-gray-100 hover:text-gray-300 ${className}`}
  >
    {children}
  </NoHoverButton>
);

export default PrimaryButton;
