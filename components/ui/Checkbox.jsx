import React from "react";

const Checkbox = ({ className = "", ...props }) => {
  const baseClasses =
    "h-4 w-4 text-green-600 focus:ring-green-500 border-gray-300 rounded";

  const classes = `${baseClasses} ${className}`;

  return <input type="checkbox" className={classes} {...props} />;
};

export default Checkbox;
