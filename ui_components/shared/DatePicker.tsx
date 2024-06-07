import React, { useState, useEffect, useRef } from "react";
import {
  format,
  addMonths,
  subMonths,
  startOfMonth,
  endOfMonth,
  addDays,
  isBefore,
  isAfter,
  isSameDay,
} from "date-fns";
import Image from "next/image";
import { icons } from "../../utils/icons";

interface DatePickerProps {
  selectedDate: Date;
  onDateChange: (date: Date) => void;
  minDate?: Date;
  maxDate?: Date;
}

const DatePicker: React.FC<DatePickerProps> = ({
  selectedDate,
  onDateChange,
  minDate,
  maxDate,
}) => {
  const initialMonth = minDate ? startOfMonth(minDate) : selectedDate;
  const [currentMonth, setCurrentMonth] = useState<Date>(initialMonth);
  const [showDatePicker, setShowDatePicker] = useState<boolean>(false);
  const datePickerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        datePickerRef.current &&
        !datePickerRef.current.contains(event.target as Node)
      ) {
        setShowDatePicker(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  useEffect(() => {
    setCurrentMonth(selectedDate);
  }, [selectedDate]);

  const renderHeader = () => {
    const isPrevMonthDisabled =
      minDate && isBefore(subMonths(currentMonth, 1), startOfMonth(minDate));
    const isNextMonthDisabled =
      maxDate && isAfter(addMonths(currentMonth, 1), endOfMonth(maxDate));

    return (
      <div className="flex justify-between items-center mb-2">
        <div
          className={`border p-2.5 border-dropdownBorder shadow-sm shadow-datepickerShadow rounded-md ${
            isPrevMonthDisabled ? "opacity-50 cursor-not-allowed" : ""
          }`}
          onClick={() =>
            !isPrevMonthDisabled && setCurrentMonth(subMonths(currentMonth, 1))
          }
        >
          <Image src={icons.chevronLeftBlack} alt="chevron left" />
        </div>
        <div>
          <p className="subtle_medium text-datePickerDateEn">
            {format(currentMonth, "MMMM")}
            <br />
            {format(currentMonth, "yyyy")}
          </p>
        </div>
        <div
          className={`border p-2.5 border-dropdownBorder shadow-sm shadow-datepickerShadow rounded-md ${
            isNextMonthDisabled ? "opacity-50 cursor-not-allowed" : ""
          }`}
          onClick={() =>
            !isNextMonthDisabled && setCurrentMonth(addMonths(currentMonth, 1))
          }
        >
          <Image src={icons.chevronRightBlack} alt="chevron right" />
        </div>
      </div>
    );
  };

  const renderDaysOfWeek = () => {
    const daysOfWeek = ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"];
    return (
      <div className="grid grid-cols-7">
        {daysOfWeek.map((day) => (
          <div key={day} className="text-center px-1.5 py-[7px]">
            <p className="subtle text-datePickerDay">{day}</p>
          </div>
        ))}
      </div>
    );
  };

  const renderDays = () => {
    const monthStart = startOfMonth(currentMonth);
    const monthEnd = endOfMonth(monthStart);
    const startDate = startOfMonth(monthStart);
    const endDate = endOfMonth(monthEnd);
    const dateFormat = "d";
    const rows = [];
    let days = [];
    let day = startDate;
    let formattedDate = "";

    while (day <= endDate) {
      formattedDate = format(day, dateFormat);
      const cloneDay = day;
      const isDisabled =
        (minDate && isBefore(day, minDate)) ||
        (maxDate && isAfter(day, maxDate));
      days.push(
        <div
          className={`text-center py-2 subtle ${
            day.getMonth() !== currentMonth.getMonth()
              ? "text-datePickerDateDis"
              : "text-datePickerDateEn"
          } ${
            isSameDay(day, selectedDate)
              ? "bg-darkBlueBlack text-white rounded-md"
              : ""
          } ${isDisabled ? "cursor-not-allowed opacity-50" : "cursor-pointer"}`}
          key={day.toString()}
          onClick={() => onDateClick(cloneDay)}
        >
          <span>{formattedDate}</span>
        </div>
      );
      day = addDays(day, 1);
    }

    let rowIndex = 0;
    while (rowIndex < days.length) {
      rows.push(
        <div className="grid grid-cols-7" key={rowIndex}>
          {days.slice(rowIndex, rowIndex + 7)}
        </div>
      );
      rowIndex += 7;
    }

    return <div>{rows}</div>;
  };

  const onDateClick = (day: Date) => {
    onDateChange(day);
    setShowDatePicker(false);
  };

  return (
    <div className="relative">
      <div className="cursor-pointer">
        <input
          type="text"
          value={format(selectedDate, "yyyy-MM-dd")}
          readOnly
          onClick={() => setShowDatePicker(!showDatePicker)}
          className={` pl-7 subtle text-datePickerText ${
            showDatePicker ? "border-2" : "border"
          } border-slateGray p-2 rounded-lg datePickerInputWidth`}
        />
        <div className="absolute left-2 top-3">
          <Image src={icons.calendarOutlined} alt="calenderOutlined" />
        </div>
      </div>
      {showDatePicker && (
        <div
          className="absolute bg-white border p-4 mt-2 rounded shadow-lg z-10"
          ref={datePickerRef}
        >
          {renderHeader()}
          {renderDaysOfWeek()}
          {renderDays()}
        </div>
      )}
    </div>
  );
};

export default DatePicker;
