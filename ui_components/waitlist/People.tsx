import Image from "next/image";
import { icons } from "../../utils/icons";

export const People = () => {
  return (
    <div className="mx-2 relative">
      <div className="relative">
        <input
          type="text"
          placeholder="Search client"
          className="w-full py-2 subtle placeholder:text-textPlaceHolder pl-9  text-blueGray border border-blueGray100 rounded-md focus:outline-none"
        />
        <div className="absolute top-2.5 left-3">
          <Image className="w-4 h-4" src={icons.search} alt="search" />
        </div>
      </div>
    </div>
  );
};
