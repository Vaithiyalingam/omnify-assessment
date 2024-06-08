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
  const [selectedStartDateAt, setSelectedStartDateAt] = useAtom(
    selectedStartDateAtom
  );
  const [selectedEndDateAt, setSelectedEndDateAt] =
    useAtom(selectedEndDateAtom);

  const [selectedStartDate, setSelectedStartDate] = useState(new Date());
  const [selectedEndDate, setSelectedEndDate] = useState(new Date());
  const [selectedDateType, setSelectedType] = useState(initialDatesArr[0]);
  const [datesArr, setDatesArr] = useState<DateType[]>(initialDatesArr);
  const [isOpen, setIsOpen] = useState(false);

  const handleDateTypeClick = (select: DateType) => {
    setDatesArr((prevDates) =>
      prevDates.map((date) =>
        date.id === select.id
          ? { ...date, selected: true }
          : { ...date, selected: false }
      )
    );
    setSelectedStartDate(select.minDate ?? new Date());
    setSelectedStartDateAt(select.minDate ?? new Date());
    setSelectedEndDate(select.maxDate ?? new Date());
    setSelectedEndDateAt(select.maxDate ?? new Date());

    const selectedDate = datesArr.find((date) => date.id === select.id);
    if (selectedDate) {
      setSelectedType(selectedDate);
    }
    setIsOpen(false);
  };

  const handleFromDateChange = (date: Date) => {
    setSelectedStartDate(date);
    setSelectedStartDateAt(date);
  };

  const handleEndDateChange = (date: Date) => {
    setSelectedEndDate(date);
    setSelectedEndDateAt(date);
  };

  const clearSelectedDate = () => {
    setSelectedEndDate(new Date());
    setSelectedEndDateAt("");
    setSelectedStartDate(new Date());
    setSelectedStartDateAt("");
    setSelectedType(initialDatesArr[0]);
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
