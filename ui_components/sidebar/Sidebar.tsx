"use client";
import Image from "next/image";
import React, { useCallback, useEffect } from "react";
import { icons } from "../../utils/icons";
import { SidebarList } from "./SidebarList";
import { SidebarBottomSection } from "./SidebarBottomSection";
import { useSidebarOpen } from "../../store/useSidebarOpen";

const SideBar = () => {
  const { sidebarOpen, setSidebarOpen } = useSidebarOpen();

  // Function to toggle sidebar open/close
  const handleViewSidebar = useCallback(() => {
    setSidebarOpen((prev) => !prev);
  }, [setSidebarOpen]);

  // Handle keyboard events to open/close sidebar using arrow keys
  const handleKeyDown = useCallback(
    (event: KeyboardEvent) => {
      const target = event.target as HTMLElement;
      const isInputFocused =
        target.tagName === "INPUT" || target.tagName === "TEXTAREA";

      if (!isInputFocused) {
        console.log("Key down event detected:", event.key);
        if (event.key === "ArrowRight" && !sidebarOpen) {
          handleViewSidebar();
        } else if (event.key === "ArrowLeft" && sidebarOpen) {
          handleViewSidebar();
        }
      }
    },
    [sidebarOpen, handleViewSidebar]
  );

  useEffect(() => {
    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [handleKeyDown]);

  // Animation styles for sidebar opening/closing
  const sidebarAnim = sidebarOpen
    ? "translate-x-0 opacity-100"
    : "-translate-x-[50vw] opacity-0 overflow-hidden";

  return (
    <div
      className={`z-10 hidden md:flex flex-col justify-between px-2 pt-3 ${
        sidebarOpen ? "w-[228px]" : "w-[80px]"
      } h-screen transition-all duration-300 ease-in-out `}
      aria-label="Sidebar"
    >
      <div>
        <div
          className={`flex items-center ${
            sidebarOpen ? " justify-between" : ""
          } px-2 mb-2 transition-all duration-300 ease-in-out`}
        >
          <div
            className={`flex transition-all duration-300 ease-in-out ${
              sidebarOpen ? "" : "ml-3 "
            } items-center`}
          >
            {/* Frontdesk Logo */}
            <Image
              src={icons.frontdeskLogo}
              alt="Frontdesk logo"
              aria-label="Frontdesk logo"
            />
            {/* Logo text animation */}
            <div
              className={`${sidebarAnim} flex items-center transition-all duration-300 ease`}
            >
              <p className="font-poppins font-bold text-[18px] leading-6 ml-2 text-darkGray">
                Front
              </p>
              <div className="relative flex items-center">
                <div className="h-1 w-1 bg-darkGray rounded-full"></div>
              </div>
              <p className="font-poppins font-bold text-[18px] leading-6 text-darkGray">
                Desk
              </p>
            </div>
          </div>
          {/* Toggle sidebar button */}
          <div
            className="cursor-pointer"
            role="button"
            tabIndex={0}
            aria-label="Toggle sidebar"
            onClick={handleViewSidebar}
          >
            <Image
              className={`${sidebarAnim}`}
              src={icons.columnsIcon}
              alt="Toggle columns"
            />
          </div>
        </div>
        {/* Location and arrow section */}
        <div
          className={`flex  whitespace-nowrap items-center ${
            sidebarOpen ? "justify-between" : "justify-center"
          } bg-white p-2 mt-4 shadow-md rounded-md border border-blueGray100 shadow-greenGray`}
        >
          <div
            className={`${sidebarAnim} ${
              sidebarOpen ? "" : "hidden"
            } flex items-center transition-all duration-300 ease`}
          >
            <p className={`detail_medium text-blueGray`}>Location Name</p>
          </div>
          <Image src={icons.arrowLeftRight} alt="Arrow left right" />
        </div>
        {/* Time and date section */}
        <div className="mx-2">
          <div
            className={`h-auto w-full rounded-md bg-gradient-to-r from-blueGray100 to-sidebarBg p-[1px] shadow-md shadow-greenGray`}
          >
            <div
              className={`bg-lightBlueGray py-2 px-3 rounded-md transition-all duration-300 ease-in-out`}
            >
              <div
                className={`flex whitespace-nowrap w-fit  items-center gap-2 transition-opacity duration-300 ease-in-out  ${sidebarAnim}`}
              >
                <p className="sub_heading_bold text-blueGray">08:30 AM </p>
                <p className="sub_heading_medium text-blueGray">Tue 20 Jan</p>
              </div>
              <div
                className={`flex items-center justify-between ${
                  sidebarOpen ? "mt-1.5" : ""
                } transition-all duration-300 ease-in-out`}
              >
                <div className="flex items-center gap-1">
                  <Image src={icons.globe} alt="Globe icon" />
                  <div
                    className={`flex whitespace-nowrap transition-opacity duration-300 ease-in-out ${sidebarAnim}`}
                  >
                    <p className="text_medium text-blueGray">UTC: +5 hours</p>
                  </div>
                </div>
                {sidebarOpen && (
                  <Image src={icons.chevronDown} alt="Chevron down" />
                )}
              </div>
            </div>
          </div>
        </div>

        {/* Sidebar list */}
        <div className="mt-6">
          <SidebarList isSidebarOpen={sidebarOpen} />
        </div>
      </div>
      {/* Bottom section of the sidebar */}
      <SidebarBottomSection isSidebarOpen={sidebarOpen} />
    </div>
  );
};

export default SideBar;
