export default {
  homeLayout: {
    path: "/home",
    name: "homeLayout",
    filePath: "@/layout/HomeLayout",
  },
  homeView: {
    path: "/home",
    name: "homeView",
    filePath: "@/views/InitialTableView",
  },
  frontPage: {
    path: "/front-page",
    name: "frontPage",
    filePath: "@/pages/FrontPage",
  },
  forgotPasswordPage: {
    path: "/forgot-password",
    name: "forgotPassword",
    filePath: "@/pages/ForgotPassword",
  },
  signUpPage: {
    path: "/signup",
    name: "signUpPage",
    filePath: "@/pages/SignUp",
  },
  loginPage: {
    path: "/login",
    name: "loginPage",
    filePath: "@/pages/Login",
  },
  projectDetailPage: {
    path: "/projects/detail/:id",
    name: "projectDetailPage",
    filePath: "@/pages/ProjectDetail",
  },
  subscribePage: {
    path: "/subscribe",
    name: "subscribePage",
    filePath: "@/pages/Subscribe",
  },
  serveCenter: {
    path: "/serve-center",
    name: "serveCenterPage",
    filePath: "@/pages/ServeCenter",
  },
  messageCenter: {
    path: "/message-center",
    name: "messageCenter",
    filePath: "@/pages/MessageCenter",
  },
  checkinPage: {
    path: "/checkin",
    name: "checkinPage",
    filePath: "@/pages/Checkin",
  },
  paymentPage: {
    path: "/payment/:priceDetails",
    name: "paymentPage",
    filePath: "@/pages/Payment",
  },
  notFound: {
    path: "*",
    name: "notfound",
    filePath: "@/pages/404",
  },
};
