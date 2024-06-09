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
  // Atoms for selected services, service type, status type, and filters
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

  // Local state to manage selected service type, status type, services, status array, modal states, service array, and search value
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

  // Handle click on service type option
  const handleServiceTypeClick = (select: ServiceType) => {
    // Update service array to mark the selected service type
    setServiceArr((prevDates) =>
      prevDates.map((service) =>
        service.id === select.id
          ? { ...service, selected: true }
          : { ...service, selected: false }
      )
    );

    // Set the selected service type
    const selectedService = serviceArr.find((ser) => ser.id === select.id);
    if (selectedService) {
      setSelectedServiceType(selectedService);
      setSelectedServiceTypeAt(selectedService);
    }
    setServiceOpen(false);
  };

  // Handle click on status type option
  const handleStatusTypeClick = (select: ServiceType) => {
    // Update status array to mark the selected status type
    setStatusArr((status) =>
      status.map((st) =>
        st.id === select.id
          ? { ...st, selected: true }
          : { ...st, selected: false }
      )
    );

    // Set the selected status type
    const selectedStatus = statusArr.find((stat) => stat.id === select.id);
    if (selectedStatus) {
      setSelectedStatusType(selectedStatus);
      setSelectedStatusTypeAt(selectedStatus);
    }
    setStatusOpen(false);
  };

  // Handle input change in search box
  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchValue(event.target.value);
  };

  // Handle select or deselect service
  const handleSelectService = (item: any) => {
    const itemIndex = selectedServices.findIndex(
      (selectedItem) => selectedItem.id === item.id
    );

    if (itemIndex !== -1) {
      // Remove selected service
      const updatedSelectedItems = [...selectedServices];
      updatedSelectedItems.splice(itemIndex, 1);
      setSelectedServices(updatedSelectedItems);
      setSelectedServicesAt(updatedSelectedItems);
    } else {
      // Add selected service
      setSelectedServices([item, ...selectedServices]);
      setSelectedServicesAt([item, ...selectedServices]);
    }
  };

  // Check if a service is selected
  const isServiceSelected = (item: any) => {
    return selectedServices.some((selectedItem) => selectedItem.id === item.id);
  };

  // Filter table data based on search input
  const filteredData = tableData
    .filter((item) =>
      item.service.toLowerCase().includes(searchValue.toLowerCase())
    )
    .sort((a, b) => a.payer.localeCompare(b.payer));

  // Filter out duplicate services
  const uniqueFilteredData = Array.from(
    new Set(filteredData.map((item) => item.service))
  ).map((service) => filteredData.find((item) => item.service === service));

  // Clear search input
  const clearSearch = () => {
    setSearchValue("");
  };

  // Clear selected services, service type, status type, and service filter
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
