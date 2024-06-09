import { useAtom } from "jotai/react";
import { sidebarOpenAtom } from "./atoms";

export const useSidebarOpen = () => {
  // Use the sidebarOpenAtom from Jotai to manage the sidebar state
  const [sidebarOpen, setSidebarOpen] = useAtom(sidebarOpenAtom);

  // Return the sidebar state and the function to set the sidebar state
  return {
    sidebarOpen,
    setSidebarOpen,
  };
};
