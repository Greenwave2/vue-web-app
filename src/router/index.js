import { createRouter, createWebHistory } from "vue-router";

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: "/home",
      component: () => import("../views/Home.vue"),
    },
    {
      path: "/login",
      component: () => import("../views/Login.vue"),
    },
    {
      path: "/test_axios_option",
      component: () => import("../views/Test_axios_option.vue")
    },
    {
      path: "/test_axios_composition",
      component: () => import("../views/Test_axios_comp.vue")
    }
    // {
    //   path: "/register",
    //   component: () => import("../views/Register.vue"),
    // },
    // {
    //   path: "/sign-in",
    //   component: () => import("../views/SignIn.vue"),
    // },
    // {
    //   path: "/feed",
    //   component: () => import("../views/Feed.vue"),
    // },
  ],
});

export default router;

