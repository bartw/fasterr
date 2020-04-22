import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const InternalLink = ({ to, children }) => (
  <motion.div whileHover="hover" className="inline-block p-2">
    <Link to={to}>
      <motion.span
        variants={{
          hover: { borderBottomWidth: 2 },
        }}
        transition={{ duration: 0.1 }}
        style={{ borderBottomWidth: 0 }}
        className="border-gray-700"
      >
        {children}
      </motion.span>
    </Link>
  </motion.div>
);

export default InternalLink;
