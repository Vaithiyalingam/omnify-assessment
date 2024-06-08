import { useState } from "react";
import { initialServiceArr, initialStatusArr, tableData } from "../constants";
import { ServiceType } from "../constants/types";
import { useAtom } from "jotai";
import {
  selectedServiceTypeAtom,
  selectedServicesAtom,
  selectedServicesFilterAtom,
  selectedStatusTypeAtom,
} from "./atoms";

export const useServices = () => {
  const [selectedServicesAt, setSelectedServicesAt] =
    useAtom(selectedServicesAtom);
  const [selectedServicesFilter, setSelectedServiceFilter] =
    useState("service");
  const [selectedServiceTypeAt, setSelectedServiceTypeAt] = useAtom(
    selectedServiceTypeAtom
  );
  const [selectedStatusTypeAt, setSelectedStatusTypeAt] = useAtom(
    selectedStatusTypeAtom
  );

  const [selectedStatusType, setSelectedStatusType] = useState(
    initialStatusArr[0]
  );
  const [selectedServiceType, setSelectedServiceType] = useState(
    initialServiceArr[0]
  );
  const [selectedServices, setSelectedServices] = useState<any[]>([]);
  const [statusArr, setStatusArr] = useState<ServiceType[]>(initialStatusArr);
  const [serviceOpen, setServiceOpen] = useState(false);
  const [statusOpen, setStatusOpen] = useState(false);
  const [serviceArr, setServiceArr] =
    useState<ServiceType[]>(initialServiceArr);
  const [searchValue, setSearchValue] = useState("");

  const handleServiceTypeClick = (select: ServiceType) => {
    setServiceArr((prevDates) =>
      prevDates.map((service) =>
        service.id === select.id
          ? { ...service, selected: true }
          : { ...service, selected: false }
      )
    );

    const selectedService = serviceArr.find((ser) => ser.id === select.id);
    if (selectedService) {
      setSelectedServiceType(selectedService);
      setSelectedServiceTypeAt(selectedService);
    }
    setServiceOpen(false);
  };

  const handleStatusTypeClick = (select: ServiceType) => {
    setStatusArr((status) =>
      status.map((st) =>
        st.id === select.id
          ? { ...st, selected: true }
          : { ...st, selected: false }
      )
    );

    const selectedStatus = statusArr.find((stat) => stat.id === select.id);
    if (selectedStatus) {
      setSelectedStatusType(selectedStatus);
      setSelectedStatusTypeAt(selectedStatus);
    }
    setStatusOpen(false);
  };

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchValue(event.target.value);
  };

  const handleSelectService = (item: any) => {
    const itemIndex = selectedServices.findIndex(
      (selectedItem) => selectedItem.id === item.id
    );

    if (itemIndex !== -1) {
      const updatedSelectedItems = [...selectedServices];
      updatedSelectedItems.splice(itemIndex, 1);
      setSelectedServices(updatedSelectedItems);
      setSelectedServicesAt(updatedSelectedItems);
    } else {
      setSelectedServices([item, ...selectedServices]);
      setSelectedServicesAt([item, ...selectedServices]);
    }
  };

  const isServiceSelected = (item: any) => {
    return selectedServices.some((selectedItem) => selectedItem.id === item.id);
  };

  const filteredData = tableData
    .filter((item) =>
      item.service.toLowerCase().includes(searchValue.toLowerCase())
    )
    .sort((a, b) => a.payer.localeCompare(b.payer));

  // Filter out duplicate services
  const uniqueFilteredData = Array.from(
    new Set(filteredData.map((item) => item.service))
  ).map((service) => filteredData.find((item) => item.service === service));

  const clearSearch = () => {
    setSearchValue("");
  };

  const clearServices = () => {
    setSelectedServices([]);
    setSelectedServicesAt([]);
    setSelectedServiceType(initialServiceArr[0]);
    setSelectedServiceTypeAt({} as ServiceType);
    setSelectedStatusType(initialStatusArr[0]);
    setSelectedStatusTypeAt({} as ServiceType);
    setSelectedServiceFilter("service");
  };

  return {
    uniqueFilteredData,
    isServiceSelected,
    handleSelectService,
    handleStatusTypeClick,
    handleInputChange,
    handleServiceTypeClick,
    selectedServiceType,
    selectedStatusType,
    serviceOpen,
    statusOpen,
    setSelectedServiceFilter,
    selectedServicesFilter,
    searchValue,
    clearSearch,
    selectedServices,
    setStatusOpen,
    setServiceOpen,
    serviceArr,
    statusArr,
    clearServices,
    selectedServicesAt,
    selectedServiceTypeAt,
    selectedStatusTypeAt,
  };
};
