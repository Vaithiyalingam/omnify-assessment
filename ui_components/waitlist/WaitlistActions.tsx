"use client";
import Image from "next/image";
import { icons } from "../../utils/icons";
import { useRef, useState } from "react";
import Dialog from "../shared/Dialog";
import { Filter } from "./Filter";

export const WaitlistActions = () => {
  const [isDialogVisible, setIsDialogVisible] = useState(false);
  const [dialogPosition, setDialogPosition] = useState({ top: 0, left: 0 });
  const specifiedAreaRef = useRef<HTMLDivElement>(null);

  const showDialog = () => {
    if (specifiedAreaRef.current) {
      const rect = specifiedAreaRef.current.getBoundingClientRect();
      setDialogPosition({
        top: rect.bottom + window.scrollY,
        left: rect.left + window.scrollX,
      });
      setIsDialogVisible(true);
    }
  };

  const hideDialog = () => {
    setIsDialogVisible(false);
  };
  return (
    <div className="flex items-center justify-between py-2 px-3">
      <div
        className="flex items-center gap-1.5 cursor-pointer"
        ref={specifiedAreaRef}
        onClick={showDialog}
        role="presentation"
      >
        <Image src={icons.filter} alt="filter" />
        <p className="detail_medium text-blueGray">Add filter</p>
      </div>
      <div className="flex items-center gap-4">
        <div className="relative">
          <input
            type="text"
            placeholder="Search client"
            className="w-full py-1 px-4 detail_medium placeholder:text-textPlaceHolder placeholder:pl-4  text-blueGray shadow-sm shadow-blueGray rounded-md focus:outline-none focus:ring focus:border-blue-300"
          />
          <div className="absolute top-2 left-3">
            <Image src={icons.search} alt="search" />
          </div>
        </div>
        <div className="px-2.5 py-2">
          <Image src={icons.refresh} alt="refresh" />
        </div>
        <div className="px-2.5 py-2">
          <Image src={icons.columnsOutlined} alt="column outlined" />
        </div>
        <div className="px-2.5 py-2">
          <Image src={icons.download} alt="download" />
        </div>
      </div>
      <Dialog
        isVisible={isDialogVisible}
        position={dialogPosition}
        onClose={hideDialog}
      >
        <Filter />
      </Dialog>
    </div>
  );
};
