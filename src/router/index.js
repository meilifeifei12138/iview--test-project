import Vue from "vue";

import RoutesInf from "@/utils/RoutesInf";

import VueRouter from "vue-router";
import HomeLayout from "@/components/HomeLayout";
import HomeView from "@/views/HomeView";
import SignUpPage from "@/pages/SignUp";
import LoginPage from "@/pages/login";

Vue.use(VueRouter);

const routes = [
  {
    path: "/signup",
    name: RoutesInf.SignUpPage.name,
    component: SignUpPage,
  },
  {
    path: "/login",
    name: RoutesInf.LoginPage.name,
    component: LoginPage,
  },
  {
    path: "/",
    name: RoutesInf.homeLayout.name,
    redirect: "/home",
    component: HomeLayout,
    children: [
      {
        path: "/home",
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
