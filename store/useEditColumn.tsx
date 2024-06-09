import { useAtom } from "jotai/react";
import { columnListAtom } from "./atoms";
import { useState } from "react";
import { coloumns } from "../constants";

export const useEditColumn = () => {
  // Get and set the column list atom state
  const [columnListAt, setColumnListAt] = useAtom(columnListAtom);

  // Local state to manage column list
  const [columnList, setColumnList] = useState(columnListAt);

  // Handle column checkbox change
  const handleColumnChange = (index: number) => {
    // Create a copy of the column list
    const newList = [...columnList];
    // Toggle the isChecked property of the selected column
    newList[index].isChecked = !newList[index].isChecked;
    // Update the local state
    setColumnList(newList);
  };

  // Apply the edited column list to the atom state
  const handleApply = () => {
    setColumnListAt(columnList);
  };

  return { columnList, handleColumnChange, columnListAt, handleApply };
};
