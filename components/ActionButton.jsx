"use client";

import React from "react";

const ActionButton = ({
  text,
  onClick,
  variant = "primary",
  icon = null,
  className = "",
}) => {
  const baseClasses =
    "flex gap-2.5 justify-center items-center px-16 py-4 text-xl font-semibold max-md:px-5";

  const variantClasses = {
    primary: "text-white bg-sky-500 rounded-xl",
    secondary:
      "bg-white rounded-xl border-2 border-solid border-neutral-800 shadow-[0px_0px_4px_rgba(0,0,0,0.25)] text-neutral-800",
  };

  return (
    <button
      onClick={onClick}
      
      className={`${baseClasses} ${variantClasses[variant]} ${className}`}
      
    >
      <span className="self-stretch my-auto">{text}</span>
      {icon && (
        <img
          src={icon}
          className={
            variant === "primary"
              ? "object-contain shrink-0 self-stretch my-auto w-2.5 aspect-[1.25] stroke-[2px] stroke-white"
              : "object-contain shrink-0 self-stretch my-auto w-2 aspect-[0.8]"
          }
          alt={`${text} icon`}
        />
      )}
    </button>
  );
};

export default ActionButton;
