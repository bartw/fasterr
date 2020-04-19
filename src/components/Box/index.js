import React from "react";

const Box = ({ className, children }) => (
  <div
    className={`sm:border-2 sm:rounded-md sm:border-beta sm:p-8 ${
      className ?? ""
    }`}
  >
    {children}
  </div>
);

export default Box;
