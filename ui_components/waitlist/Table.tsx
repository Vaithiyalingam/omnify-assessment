"use client";
import React from "react";
import { useSidebarOpen } from "../../store/useSidebarOpen";
import { tableData } from "../../constants";
import { useEditColumn } from "../../store/useEditColumn";

export const Table = () => {
  const { sidebarOpen } = useSidebarOpen();
  const { columnListAt } = useEditColumn();
  const checkedColumns = columnListAt.filter((item) => item.isChecked);
  const gridColsClass = `grid-cols-${checkedColumns.length}`;
  console.log(checkedColumns.length, "checkedColumns");

  return (
    <div
      className={`overflow-auto border rounded-md border-blueGray100 relative px-5 custom-scrollbar ${
        sidebarOpen
          ? "md:w-[calc(100vw-280px)] w-[calc(100vw-80px)]"
          : "md:w-[calc(100vw-120px)] w-[calc(100vw-80px)]"
      }`}
      aria-label="Table container"
    >
      <div className="min-w-max w-max">
        {/* Table Header */}
        <div
          className={`grid ${gridColsClass} gap-x-4 overflow-x-auto border-b border-blueGray100 py-2.5`}
          aria-label="Header"
        >
          {columnListAt.map((col, index) =>
            col.isChecked ? (
              <div key={index} className="flex items-center gap-1.5">
                <p className="detail_medium text-slateGray">{col.name}</p>
              </div>
            ) : null
          )}
        </div>

        {/* Table Rows */}
        {tableData.map((item) => (
          <div
            key={item.id}
            className={`grid ${gridColsClass} gap-x-4 overflow-x-auto border-b border-b-blueGray100 py-2.5`}
            aria-label="Row"
          >
            {columnListAt[0].isChecked && (
              <div className="tableContent" aria-label="Created on">
                <p className="detail_medium text-tableContentText">
                  {item.createdOn}
                </p>
              </div>
            )}
            {columnListAt[1].isChecked && (
              <div className="tableContent" aria-label="Payer">
                <p className="detail_medium text-tableContentText">
                  {item.payer}
                </p>
              </div>
            )}
            {columnListAt[2].isChecked && (
              <div className="tableContent" aria-label="Status">
                <p className="detail_medium text-tableContentText">
                  {item.status}
                </p>
              </div>
            )}
            {columnListAt[3].isChecked && (
              <div className="tableContent" aria-label="Email">
                <p className="detail_medium text-tableContentText">
                  {item.email}
                </p>
              </div>
            )}
            {columnListAt[4].isChecked && (
              <div className="tableContent" aria-label="Payer Phone">
                <p className="detail_medium text-tableContentText">
                  {item.payerPhone}
                </p>
              </div>
            )}
            {columnListAt[5].isChecked && (
              <div className="tableContent" aria-label="Service">
                <p className="detail_medium text-tableContentText">
                  {item.service}
                </p>
              </div>
            )}
            {columnListAt[6].isChecked && (
              <div className="tableContent" aria-label="Scheduled">
                <p className="detail_medium text-tableContentText">
                  {item.scheduled}
                </p>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};
