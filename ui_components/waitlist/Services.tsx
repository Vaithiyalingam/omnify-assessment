"use client";
import React from "react";
import Image from "next/image";
import Dropdown from "../shared/Dropdown";
import { icons } from "../../utils/icons";
import { useServices } from "../../store/useServices";

export const Services = () => {
  const {
    uniqueFilteredData,
    isServiceSelected,
    handleSelectService,
    handleStatusTypeClick,
    handleInputChange,
    handleServiceTypeClick,
    selectedServiceType,
    selectedStatusType,
    serviceOpen,
    statusOpen,
    setSelectedServiceFilter,
    selectedServicesFilter,
    searchValue,
    clearSearch,
    selectedServices,
    setStatusOpen,
    setServiceOpen,
    serviceArr,
    statusArr,
  } = useServices();

  return (
    <div className="mx-4 relative">
      <div className="flex items-center gap-6">
        <div
          className="gap-4 flex items-center cursor-pointer pb-2"
          onClick={() => setSelectedServiceFilter("service")}
          role="presentation"
          aria-label="Search by service"
        >
          <div className="rounded-full border border-gray-200 p-0.5 flex">
            <div
              className={`w-4 h-4 rounded-full border border-gray-200 p-0.5 ${
                selectedServicesFilter === "service" ? "bg-black" : ""
              }`}
              aria-hidden="true"
            />
          </div>
          <p className="subtle text-tableContentText">Search by service</p>
        </div>

        <div
          className="gap-4 flex items-center cursor-pointer pb-2"
          onClick={() => setSelectedServiceFilter("tags")}
          role="presentation"
          aria-label="Search by tags"
        >
          <div className="rounded-full border border-gray-200 p-0.5 flex">
            <div
              className={`w-4 h-4 rounded-full border border-gray-200 p-0.5 ${
                selectedServicesFilter === "tags" ? "bg-black" : ""
              }`}
              aria-hidden="true"
            />
          </div>
          <p className="subtle text-tableContentText">Search by tags</p>
        </div>
      </div>

      {selectedServicesFilter === "service" ? (
        <div className="mt-5">
          <div className="relative">
            <input
              type="text"
              placeholder="Search Service name"
              value={searchValue}
              onChange={handleInputChange}
              className="w-full py-2 subtle placeholder:text-textPlaceHolder pl-9 text-blueGray border border-blueGray100 rounded-md focus:outline-none"
              aria-label="Search Service name"
            />
            <div className="absolute top-2.5 left-3">
              <Image src={icons.search} alt="search" width={16} height={16} />
            </div>
            {searchValue && (
              <div
                className="absolute top-2.5 right-3 cursor-pointer"
                onClick={clearSearch}
              >
                <Image
                  src={icons.xCircle}
                  alt="cancel"
                  width={16}
                  height={16}
                />
              </div>
            )}
          </div>
          {searchValue && (
            <div className="mt-2">
              <p className="detail text-darkBlue">{`Showing ${uniqueFilteredData.length} results matching ‘${searchValue}’`}</p>
              <div className="mt-4 h-[200px] overflow-y-auto">
                {uniqueFilteredData.map((item) => (
                  <div
                    key={item?.id}
                    className={`gap-4 flex items-center cursor-pointer pb-2 ${
                      isServiceSelected(item) ? "bg-gray-100" : ""
                    }`}
                    onClick={() => handleSelectService(item)}
                    role="presentation"
                    aria-label={`${item?.service}, ${item?.status}`}
                  >
                    <div
                      className={`w-4 h-4 rounded-sm border border-gray-200 p-0.5 ${
                        isServiceSelected(item) ? "bg-black" : ""
                      }`}
                    />
                    <p className="subtle text-tableContentText">
                      {item?.service}
                    </p>
                    <p className="text_medium text-blueGray">{item?.status}</p>
                  </div>
                ))}
              </div>
            </div>
          )}
          {selectedServices.length > 0 && !searchValue && (
            <div className="mt-4">
              <p className="detail text-darkBlue">Selected Items</p>
              <div className="mt-2">
                {selectedServices.map((item) => (
                  <div
                    key={item.id}
                    className="gap-4 flex items-center cursor-pointer pb-2"
                    onClick={() => handleSelectService(item)}
                    role="presentation"
                    aria-label={`${item.service}, ${item.status}`}
                  >
                    <div className="w-4 h-4 rounded-sm border border-gray-200 p-0.5 bg-black" />
                    <p className="subtle text-tableContentText">
                      {item.service}
                    </p>
                    <p className="text_medium text-blueGray">{item.status}</p>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      ) : (
        <div className="mt-5">
          <div>
            <p className="detail_medium textblueGray my-2">Service type</p>
            <Dropdown
              label={selectedServiceType.name}
              isOpen={serviceOpen}
              setIsOpen={setServiceOpen}
            >
              <div className="">
                {serviceArr.map((item) => (
                  <div
                    key={item.id}
                    className="flex items-center justify-between px-2 py-1.5 cursor-pointer"
                    onClick={() => handleServiceTypeClick(item)}
                    role="option"
                    aria-selected={item.selected}
                    aria-label={item.name}
                  >
                    <p className="subtle blueGray">{item.name}</p>
                    {item.selected && (
                      <Image
                        src={icons.check}
                        alt="check"
                        width={16}
                        height={16}
                      />
                    )}
                  </div>
                ))}
              </div>
            </Dropdown>
          </div>
          <div>
            <p className="detail_medium textblueGray my-2">Status</p>
            <Dropdown
              label={selectedStatusType.name}
              isOpen={statusOpen}
              setIsOpen={setStatusOpen}
            >
              <div className="">
                {statusArr.map((item) => (
                  <div
                    key={item.id}
                    className="flex items-center justify-between px-2 py-1.5 cursor-pointer"
                    onClick={() => handleStatusTypeClick(item)}
                    role="option"
                    aria-selected={item.selected}
                    aria-label={item.name}
                  >
                    <p className="subtle blueGray">{item.name}</p>
                    {item.selected && (
                      <Image
                        src={icons.check}
                        alt="check"
                        width={16}
                        height={16}
                      />
                    )}
                  </div>
                ))}
              </div>
            </Dropdown>
          </div>
        </div>
      )}
    </div>
  );
};
