import React, { useEffect, useRef } from "react";

interface DialogProps {
  isVisible: boolean;
  position: { top: number; left?: number; right?: number };
  onClose: () => void;
  children: React.ReactNode;
}

const Dialog: React.FC<DialogProps> = ({
  isVisible,
  position,
  onClose,
  children,
}) => {
  const dialogRef = useRef<HTMLDivElement>(null);

  // Function to handle click outside the dialog
  const handleClickOutside = (event: MouseEvent) => {
    if (
      dialogRef.current &&
      !dialogRef.current.contains(event.target as Node)
    ) {
      onClose();
    }
  };

  useEffect(() => {
    // Add event listener for clicks outside the dialog when it's visible
    if (isVisible) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      // Remove event listener when the dialog is not visible
      document.removeEventListener("mousedown", handleClickOutside);
    }

    // Clean up the event listener when component unmounts or isVisible changes
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isVisible]);

  // If dialog is not visible, do not render anything
  if (!isVisible) return null;

  return (
    <div
      className="absolute bg-white border border-gray-300 rounded-md shadow-lg p-4 z-50"
      style={{
        top: position.top,
        left: position.left && position.left,
        right: position.right && position.right,
      }}
      ref={dialogRef}
      aria-modal="true"
      aria-labelledby="dialog-title"
    >
      <div className="flex flex-col items-center">{children}</div>
    </div>
  );
};

export default Dialog;
