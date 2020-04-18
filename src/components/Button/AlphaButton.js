import React from "react";
import NoHoverButton from './NoHoverButton';

const AlphaButton = ({ className, onClick, children }) => (
  <NoHoverButton
    onClick={onClick}
    className={`bg-alpha text-white hover:text-gray-200 ${className}`}
  >
    {children}
  </NoHoverButton>
);

export default AlphaButton;
