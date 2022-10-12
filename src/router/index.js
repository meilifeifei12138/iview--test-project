import Vue from "vue";

import RoutesInf from "@/utils/RoutesInf";

import VueRouter from "vue-router";
import HomeLayout from "@/components/HomeLayout";
import HomeView from "@/views/HomeView";
import LoginPage from "@/pages/login";

Vue.use(VueRouter);

const routes = [
  {
    path: "/login",
    name: RoutesInf.loginPage.name,
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
