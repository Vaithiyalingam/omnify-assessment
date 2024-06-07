import Image from "next/image";
import React, { useState, useEffect, useRef } from "react";
import { icons } from "../../utils/icons";

interface DropdownProps {
  children: React.ReactNode;
  label: string;
  isOpen: boolean;
  setIsOpen: (val: boolean) => void;
}

const Dropdown: React.FC<DropdownProps> = ({
  children,
  label,
  isOpen,
  setIsOpen,
}) => {
  const dropdownRef = useRef<HTMLDivElement>(null);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const handleClickOutside = (event: MouseEvent) => {
    if (
      dropdownRef.current &&
      !dropdownRef.current.contains(event.target as Node)
    ) {
      setIsOpen(false);
    }
  };

  useEffect(() => {
    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isOpen]);

  return (
    <div className="relative w-full inline-block text-left" ref={dropdownRef}>
      <button
        type="button"
        className={`text-start w-full rounded-md border text-blueGray  subtle shadow-sm px-4 py-2  ${
          isOpen ? "border-slateGray border-2" : "border-dropdownBorder border"
        }`}
        onClick={toggleDropdown}
      >
        {label}
        <div className="absolute right-3 top-2">
          <Image
            className="w-5 h-5"
            src={icons.chevronDown}
            alt="chevrondown"
          />
        </div>
      </button>
      {isOpen && (
        <div className="origin-top-left absolute z-20 overflow-y-auto left-0 mt-2 w-full h-[232px] rounded-md border border-t-0 bg-white shadow-sm border-dropdownBorder">
          <div className="py-1">{children}</div>
        </div>
      )}
    </div>
  );
};

export default Dropdown;
