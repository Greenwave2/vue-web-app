import { createRouter, createWebHistory } from "vue-router";
import { auth } from "../firebase";

const routes = [
  {
    path: "/",
    component: () => import("../views/Home.vue"),
  },
  {
    path: "/sign-in",
    component: () => import("../views/Login.vue"),
    meta: {
      requiresGuest: true,
    }
  },
  {
    path: "/register",
    component: () => import("../views/Register.vue"),
    meta: {
      requiresGuest: true,
    }
  },
  {
    path: "/system",
    component: () => import("../views/System.vue"),
    meta: {
      requiresAuth: true,
    }
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes: routes
});

router.beforeEach((to, from, next) => {
  if (to.matched.some(record => record.meta.requiresAuth) && auth.currentUser == null) { // 判斷該路徑是否需要登入
    next({
      path: "/sign-in",
      query: { redirect: to.fullPath }
    })
  } else if(to.matched.some(record => record.meta.requiresGuest) && auth.currentUser != null ) { // 判斷該路徑是否需要登出
    next({
      path: "/",
      query: { redirect: to.fullPath }
    })
  } else {
    next();
  }
}
);

export default router;

