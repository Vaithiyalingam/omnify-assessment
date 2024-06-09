import { useAtom } from "jotai";
import { usePeople } from "./usePeople";
import { useSelectedDate } from "./useSelectedDate";
import { useServices } from "./useServices";
import { filtersArrAtom } from "./atoms";
import { format } from "date-fns";
import { useEffect, useState } from "react";

export const useApplyFilter = () => {
  const [filtersArr, setFiltersArr] = useAtom(filtersArrAtom);

  // Custom hooks for managing selected date, services, and people
  const { selectedStartDateAt, selectedEndDateAt, clearSelectedDate } =
    useSelectedDate();
  const {
    selectedServiceTypeAt,
    selectedStatusTypeAt,
    selectedServicesAt,
    clearServices,
  } = useServices();
  const { selectedPeopleAt, clearPeople } = usePeople();

  // State to enable/disable the Apply Filters button
  const [enableFilterBtn, setEnableFilterBtn] = useState(false);

  // Effect to enable the Apply Filters button when any filter is selected
  useEffect(() => {
    console.log(
      "called",
      selectedEndDateAt,
      selectedServiceTypeAt,
      selectedStatusTypeAt,
      selectedServicesAt,
      selectedPeopleAt,
      selectedStartDateAt
    );

    if (
      selectedServiceTypeAt.name ||
      selectedStatusTypeAt.name ||
      selectedServicesAt.length > 0 ||
      selectedPeopleAt.length > 0 ||
      selectedStartDateAt ||
      selectedEndDateAt
    ) {
      setEnableFilterBtn(true);
    } else {
      setEnableFilterBtn(false);
    }
  }, [
    selectedEndDateAt,
    selectedServiceTypeAt,
    selectedStatusTypeAt,
    selectedServicesAt,
    selectedPeopleAt,
    selectedStartDateAt,
  ]);

  // Handler to apply filters
  const handleApplyFilter = () => {
    const newFilters: string[] = [];

    if (selectedServiceTypeAt.name) {
      newFilters.push(`${selectedServiceTypeAt.name}`);
    }

    if (selectedStatusTypeAt.name) {
      newFilters.push(`${selectedStatusTypeAt.name}`);
    }

    if (selectedServicesAt.length > 0) {
      selectedServicesAt.forEach((service) => {
        newFilters.push(`${service.service}`);
      });
    }

    if (selectedPeopleAt.length > 0) {
      selectedPeopleAt.forEach((person) => {
        newFilters.push(`${person.payer}`);
      });
    }

    if (selectedStartDateAt || selectedEndDateAt) {
      if (selectedEndDateAt && selectedStartDateAt) {
        newFilters.push(
          `${format(selectedStartDateAt, "yyyy-MM-dd")} to ${format(
            selectedEndDateAt,
            "yyyy-MM-dd"
          )}`
        );
      } else if (selectedEndDateAt && !selectedStartDateAt) {
        newFilters.push(`${format(selectedEndDateAt, "yyyy-MM-dd")}`);
      } else if (!selectedEndDateAt && selectedStartDateAt) {
        newFilters.push(`${format(selectedStartDateAt, "yyyy-MM-dd")}`);
      }
    }

    // Update filtersArr with the new filters
    setFiltersArr((prevFiltersArr) => [...prevFiltersArr, ...newFilters]);
  };

  // Handler to clear filters
  const handleClearFilter = () => {
    clearPeople();
    clearSelectedDate();
    clearServices();
  };

  // Handler to remove a specific filter
  const handleRemoveFilter = (filter: string) => {
    setFiltersArr((prevFiltersArr) =>
      prevFiltersArr.filter((item) => item !== filter)
    );
  };

  return {
    handleApplyFilter,
    handleClearFilter,
    filtersArr,
    enableFilterBtn,
    handleRemoveFilter,
  };
};
