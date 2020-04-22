import React from "react";
import { motion } from "framer-motion";

const Button = ({ type = "button", className, onClick, children }) => (
  <motion.button
    type={type}
    onClick={onClick}
    className={`rounded bg-gray-700 text-gray-100 p-2 ${className ?? ""}`}
    whileHover={{ y: -1 }}
  >
    {children}
  </motion.button>
);

export default Button;
