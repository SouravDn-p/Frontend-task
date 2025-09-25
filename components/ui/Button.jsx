import React from "react";

const Button = ({
  children,
  variant = "primary",
  size = "md",
  className = "",
  ...props
}) => {
  const baseClasses =
    "inline-flex items-center  justify-center font-medium rounded-md transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 cursor-pointer";

  const variants = {
    primary: "bg-green-600 hover:bg-green-700 text-white  cursor-pointer",
    secondary:
      "bg-white hover:bg-gray-100 text-gray-900 border border-gray-300 cursor-pointer ",
    outline:
      "border border-green-600 text-green-600 hover:bg-green-50  cursor-pointer",
  };

  const sizes = {
    sm: "cursor-pointer text-sm px-3 py-1.5",
    md: "cursor-pointer text-base px-4 py-2",
    lg: "cursor-pointer text-lg px-6 py-3",
  };

  const classes = `${baseClasses} ${variants[variant]} ${sizes[size]} ${className}`;

  return (
    <button className={classes} {...props}>
      {children}
    </button>
  );
};

export default Button;
