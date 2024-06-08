import { atom } from "jotai";
import { atomWithStorage, createJSONStorage } from "jotai/utils";
import { DateType, ServiceType } from "../constants/types";
import { coloumns, initialDatesArr } from "../constants";

const storage:any = createJSONStorage(() => localStorage);

const sidebarOpenAtom = atomWithStorage<boolean>("sidebarOpen", false,storage);
const selectedStartDateAtom = atom<any>("");
const selectedEndDateAtom = atom<any>("");
const selectedDateTypeAtom = atom<DateType>(initialDatesArr[0]);
const selectedPeoplesAtom = atom<any[]>([]);
const selectedServicesAtom = atom<any []>([]);
const selectedServicesFilterAtom = atom<string>("service");
const selectedServiceTypeAtom = atom<ServiceType>({} as ServiceType);
const selectedStatusTypeAtom = atom<ServiceType>({} as ServiceType);
const filtersArrAtom = atom<string[]>([]);
const columnListAtom = atom<any[]>(coloumns);

export {
    sidebarOpenAtom,
    selectedStartDateAtom,
    selectedEndDateAtom,
    selectedDateTypeAtom,
    selectedPeoplesAtom,
    selectedServicesAtom,
    selectedServicesFilterAtom,
    selectedServiceTypeAtom,
    selectedStatusTypeAtom,
    filtersArrAtom,
    columnListAtom
}