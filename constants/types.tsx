import { TNextImage } from "../utils/icons";

export interface ISidebarList {
  name: string;
  icons: TNextImage;
}

export interface ISidebarComponentsProps {
  isSidebarOpen: boolean;
}
