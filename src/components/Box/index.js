import React from "react";

const Box = ({ className, children }) => (
  <div
    className={`sm:border-2 sm:rounded-md sm:border-gray-700 sm:bg-gray-200 sm:p-8 ${
      className ?? ""
    }`}
  >
    {children}
  </div>
);

export default Box;
