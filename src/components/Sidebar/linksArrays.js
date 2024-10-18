import {
  IconHome,
  IconClipboardList,
  IconMail,
  IconMessageCircleQuestion,
  IconCash,
  IconUsersGroup,
  IconAdCircle,
  IconMoneybag,
  IconChartHistogram,
} from "@tabler/icons-react";
import {LiaCertificateSolid} from "react-icons/lia";
import {LuGraduationCap} from "react-icons/lu";
import {BsPostcard} from "react-icons/bs";

export const productMonitoringLinks = [
  {icon: IconHome, name: "Dashboard", url: "/seller"},
  {icon: BsPostcard, name: "Posts", url: "/seller/post-manager"},
  {icon: IconClipboardList, name: "Orders", url: "/seller/order?name=All&state="},
  {icon: IconMail, name: "Inbox", url: "/seller/order/inbox"},
  {icon: IconMessageCircleQuestion, name: "Questions", url: "/seller/questions"},
  {icon: IconCash, name: "Billing", url: null},
];

export const sellerGrowthLinks = [
  {icon: LiaCertificateSolid, name: "Memberships", url: "/memberships"},
  {icon: IconAdCircle, name: "ServiAds", url: null},
  {icon: LuGraduationCap, name: "ServiLearn", url: "/learn"},
  {icon: IconUsersGroup, name: "Recommendations", url: "/suggestions"},
];

export const analyticsLinks = [
  {icon: IconMoneybag, name: "Earnings Overview", url: null},
  {icon: IconChartHistogram, name: "Performance Metrics", url: null},
];
