import Vue from "vue";

import RoutesInf from "@/utils/RoutesInf";

import VueRouter from "vue-router";
import HomeLayout from "@/components/HomeLayout";
import HomeView from "@/views/HomeView";
import SignUpPage from "@/pages/SignUp";
import LoginPage from "@/pages/Login";
import ForgotPassword from "@/pages/ForgotPassword";

Vue.use(VueRouter);

const routes = [
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
];

const router = new VueRouter({
  routes,
});

export default router;
