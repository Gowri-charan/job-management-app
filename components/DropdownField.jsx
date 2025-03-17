"use client";

import React, { useState, useRef, useEffect } from "react";
import FormField from "./FormField";

const DropdownField = ({
  label,
  value,
  onChange,
  placeholder,
  options = [],
  required = false,
  className = "",
  labelClassName = "",
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);

  // Handle click outside to close dropdown
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  // Handle keyboard navigation
  const handleKeyDown = (e) => {
    if (e.key === "Escape") {
      setIsOpen(false);
    } else if (e.key === "Enter" || e.key === " ") {
      setIsOpen((prev) => !prev);
    } else if (e.key === "ArrowDown" && isOpen && options.length > 0) {
      e.preventDefault();
      const currentIndex = options.findIndex((option) =>
        typeof option === "string" ? option === value : option.value === value
      );
      const nextIndex = (currentIndex + 1) % options.length;
      const nextOption = options[nextIndex];
      const nextValue =
        typeof nextOption === "string" ? nextOption : nextOption.value;
      onChange(nextValue);
    } else if (e.key === "ArrowUp" && isOpen && options.length > 0) {
      e.preventDefault();
      const currentIndex = options.findIndex((option) =>
        typeof option === "string" ? option === value : option.value === value
      );
      const nextIndex =
        currentIndex <= 0 ? options.length - 1 : currentIndex - 1;
      const nextOption = options[nextIndex];
      const nextValue =
        typeof nextOption === "string" ? nextOption : nextOption.value;
      onChange(nextValue);
    }
  };

  const handleOptionClick = (option) => {
    const selectedValue = typeof option === "string" ? option : option.value;
    onChange(selectedValue);
    setIsOpen(false);
  };

  const displayValue = value || placeholder;

  return (
    <FormField
      label={label}
      required={required}
      className={className}
      labelClassName={labelClassName}
    >
      <div ref={dropdownRef} className="relative">
        <div
          className={`flex overflow-hidden gap-5 justify-between px-4 py-5 mt-1.5 w-full text-base font-medium rounded-xl border border-solid ${
            isOpen ? "border-neutral-800" : "border-stone-300"
          } ${value ? "text-zinc-600" : "text-stone-300"} cursor-pointer`}
          onClick={() => setIsOpen(!isOpen)}
          onKeyDown={handleKeyDown}
          tabIndex={0}
          role="combobox"
          aria-expanded={isOpen}
          aria-haspopup="listbox"
          aria-controls={`${label}-options`}
        >
          <span>{displayValue}</span>
          <img
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/9f4d69249e31521544293fb25a74771a757493112763eb0dc3e5e3baf3c8e36e?placeholderIfAbsent=true&apiKey=dc948917b04444cfbb240df1a4d04996"
            className={`object-contain shrink-0 my-auto w-4 aspect-[1.78] transition-transform duration-200 ${
              isOpen ? "transform rotate-180" : ""
            }`}
            alt="Dropdown arrow"
          />
        </div>

        {isOpen && (
          <ul
            id={`${label}-options`}
            role="listbox"
            className="absolute z-10 w-full mt-1 bg-white rounded-xl border border-solid border-stone-300 shadow-lg max-h-60 overflow-auto"
          >
            {options.length > 0 ? (
              options.map((option, index) => {
                const optionValue =
                  typeof option === "string" ? option : option.value;
                const optionLabel =
                  typeof option === "string"
                    ? option
                    : option.label || option.value;

                return (
                  <li
                    key={index}
                    role="option"
                    aria-selected={value === optionValue}
                    className={`px-4 py-3 cursor-pointer hover:bg-gray-100 ${
                      value === optionValue ? "bg-gray-100 font-medium" : ""
                    }`}
                    onClick={() => handleOptionClick(option)}
                  >
                    {optionLabel}
                  </li>
                );
              })
            ) : (
              <li className="px-4 py-3 text-stone-300 italic">
                No options available
              </li>
            )}
          </ul>
        )}
      </div>
    </FormField>
  );
};

export default DropdownField;
