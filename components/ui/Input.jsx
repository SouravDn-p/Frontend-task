import React from "react";

const Input = ({ className = "", ...props }) => {
    const baseClasses =
    "w-full px-3 py-2 border border-gray-300 rounded-md bg-white shadow-sm focus:outline-none focus:border-green-500 text-gray-900";
    
  const classes = `${baseClasses} ${className}`;

  return <input className={classes} {...props} />;
};

export default Input;
