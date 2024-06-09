import { useAtom } from "jotai/react";
import { selectedPeoplesAtom } from "./atoms";
import { useState } from "react";
import { tableData } from "../constants";

export const usePeople = () => {
  // Get and set the selected people atom state
  const [selectedPeopleAt, setSelectedPeopleAt] = useAtom(selectedPeoplesAtom);

  // Local state to manage selected people and search value
  const [selectedPeople, setSelectedPeople] = useState<any[]>([]);
  const [searchValue, setSearchValue] = useState("");

  // Handle input change in the search box
  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    event.preventDefault();
    setSearchValue(event.target.value);
  };

  // Handle selection/deselection of a person
  const handleSelectPeople = (item: any) => {
    const itemIndex = selectedPeople.findIndex(
      (selectedItem) => selectedItem.id === item.id
    );

    if (itemIndex !== -1) {
      // If already selected, deselect the person
      const updatedSelectedItems = [...selectedPeople];
      updatedSelectedItems.splice(itemIndex, 1);
      setSelectedPeople(updatedSelectedItems);
      setSelectedPeopleAt(updatedSelectedItems);
    } else {
      // If not selected, select the person
      setSelectedPeople([item, ...selectedPeople]);
      setSelectedPeopleAt([item, ...selectedPeople]);
    }
  };

  // Check if a person is selected
  const isPeopleSelected = (item: any) => {
    return selectedPeople.some((selectedItem) => selectedItem.id === item.id);
  };

  // Filter table data based on search value
  const filteredData = tableData
    .filter((item) =>
      item.payer.toLowerCase().includes(searchValue.toLowerCase())
    )
    .sort((a, b) => a.payer.localeCompare(b.payer));

  // Clear the search input
  const clearSearch = () => {
    setSearchValue("");
  };

  // Clear selected people
  const clearPeople = () => {
    setSelectedPeople([]);
    setSelectedPeopleAt([]);
  };

  return {
    selectedPeople,
    searchValue,
    handleInputChange,
    clearSearch,
    isPeopleSelected,
    handleSelectPeople,
    filteredData,
    clearPeople,
    selectedPeopleAt,
  };
};
