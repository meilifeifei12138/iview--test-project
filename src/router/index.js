import Vue from "vue";

import RoutesInf from "@/utils/RoutesInf";

const FrontPage = () => import("../pages/FrontPage");
const HomeLayout = () => import("@/layout/HomeLayout");
const HomeView = () => import("@/views/InitialTableView");
const SignUpPage = () => import("@/pages/SignUp");
const LoginPage = () => import("@/pages/Login");
const SubscribePage = () => import("@/pages/Subscribe");
const ProjectDetailsPage = () => import("@/pages/ProjectDetail");
const MessageCenterPage = () => import("@/pages/MessageCenter");
const ServeCenterPage = () => import("@/pages/ServeCenter");
const ForgotPasswordPage = () => import("@/pages/ForgotPassword");
const CheckinPage = () => import("@/pages/Checkin");
const Payment = () => import("@/pages/Payment");
const NotFound = () => import("@/pages/404");
import VueRouter from "vue-router";

Vue.use(VueRouter);

const routes = [
  //首页
  {
    path: RoutesInf.frontPage.path,
    name: RoutesInf.frontPage.name,
    component: FrontPage,
  },
  //注册页
  {
    path: RoutesInf.signUpPage.path,
    name: RoutesInf.signUpPage.name,
    component: SignUpPage,
  },
  //登陆页
  {
    path: RoutesInf.loginPage.path,
    name: RoutesInf.loginPage.name,
    component: LoginPage,
  },
  //忘记密码
  {
    path: RoutesInf.forgotPasswordPage.path,
    name: RoutesInf.forgotPasswordPage.name,
    component: ForgotPasswordPage,
  },
  {
    path: "/",
    name: RoutesInf.homeLayout.name,
    redirect: RoutesInf.homeLayout.path,
    component: HomeLayout,
    children: [
      {
        path: RoutesInf.homeView.path,
        name: RoutesInf.homeView.name,
        component: HomeView,
      },
    ],
  },
  //项目详情
  {
    path: RoutesInf.projectDetailPage.path,
    name: RoutesInf.projectDetailPage.name,
    component: ProjectDetailsPage,
  },
  //订阅页
  {
    name: RoutesInf.subscribePage.name,
    path: RoutesInf.subscribePage.path,
    component: SubscribePage,
  },
  //服务页
  {
    name: RoutesInf.serveCenter.name,
    path: RoutesInf.serveCenter.path,
    component: ServeCenterPage,
  },
  //信息中心
  {
    name: RoutesInf.messageCenter.name,
    path: RoutesInf.messageCenter.path,
    component: MessageCenterPage,
  },
  //签到页面
  {
    name: RoutesInf.checkinPage.name,
    path: RoutesInf.checkinPage.path,
    component: CheckinPage,
  },
  //支付页面
  {
    name: RoutesInf.paymentPage.name,
    path: RoutesInf.paymentPage.path,
    component: Payment,
  },
  {
    name: RoutesInf.notFound.name,
    path: RoutesInf.notFound.path,
    component: NotFound,
  },
];

const router = new VueRouter({
  routes,
});

export default router;
