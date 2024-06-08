import { TNextImage } from "../utils/icons";

export interface ISidebarList {
  name: string;
  icons: TNextImage;
}

export interface ISidebarComponentsProps {
  isSidebarOpen: boolean;
}

export interface DateType {
  name: string;
  id: string;
  selected: boolean;
  minDate?: Date;
  maxDate?: Date;
}

export interface ServiceType {
  name: string;
  id: string;
  selected: boolean;
}
