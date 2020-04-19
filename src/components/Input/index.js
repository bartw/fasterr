import React from "react";

const Input = ({
  type = "text",
  placeholder = "",
  value = "",
  onChange = () => {},
}) => (
  <input
    type={type}
    placeholder={placeholder}
    value={value}
    onChange={(e) => onChange(e.target.value)}
    className="border-2 rounded-md border-gray-700 p-2 w-full"
  />
);

export default Input;
