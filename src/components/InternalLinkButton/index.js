import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const InternalLinkButton = ({ to, children }) => (
  <motion.div
    whileHover={{ y: -1 }}
    className="ml-4 inline-block p-2 rounded bg-gray-700 text-gray-100"
  >
    <Link to={to}>{children}</Link>
  </motion.div>
);

export default InternalLinkButton;
