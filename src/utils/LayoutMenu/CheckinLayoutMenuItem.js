import RoutesInf from "@/utils/RoutesInf";
export default [
  {
    name: "去官网页",
    value: "frontPage",
    icon: "fa-solid fa-backward",
    path: RoutesInf.frontPage.path,
  },
  {
    name: "首页",
    value: "home",
    icon: "fa-solid fa-home",
    path: RoutesInf.homeLayout.path,
  },
  {
    name: "订阅",
    value: "upgrade",
    icon: "fa-solid fa-bell",
    path: RoutesInf.subscribePage.path,
  },
];
