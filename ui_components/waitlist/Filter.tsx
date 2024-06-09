import Image from "next/image";
import { icons } from "../../utils/icons";
import { FC, useState } from "react";
import { ScheduledDate } from "./ScheduledDate";
import { People } from "./People";
import { Services } from "./Services";
import { useApplyFilter } from "../../store/useApplyFilter";

export interface IFilter {
  hideDialog: () => void;
}

export const Filter: FC<IFilter> = ({ hideDialog }) => {
  const { handleApplyFilter, handleClearFilter, enableFilterBtn } =
    useApplyFilter();

  // Enum for filter types
  enum FILTERS_ENUM {
    SCHEDULED_DATE = "SCHEDULED_DATE",
    PEOPLE = "PEOPLE",
    SERVICES = "SERVICES",
  }

  const [selectedFilter, setSelectedFilter] = useState<FILTERS_ENUM>(
    FILTERS_ENUM.SCHEDULED_DATE
  );

  // Function to handle selection of filters
  const handleSelectFilter = (filter: FILTERS_ENUM) => {
    setSelectedFilter(filter);
  };

  // Function to render the selected filter component
  const renderFilterComponent = () => {
    switch (selectedFilter) {
      case FILTERS_ENUM.SCHEDULED_DATE:
        return <ScheduledDate />;
      case FILTERS_ENUM.PEOPLE:
        return <People />;
      case FILTERS_ENUM.SERVICES:
        return <Services />;
      default:
        return null;
    }
  };

  return (
    <div className="md:w-[50vw] md:h-[50vh] w-[80vw] h-[80vh] md:grid grid-cols-8">
      <div className="col-span-3 px-2 border-r border-blueGray100">
        <div
          className={`flex items-center gap-2 py-2 px-2 ${
            selectedFilter === FILTERS_ENUM.SCHEDULED_DATE
              ? "bg-blueGray100"
              : ""
          } rounded-md cursor-pointer`}
          onClick={() => handleSelectFilter(FILTERS_ENUM.SCHEDULED_DATE)}
          role="presentation"
        >
          <Image src={icons.calendarOutlined} alt="Calendar" />
          <p className="subtle_medium text-blueGray">Scheduled Date</p>
        </div>
        <div
          className={`flex items-center gap-2 py-2 px-2 ${
            selectedFilter === FILTERS_ENUM.PEOPLE ? "bg-blueGray100" : ""
          } rounded-md cursor-pointer`}
          onClick={() => handleSelectFilter(FILTERS_ENUM.PEOPLE)}
          role="presentation"
        >
          <Image src={icons.people} alt="People" />
          <p className="subtle_medium text-blueGray">People</p>
        </div>
        <div
          className={`flex items-center gap-2 py-2 px-2 ${
            selectedFilter === FILTERS_ENUM.SERVICES ? "bg-blueGray100" : ""
          } rounded-md cursor-pointer`}
          onClick={() => handleSelectFilter(FILTERS_ENUM.SERVICES)}
          role="presentation"
        >
          <Image src={icons.dashboard} alt="Dashboard" />
          <p className="subtle_medium text-blueGray">Services / Products</p>
        </div>
      </div>
      <div className="col-span-5 w-full">{renderFilterComponent()}</div>
      <div className="absolute bottom-3 right-3 gap-3 flex items-center">
        <button
          className="text-darkBlue border px-3 py-1 border-blueGray100 rounded-md body_medium"
          onClick={() => {
            handleClearFilter();
            hideDialog();
          }}
        >
          {enableFilterBtn ? "Reset to Default" : "Close"}
        </button>
        <button
          className={`text-white px-3 py-1 bg-darkBlue rounded-md body_medium ${
            enableFilterBtn
              ? "opacity-100 cursor-pointer"
              : "opacity-50 cursor-not-allowed"
          }`}
          onClick={() => {
            handleApplyFilter();
            hideDialog();
          }}
          disabled={!enableFilterBtn}
        >
          Apply
        </button>
      </div>
    </div>
  );
};
