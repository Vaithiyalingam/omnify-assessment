"use client";
import React, { useRef, useState } from "react";
import Image from "next/image";
import { icons } from "../../utils/icons";
import Dialog from "../shared/Dialog";
import { Filter } from "./Filter";
import { useApplyFilter } from "../../store/useApplyFilter";
import { EditColumn } from "./EditColumn";

export const WaitlistActions = () => {
  const [isDialogVisible, setIsDialogVisible] = useState(false);
  const [isEditDialogVisible, setIsEditDialogVisible] = useState(false);
  const [dialogPosition, setDialogPosition] = useState({ top: 0, left: 0 });
  const [editDialogPosition, setEditDialogPosition] = useState({
    top: 0,
    right: 0,
  });
  const specifiedAreaRef = useRef<HTMLDivElement>(null);
  const specifiedColumnAreaRef = useRef<HTMLDivElement>(null);
  const { filtersArr, handleRemoveFilter, handleClearFilter } =
    useApplyFilter();

  // Function to show filter dialog and calculate position
  const showDialog = () => {
    handleClearFilter();
    if (specifiedAreaRef.current) {
      const rect = specifiedAreaRef.current.getBoundingClientRect();
      setDialogPosition({
        top: rect.bottom + window.scrollY,
        left: rect.left + window.scrollX,
      });
      setIsDialogVisible(true);
    }
  };

  // Function to show edit column dialog and calculate position
  const showEditDialog = () => {
    if (specifiedColumnAreaRef.current) {
      const rect = specifiedColumnAreaRef.current.getBoundingClientRect();
      const rightPosition = window.innerWidth - rect.right;
      setEditDialogPosition({
        top: rect.bottom + window.scrollY,
        right: rightPosition,
      });
      setIsEditDialogVisible(true);
    }
  };

  // Function to hide edit column dialog
  const hideEditDialog = () => {
    setIsEditDialogVisible(false);
  };

  // Function to hide filter dialog
  const hideDialog = () => {
    setIsDialogVisible(false);
  };

  return (
    <div className="md:flex flex-wrap items-center justify-between py-2 px-3">
      <div className="md:flex items-center gap-1.5 cursor-pointer">
        <div
          className="flex items-center gap-1.5 cursor-pointer py-2"
          ref={specifiedAreaRef}
          onClick={showDialog}
          role="button"
          aria-label="Open Filter Dialog"
        >
          <Image src={icons.filter} alt="filter" />
          <p className="detail_medium text-blueGray">Add filter</p>
        </div>

        {/* Applied Filters List */}
        {filtersArr.length > 0 && (
          <div className="flex items-center w-[80vw] md:max-w-[40vw] overflow-x-auto gap-1">
            {filtersArr.map((item, key) => (
              <div
                key={key}
                className="flex items-center gap-2 border border-blueGray100 px-2 rounded-md py-1 relative"
              >
                <p className="subtle_medium text-slateGray whitespace-nowrap">
                  {item}
                </p>
                <div
                  className="cursor-pointer ml-auto w-4 h-4"
                  onClick={() => {
                    handleRemoveFilter(item);
                  }}
                  role="button"
                  aria-label={`Remove Filter: ${item}`}
                >
                  <Image src={icons.close} alt="close" />
                </div>
              </div>
            ))}
          </div>
        )}
      </div>

      <div className="flex items-center gap-4">
        <div className="relative my-0.5">
          <input
            type="text"
            placeholder="Search client"
            className="w-full py-1 px-4 detail_medium placeholder:text-textPlaceHolder placeholder:pl-[22px]  text-blueGray border border-searchClientBorder rounded-md focus:outline-none"
          />
          <div className="absolute top-2 left-3">
            <Image src={icons.search} alt="search" />
          </div>
        </div>

        <div className="px-2.5 py-2">
          <Image src={icons.refresh} alt="refresh" />
        </div>

        <div
          className="px-2.5 py-2 cursor-pointer"
          ref={specifiedColumnAreaRef}
          onClick={showEditDialog}
          role="button"
          aria-label="Edit Columns"
        >
          <Image src={icons.columnsOutlined} alt="column outlined" />
        </div>

        <div className="px-2.5 py-2">
          <Image src={icons.download} alt="download" />
        </div>
      </div>

      <Dialog
        isVisible={isEditDialogVisible}
        position={editDialogPosition}
        onClose={hideEditDialog}
      >
        <EditColumn hideEditDialog={hideEditDialog} />
      </Dialog>

      <Dialog
        isVisible={isDialogVisible}
        position={dialogPosition}
        onClose={hideDialog}
      >
        <Filter hideDialog={hideDialog} />
      </Dialog>
    </div>
  );
};
