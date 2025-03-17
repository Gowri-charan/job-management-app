"use client";

import React from "react";

const FormField = ({
  label,
  value,
  onChange,
  placeholder,
  required = false,
  className = "",
  labelClassName = "",
  inputClassName = "",
  children,
}) => {
  const defaultInputClasses =
    "overflow-hidden px-3 py-5 mt-1.5 w-full text-base font-medium rounded-xl border border-solid border-stone-300 text-stone-300";

  return (
    <div className={`flex-1 grow shrink-0 basis-0 w-fit ${className}`}>
      <label
        className={`text-xl font-semibold text-zinc-600 ${labelClassName}`}
      >
        {label}
      </label>
      {children ? (
        children
      ) : (
        <input
          type="text"
          value={value}
          onChange={onChange}
          placeholder={placeholder}
          required={required}
          className={`${defaultInputClasses} ${inputClassName}`}
        />
      )}
    </div>
  );
};

export default FormField;
