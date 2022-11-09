import RoutesInf from "@/utils/RoutesInf";
export default [
  {
    name: "去官网页",
    value: "frontpage",
    icon: "fa-solid fa-backward",
    path: RoutesInf.frontPage.path,
  },
  {
    name: "去登陆",
    value: "goToLogin",
    icon: "fa-solid fa-right-to-bracket",
    path: RoutesInf.loginPage.path,
  },
];
