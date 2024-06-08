import { useAtom } from "jotai/react";
import { selectedPeoplesAtom } from "./atoms";
import { useState } from "react";
import { tableData } from "../constants";

export const usePeople = () => {
  const [selectedPeopleAt, setSelectedPeopleAt] = useAtom(selectedPeoplesAtom);

  const [selectedPeople, setSelectedPeople] = useState<any[]>([]);
  const [searchValue, setSearchValue] = useState("");

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    event.preventDefault();
    setSearchValue(event.target.value);
  };

  const handleSelectPeople = (item: any) => {
    const itemIndex = selectedPeople.findIndex(
      (selectedItem) => selectedItem.id === item.id
    );

    if (itemIndex !== -1) {
      const updatedSelectedItems = [...selectedPeople];
      updatedSelectedItems.splice(itemIndex, 1);
      setSelectedPeople(updatedSelectedItems);
      setSelectedPeopleAt(updatedSelectedItems);
    } else {
      setSelectedPeople([item, ...selectedPeople]);
      setSelectedPeopleAt([item, ...selectedPeople]);
    }
  };

  const isPeopleSelected = (item: any) => {
    return selectedPeople.some((selectedItem) => selectedItem.id === item.id);
  };

  const filteredData = tableData
    .filter((item) =>
      item.payer.toLowerCase().includes(searchValue.toLowerCase())
    )
    .sort((a, b) => a.payer.localeCompare(b.payer));

  const clearSearch = () => {
    setSearchValue("");
  };

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
