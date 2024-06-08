import React, { useEffect, useRef } from "react";
import { CSSTransition } from "react-transition-group";

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

  const handleClickOutside = (event: MouseEvent) => {
    if (
      dialogRef.current &&
      !dialogRef.current.contains(event.target as Node)
    ) {
      onClose();
    }
  };

  useEffect(() => {
    if (isVisible) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isVisible]);

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
    >
      <div className="flex flex-col items-center">{children}</div>
    </div>
  );
};

export default Dialog;
