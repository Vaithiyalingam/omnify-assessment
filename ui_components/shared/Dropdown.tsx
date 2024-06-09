import Image from "next/image";
import React, { useEffect, useRef } from "react";
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

  // Toggle function to open/close the dropdown
  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  // Function to handle click outside the dropdown to close it
  const handleClickOutside = (event: MouseEvent) => {
    if (
      dropdownRef.current &&
      !dropdownRef.current.contains(event.target as Node)
    ) {
      setIsOpen(false);
    }
  };

  useEffect(() => {
    // Add event listener for clicks outside the dropdown when it's open
    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      // Remove event listener when the dropdown is closed
      document.removeEventListener("mousedown", handleClickOutside);
    }

    // Clean up the event listener when component unmounts or isOpen changes
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isOpen]);

  return (
    <div className="relative w-full inline-block text-left" ref={dropdownRef}>
      {/* Dropdown button */}
      <button
        type="button"
        className={`text-start w-full rounded-md border text-blueGray subtle shadow-sm px-4 py-2 ${
          isOpen ? "border-slateGray border-2" : "border-dropdownBorder border"
        }`}
        onClick={toggleDropdown}
        aria-haspopup="true"
        aria-expanded={isOpen}
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
      {/* Dropdown menu */}
      {isOpen && (
        <div className="origin-top-left absolute z-20 overflow-y-auto left-0 mt-2 w-full h-[232px] rounded-md border border-t-0 bg-white shadow-sm border-dropdownBorder">
          <div className="py-1">{children}</div>
        </div>
      )}
    </div>
  );
};

export default Dropdown;
