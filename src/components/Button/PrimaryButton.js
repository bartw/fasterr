import React from "react";
import NoHoverButton from './NoHoverButton';

const PrimaryButton = ({ className, onClick, children }) => (
  <NoHoverButton
    onClick={onClick}
    className={`bg-gray-700 text-gray-100 hover:text-gray-300 ${className}`}
  >
    {children}
  </NoHoverButton>
);

export default PrimaryButton;
