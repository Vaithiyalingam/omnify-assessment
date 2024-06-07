import { useAtom } from "jotai/react";
import { sidebarOpenAtom } from "./atoms";

export const useSidebarOpen = () => {
  const [sidebarOpen, setSidebarOpen] = useAtom(sidebarOpenAtom);
  return {
    sidebarOpen,
    setSidebarOpen,
  };
};
