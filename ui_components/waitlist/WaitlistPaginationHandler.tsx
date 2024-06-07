import Image from "next/image";
import { icons } from "../../utils/icons";

export const WaitlistPaginationHandler = () => {
  return (
    <div className="flex items-center justify-between">
      <div className="flex items-center gap-3  px-2 py-1">
        <p className="subtle text-slateGray">Displaying</p>
        <div className="flex items-center gap-1.5">
          <p className="subtle leading-6 text-blueGray">10</p>
          <Image src={icons.chevronUpDown} alt="chevron up down" />
        </div>
        <p className="subtle_medium text-slateGray">
          out of <span className="text-darkBlueBlack">104 </span>
        </p>
      </div>
      <div className="flex items-center gap-0.5">
        <div className="flex items-center gap-2 px-2 py-1">
          <Image src={icons.chevronLeft} alt="chevron left" />
          <p className="detail_medium text-blueGray"> Previous</p>
        </div>
        <div className="flex items-center gap-0.5">
          <div className="px-3 py-1.5 rounded-md border border-blueGray100">
            <p className="detail_medium text-blueGray">1</p>
          </div>
          <div className="px-3 py-1.5">
            <p className="detail_medium text-blueGray">2</p>
          </div>
          <div className="px-3 py-1.5">
            <p className="detail_medium text-blueGray">3</p>
          </div>
        </div>
        <div className="flex items-center gap-2 px-2 py-1">
          <p className="detail_medium text-blueGray"> Next</p>
          <Image src={icons.chevronRight} alt="chevron right" />
        </div>
      </div>
    </div>
  );
};
