import Image from "next/image";
import { sidebarList } from "../../constants";
import { FC } from "react";
import { ISidebarComponentsProps } from "../../constants/types";

export const SidebarList: FC<ISidebarComponentsProps> = ({ isSidebarOpen }) => {
  return (
    <div>
      {sidebarList.map((item, ind) => {
        return (
          <div
            className={`flex items-center ${
              isSidebarOpen ? "" : "ml-3"
            } gap-2 px-2 py-1.5 hover:bg-white hover:border-b hover:border-b-blueGray100 rounded-md cursor-pointer transition-all duration-100 ease-in-out`}
            key={ind}
          >
            <Image src={item.icons} alt="sidebar_list_icons" />
            <div
              className={`transition-all duration-300 ease-in-out ${
                isSidebarOpen
                  ? "translate-x-0 opacity-100"
                  : "-translate-x-[10vw] opacity-0 absolute"
              }`}
            >
              <p className={`detail_medium  text-blueGray`}>{item.name}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
};
