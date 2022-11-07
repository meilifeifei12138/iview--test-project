import Vue from "vue";

import RoutesInf from "@/utils/RoutesInf";

import VueRouter from "vue-router";
import HomeLayout from "@/layout/HomeLayout";
import HomeView from "@/views/InitialTbaleView";
import SignUpPage from "@/pages/SignUp";
import LoginPage from "@/pages/Login";
import FrontPage from "@/pages/FrontPage";
import SubscriptionPage from "@/pages/Subscription";
import ProjectDetailsPage from "@/pages/ProjectDetails";
import MessageCenterPage from "@/pages/MessageCenter";
import ServeCenterPage from "@/pages/ServeCenter";
import ForgotPasswordPage from "@/pages/ForgotPassword";
import NotFound from "@/pages/404";

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
    path: RoutesInf.projectDetailsPage.path,
    name: RoutesInf.projectDetailsPage.name,
    component: ProjectDetailsPage,
  },
  //订阅页
  {
    name: RoutesInf.subscriptionPage.name,
    path: RoutesInf.subscriptionPage.path,
    component: SubscriptionPage,
  },
  //服务页
  {
    name: RoutesInf.serveCenter.name,
    path: RoutesInf.serveCenter.path,
    component: ServeCenterPage,
  },
  {
    name: RoutesInf.messageCenter.name,
    path: RoutesInf.messageCenter.path,
    component: MessageCenterPage,
  },
  {
    path: "*",
    name: "notfound",
    component: NotFound,
  },
];

const router = new VueRouter({
  routes,
});

export default router;
