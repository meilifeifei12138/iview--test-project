import Vue from "vue";

import RoutesInf from "@/utils/RoutesInf";

import VueRouter from "vue-router";
import HomeLayout from "@/layout/HomeLayout";
import HomeView from "@/views/InitialTbaleView";
import SignUpPage from "@/pages/SignUp";
import LoginPage from "@/pages/Login";
import FrontPage from "@/pages/FrontPage";
import ProjectDetailsPage from "@/pages/ProjectDetails";
import ForgotPassword from "@/pages/ForgotPassword";
import NotFound from "@/pages/404";

Vue.use(VueRouter);

const routes = [
  {
    path: RoutesInf.frontPage.path,
    name: RoutesInf.frontPage.name,
    component: FrontPage,
  },
  {
    path: RoutesInf.signUpPage.path,
    name: RoutesInf.signUpPage.name,
    component: SignUpPage,
  },
  {
    path: RoutesInf.loginPage.path,
    name: RoutesInf.loginPage.name,
    component: LoginPage,
  },
  {
    path: RoutesInf.forgotPasswordPage.path,
    name: RoutesInf.forgotPasswordPage.name,
    component: ForgotPassword,
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
  {
    path: RoutesInf.projectDetailsPage.path,
    name: RoutesInf.projectDetailsPage.name,
    component: ProjectDetailsPage,
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
