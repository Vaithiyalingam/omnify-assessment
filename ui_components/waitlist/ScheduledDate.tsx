import React from "react";
import Image from "next/image";
import Dropdown from "../shared/Dropdown";
import { icons } from "../../utils/icons";
import DatePicker from "../shared/DatePicker";
import { useSelectedDate } from "../../store/useSelectedDate";

export const ScheduledDate: React.FC = () => {
  const {
    selectedEndDate,
    selectedStartDate,
    selectedDateType,
    handleEndDateChange,
    handleFromDateChange,
    isOpen,
    setIsOpen,
    datesArr,
    handleDateTypeClick,
  } = useSelectedDate();

  return (
    <div className="w-full relative mx-2">
      <p className="detail_medium textblueGray my-2">Show orders for</p>
      <Dropdown
        label={selectedDateType.name}
        isOpen={isOpen}
        setIsOpen={setIsOpen}
      >
        <div className="">
          {datesArr.map((item) => (
            <div
              key={item.id}
              className="flex items-center justify-between px-2 py-1.5 cursor-pointer"
              onClick={() => handleDateTypeClick(item)}
              role="option"
              aria-selected={item.selected}
              aria-label={item.name}
            >
              <p className="subtle blueGray">{item.name}</p>
              {item.selected && (
                <Image src={icons.check} alt="check" width={16} height={16} />
              )}
            </div>
          ))}
        </div>
      </Dropdown>
      <div className="grid grid-cols-2 gap-5 w-full">
        <div className="col-span-1">
          <p className="detail_medium textblueGray my-2">From</p>
          <DatePicker
            selectedDate={selectedStartDate}
            onDateChange={handleFromDateChange}
            minDate={selectedDateType?.minDate}
            maxDate={selectedDateType?.maxDate}
          />
        </div>
        <div className="col-span-1">
          <p className="detail_medium textblueGray my-2">To</p>
          <DatePicker
            selectedDate={selectedEndDate}
            onDateChange={handleEndDateChange}
            minDate={selectedDateType?.minDate}
            maxDate={selectedDateType?.maxDate}
          />
        </div>
      </div>
    </div>
  );
};
