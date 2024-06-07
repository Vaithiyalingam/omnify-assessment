import Image from "next/image";
import { icons } from "../../utils/icons";
import { FC } from "react";
import { ISidebarComponentsProps } from "../../constants/types";

export const SidebarBottomSection: FC<ISidebarComponentsProps> = ({
  isSidebarOpen,
}) => {
  return (
    <div>
      <div
        className={`flex items-center ${
          isSidebarOpen ? "justify-between" : "justify-center"
        } px-2 py-1.5 hover:bg-white hover:border-b hover:border-b-blueGray100 rounded-md cursor-pointer transition-all duration-100 ease-in-out`}
        role="button"
        tabIndex={0}
        aria-label="Dashboard"
      >
        <div className="flex items-center gap-2">
          <Image src={icons.dashboard} alt="Dashboard icon" />
          <div
            className={`transition-all duration-300 ease-in-out ${
              isSidebarOpen
                ? "translate-x-0 opacity-100"
                : "-translate-x-[10vw] opacity-0 absolute"
            }`}
          >
            <p className="detail_medium text-blueGray">Dashboard</p>
          </div>
        </div>
        {isSidebarOpen && <Image src={icons.link} alt="Link icon" />}
      </div>
      <div
        className={`mt-4 flex items-center ${
          isSidebarOpen ? "" : "justify-center"
        } bg-white rounded-md py-2.5 px-2 shadow-sm`}
        role="button"
        tabIndex={0}
        aria-label="Admin profile"
      >
        <div
          className={`flex items-center gap-2 ${
            isSidebarOpen ? "" : "justify-center"
          }`}
        >
          <Image
            className="w-6 h-6 rounded-full"
            src={icons.adminAvatar}
            alt="Admin avatar"
          />
          <div
            className={`transition-all duration-300 ease-in-out ${
              isSidebarOpen
                ? "translate-x-0 opacity-100"
                : "-translate-x-[10vw] opacity-0 absolute"
            }`}
          >
            <p className="detail_medium text-darkBlue">Admin name</p>
            <p className="detail text-slateGray">adminname@mail.com</p>
          </div>
        </div>
        {isSidebarOpen && (
          <Image src={icons.chevronDown} alt="Chevron down icon" />
        )}
      </div>
      <div className="my-3.5 px-2">
        <div
          className={`flex items-center gap-2 ${
            isSidebarOpen ? "" : "justify-center"
          }`}
          role="button"
          tabIndex={0}
          aria-label="Help center"
        >
          <Image src={icons.help} alt="Help icon" />
          <div
            className={`transition-all duration-300 ease-in-out ${
              isSidebarOpen
                ? "translate-x-0 opacity-100"
                : "-translate-x-[10vw] opacity-0 absolute"
            }`}
          >
            <div className="flex whitespace-nowrap">
              <p className="detail text-darkBlue">Help center</p>
            </div>
            <div className="flex whitespace-nowrap">
              <p className="text_regular text-slateGray">@2024 Omnify.Inc.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
