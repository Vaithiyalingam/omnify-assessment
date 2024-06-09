import { useState } from "react";
import {
  selectedDateTypeAtom,
  selectedEndDateAtom,
  selectedStartDateAtom,
} from "./atoms";
import { useAtom } from "jotai/react";
import { initialDatesArr } from "../constants";
import { DateType } from "../constants/types";

export const useSelectedDate = () => {
  // Get and set the selected start and end dates atom state
  const [selectedStartDateAt, setSelectedStartDateAt] = useAtom(
    selectedStartDateAtom
  );
  const [selectedEndDateAt, setSelectedEndDateAt] =
    useAtom(selectedEndDateAtom);

  // Local state to manage selected start and end dates, selected date type, dates array, and modal state
  const [selectedStartDate, setSelectedStartDate] = useState(new Date());
  const [selectedEndDate, setSelectedEndDate] = useState(new Date());
  const [selectedDateType, setSelectedDateType] = useState(initialDatesArr[0]);
  const [datesArr, setDatesArr] = useState<DateType[]>(initialDatesArr);
  const [isOpen, setIsOpen] = useState(false);

  // Handle click on date type option
  const handleDateTypeClick = (select: DateType) => {
    // Update dates array to mark the selected date type
    setDatesArr((prevDates) =>
      prevDates.map((date) =>
        date.id === select.id
          ? { ...date, selected: true }
          : { ...date, selected: false }
      )
    );

    // Update selected start and end dates based on selected date type
    setSelectedStartDate(select.minDate ?? new Date());
    setSelectedStartDateAt(select.minDate ?? new Date());
    setSelectedEndDate(select.maxDate ?? new Date());
    setSelectedEndDateAt(select.maxDate ?? new Date());

    // Set the selected date type
    setSelectedDateType(select);

    // Close the date type selection modal
    setIsOpen(false);
  };

  // Handle change in from date
  const handleFromDateChange = (date: Date) => {
    setSelectedStartDate(date);
    setSelectedStartDateAt(date);
  };

  // Handle change in end date
  const handleEndDateChange = (date: Date) => {
    setSelectedEndDate(date);
    setSelectedEndDateAt(date);
  };

  // Clear selected dates and date type
  const clearSelectedDate = () => {
    setSelectedEndDate(new Date());
    setSelectedEndDateAt("");
    setSelectedStartDate(new Date());
    setSelectedStartDateAt("");
    setSelectedDateType(initialDatesArr[0]);
  };

  return {
    selectedEndDate,
    selectedStartDate,
    handleFromDateChange,
    handleEndDateChange,
    selectedDateType,
    isOpen,
    setIsOpen,
    datesArr,
    handleDateTypeClick,
    clearSelectedDate,
    selectedStartDateAt,
    selectedEndDateAt,
  };
};
