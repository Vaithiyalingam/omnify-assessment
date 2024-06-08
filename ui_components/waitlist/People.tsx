import Image from "next/image";
import { icons } from "../../utils/icons";
import { tableData } from "../../constants";
import { useState } from "react";
import { usePeople } from "../../store/usePeople";

export const People = () => {
  const {
    searchValue,
    selectedPeople,
    handleInputChange,
    clearSearch,
    handleSelectPeople,
    isPeopleSelected,
    filteredData,
  } = usePeople();

  return (
    <div className="mx-2 relative">
      <div className="relative">
        <input
          type="text"
          placeholder="Search Payer or attendee name"
          value={searchValue}
          onChange={(e) => handleInputChange(e)}
          className="w-full py-2 subtle placeholder:text-textPlaceHolder pl-9 text-blueGray border border-blueGray100 rounded-md focus:outline-none"
        />
        <div className="absolute top-2.5 left-3">
          <Image className="w-4 h-4" src={icons.search} alt="search" />
        </div>
        {searchValue && (
          <div
            className="absolute top-2.5 right-3 cursor-pointer"
            onClick={() => {
              clearSearch();
            }}
          >
            <Image className="w-4 h-4" src={icons.xCircle} alt="cancel" />
          </div>
        )}
      </div>
      {searchValue && (
        <div className="mt-2">
          <p className="detail text-darkBlue">{`Showing ${filteredData.length} results matching ‘${searchValue}’`}</p>
          <div className="mt-4 h-[200px] overflow-y-auto">
            {filteredData.map((item) => (
              <div
                key={item.id}
                className={`gap-4 flex items-center cursor-pointer pb-2 ${
                  isPeopleSelected(item) ? "bg-gray-100" : ""
                }`}
                onClick={() => handleSelectPeople(item)} // Handle click to select item
              >
                <div
                  className={`w-4 h-4 rounded-sm border border-gray-200 p-0.5 ${
                    isPeopleSelected(item) ? "bg-black" : ""
                  }`}
                />
                <p className="subtle text-tableContentText">{item.payer}</p>
                <p className="text_medium text-blueGray">{item.serviceType}</p>
              </div>
            ))}
          </div>
        </div>
      )}
      {/* Display selected items */}
      {selectedPeople.length > 0 && !searchValue && (
        <div className="mt-4">
          <p className="detail text-darkBlue">Selected Items</p>
          <div className="mt-2">
            {selectedPeople.map((item) => (
              <div
                key={item.id}
                className="gap-4 flex items-center cursor-pointer pb-2"
                onClick={() => {
                  handleSelectPeople(item);
                }}
                role="presentation"
              >
                <div className="w-4 h-4 rounded-sm border border-gray-200 p-0.5 bg-black" />
                <p className="subtle text-tableContentText">{item.payer}</p>
                <p className="text_medium text-blueGray">{item.service}</p>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};
