import { createRouter, createWebHistory } from "vue-router";

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: "/",
      component: () => import("../views/Home.vue"),
    },
    {
      path: "/login",
      component: () => import("../views/Login.vue"),
    },
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

