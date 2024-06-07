import Image from "next/image";
import { icons } from "../../utils/icons";
import { useState } from "react";
import { ScheduledDate } from "./ScheduledDate";
import { People } from "./People";

export const Filter = () => {
  enum FILTERS_ENUM {
    SCHEDULED_DATE = "SCHEDULED_DATE",
    PEOPLE = "PEOPLE",
    SERVICES = "SERVICES",
  }
  const [selectedFilter, setSelectedFilter] = useState(
    FILTERS_ENUM.SCHEDULED_DATE
  );

  const handleSelectFilter = (filter: FILTERS_ENUM) => {
    setSelectedFilter(FILTERS_ENUM[filter]);
  };

  const renderFilterComponent = () => {
    switch (selectedFilter) {
      case FILTERS_ENUM.SCHEDULED_DATE:
        return <ScheduledDate />;
      case FILTERS_ENUM.PEOPLE:
        return <People />;
      case FILTERS_ENUM.SERVICES:
        return <ScheduledDate />;
      default:
        return null;
    }
  };

  return (
    <div className="w-[50vw] h-[50vh] grid grid-cols-8">
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
          <Image src={icons.calendarOutlined} alt="calendarOutlined" />
          <p className="subtle_medium text-blueGray">Scheduled Date</p>
        </div>
        <div
          className={`flex items-center gap-2 py-2 px-2 ${
            selectedFilter === FILTERS_ENUM.PEOPLE ? "bg-blueGray100" : ""
          } rounded-md cursor-pointer`}
          onClick={() => handleSelectFilter(FILTERS_ENUM.PEOPLE)}
          role="presentation"
        >
          <Image src={icons.people} alt="people" />
          <p className="subtle_medium text-blueGray">People</p>
        </div>
        <div
          className={`flex items-center gap-2 py-2 px-2 ${
            selectedFilter === FILTERS_ENUM.SERVICES ? "bg-blueGray100" : ""
          } rounded-md cursor-pointer`}
          onClick={() => handleSelectFilter(FILTERS_ENUM.SERVICES)}
          role="presentation"
        >
          <Image src={icons.dashboard} alt="dashboard" />
          <p className="subtle_medium text-blueGray">Services / Products</p>
        </div>
      </div>
      <div className="col-span-5 w-full">{renderFilterComponent()}</div>
    </div>
  );
};
