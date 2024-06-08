import { useAtom } from "jotai/react";
import { columnListAtom } from "./atoms";
import { useState } from "react";
import { coloumns } from "../constants";

export const useEditColumn = () => {
  const [columnListAt, setColumnListAt] = useAtom(columnListAtom);

  const [columnList, setColumnList] = useState(columnListAt);

  const handleColumnChange = (index: number) => {
    const newList = [...columnList];
    newList[index].isChecked = !newList[index].isChecked;
    setColumnList(newList);
  };
  const handleApply = () => {
    setColumnListAt(columnList);
  };
  return { columnList, handleColumnChange, columnListAt, handleApply };
};
