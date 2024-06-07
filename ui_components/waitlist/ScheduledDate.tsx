import React, { useState } from "react";
import Image from "next/image";
import Dropdown from "../shared/Dropdown";
import { icons } from "../../utils/icons";
import DatePicker from "../shared/DatePicker";
import {
  subDays,
  startOfMonth,
  endOfMonth,
  startOfQuarter,
  endOfQuarter,
  startOfYear,
  endOfYear,
  subMonths,
  subQuarters,
  subYears,
} from "date-fns";

interface DateType {
  name: string;
  id: string;
  selected: boolean;
  minDate?: Date;
  maxDate?: Date;
}

export const ScheduledDate: React.FC = () => {
  const initialDatesArr: DateType[] = [
    { name: "All", id: "all", selected: true },
    { name: "Custom", id: "custom", selected: false },
    {
      name: "Last 30 days",
      id: "thirtydays",
      selected: false,
      minDate: subDays(new Date(), 30),
      maxDate: new Date(),
    },
    {
      name: "This month",
      id: "month",
      selected: false,
      minDate: startOfMonth(new Date()),
      maxDate: new Date(),
    },
    {
      name: "Last month",
      id: "lastmonth",
      selected: false,
      minDate: startOfMonth(subMonths(new Date(), 1)),
      maxDate: endOfMonth(subMonths(new Date(), 1)),
    },
    {
      name: "This quarter",
      id: "quarter",
      selected: false,
      minDate: startOfQuarter(new Date()),
      maxDate: new Date(),
    },
    {
      name: "2 quarters ago",
      id: "quarterago",
      selected: false,
      minDate: startOfQuarter(subQuarters(new Date(), 2)),
      maxDate: endOfQuarter(subQuarters(new Date(), 2)),
    },
    {
      name: "This Year",
      id: "thisyear",
      selected: false,
      minDate: startOfYear(new Date()),
      maxDate: new Date(),
    },
    {
      name: "Last Year",
      id: "lastyear",
      selected: false,
      minDate: startOfYear(subYears(new Date(), 1)),
      maxDate: endOfYear(subYears(new Date(), 1)),
    },
  ];

  const [datesArr, setDatesArr] = useState<DateType[]>(initialDatesArr);
  const [isOpen, setIsOpen] = useState(false);
  const [showFromSelectedDate, setShowFromSelectedDate] = useState(false);
  const [showEndSelectedDate, setShowEndSelectedDate] = useState(false);

  const [selectedDateType, setSelectedType] = useState<DateType>(
    initialDatesArr[0]
  );

  const [selectedFromDate, setSelectedFromDate] = useState<Date>(new Date());
  const [selectedEndDate, setSelectedEndDate] = useState<Date>(new Date());

  const handleFromDateChange = (date: Date) => {
    setSelectedFromDate(date);
  };
  const handleEndDateChange = (date: Date) => {
    setSelectedEndDate(date);
  };
  const handleDateTypeClick = (select: DateType) => {
    setDatesArr((prevDates) =>
      prevDates.map((date) =>
        date.id === select.id
          ? { ...date, selected: true }
          : { ...date, selected: false }
      )
    );
    setSelectedFromDate(select.minDate ?? new Date());
    setSelectedEndDate(select.maxDate ?? new Date());

    const selectedDate = datesArr.find((date) => date.id === select.id);
    if (selectedDate) {
      setSelectedType(selectedDate);
    }
    setIsOpen(false);
  };

  return (
    <div className="w-full relative mx-2">
      <p className="detail_medium textblueGray my-2">Show orders for</p>
      <Dropdown
        label={selectedDateType.name}
        isOpen={isOpen}
        setIsOpen={setIsOpen}
      >
        <div className="">
          {datesArr.map((item, ind) => (
            <div
              key={item.id}
              className="flex items-center justify-between px-2 py-1.5 cursor-pointer"
              onClick={() => handleDateTypeClick(item)}
            >
              <p className="subtle blueGray">{item.name}</p>
              {item.selected && (
                <Image src={icons.check} alt="check" width={16} height={16} />
              )}
            </div>
          ))}
        </div>
      </Dropdown>
      <div className="grid grid-cols-2 gap-5 w-full ">
        <div className="col-span-1">
          <p className="detail_medium textblueGray my-2">From</p>
          <DatePicker
            selectedDate={selectedFromDate}
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
