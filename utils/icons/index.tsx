import columnsIcon from "../../public/assets/columns_icon.svg";
import frontdeskLogo from "../../public/assets/frontdesk_logo.svg";
import arrowLeftRight from "../../public/assets/arrow_left_right.svg";
import chevronDown from "../../public/assets/chevron_down.svg";
import globe from "../../public/assets/globe.svg";
import waitlist from "../../public/assets/waitlist.svg";
import calendar from "../../public/assets/calendar.svg";
import subscriptions from "../../public/assets/subscriptions.svg";
import orders from "../../public/assets/orders.svg";
import dashboard from "../../public/assets/dashboard.svg";
import help from "../../public/assets/help.svg";
import adminAvatar from "../../public/assets/admin_avatar.png";
import link from "../../public/assets/link.svg";
import download from "../../public/assets/download.svg";
import columnsOutlined from "../../public/assets/columns_outlined.svg";
import search from "../../public/assets/search.svg";
import filter from "../../public/assets/filter.svg";
import refresh from "../../public/assets/refresh.svg";
import calendarOutlined from "../../public/assets/calendar_outlined.svg";
import user from "../../public/assets/user.svg";
import circleDot from "../../public/assets/circle_dot.svg";
import chevronUpDown from "../../public/assets/chevron_up_down.svg";
import chevronLeft from "../../public/assets/chevron_left.svg";
import chevronRight from "../../public/assets/chevron_right.svg";
import people from "../../public/assets/people.svg";
import check from "../../public/assets/check.svg";
import chevronLeftBlack from "../../public/assets/chevron_left_black.svg";
import chevronRightBlack from "../../public/assets/chevron_right_black.svg";
import xCircle from "../../public/assets/x_circle.svg";
import close from "../../public/assets/close.svg";

export type TImages =
  | "columnsIcon"
  | "frontdeskLogo"
  | "arrowLeftRight"
  | "chevronDown"
  | "globe"
  | "waitlist"
  | "calendar"
  | "subscriptions"
  | "orders"
  | "dashboard"
  | "help"
  | "adminAvatar"
  | "link"
  | "download"
  | "columnsOutlined"
  | "search"
  | "filter"
  | "refresh"
  | "calendarOutlined"
  | "circleDot"
  | "user"
  | "chevronUpDown"
  | "chevronLeft"
  | "chevronRight"
  | "people"
  | "check"
  | "chevronLeftBlack"
  | "chevronRightBlack"
  | "xCircle"
  | "close";

export type TNextImage = {
  src: string;
  height: number;
  width: number;
};

export const icons: Record<TImages, TNextImage> = {
  columnsIcon,
  frontdeskLogo,
  arrowLeftRight,
  chevronDown,
  globe,
  waitlist,
  calendar,
  subscriptions,
  orders,
  dashboard,
  help,
  adminAvatar,
  link,
  download,
  columnsOutlined,
  search,
  filter,
  refresh,
  calendarOutlined,
  circleDot,
  user,
  chevronUpDown,
  chevronLeft,
  chevronRight,
  people,
  check,
  chevronLeftBlack,
  chevronRightBlack,
  xCircle,
  close,
};
