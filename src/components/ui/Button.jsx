import React from "react";

const Button = ({ children, onClick, type, disabled, className }) => {
  return (
    <button
      onClick={onClick}
      type={type}
      disabled={disabled}
      className={className}
    >
      {children}
    </button>
  );
};

export default Button;
