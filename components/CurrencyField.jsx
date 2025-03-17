"use client";

import React from "react";

const CurrencyField = ({
  value,
  onChange,
  placeholder,
  required = false,
  className = "",
}) => {
  return (
    <div
      className={`flex overflow-hidden gap-3 px-4 py-5 rounded-xl border border-solid border-stone-300 ${className}`}
    >
      <img
        src="https://cdn.builder.io/api/v1/image/assets/TEMP/559eabcd9650300ea299cb67a600c0e007ac8bdafa33873899b10b94cedb2a48?placeholderIfAbsent=true&apiKey=dc948917b04444cfbb240df1a4d04996"
        className="object-contain shrink-0 my-auto w-4 aspect-square"
        alt="Currency symbol"
      />
      <span className="basis-auto text-base font-medium text-stone-300">
        {value || placeholder}
      </span>
    </div>
  );
};

export default CurrencyField;
