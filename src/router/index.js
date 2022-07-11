import { createRouter, createWebHistory } from "vue-router"
import { getIdTokenPromise } from "../firebase"
import store from "../store";

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
    },
    children: [
      {
        path: "",
        redirect: "/system/dashboard",
      }, 
      {
        path: "/system/profile",
        component: () => import("../components/Profile.vue")
      },
      {
        path: "/system/dashboard", 
        component: () => import("../views/dashboard/DashboardFrame.vue"),
        children: [
          {
            path: "",
            redirect: "/system/dashboard/table",
          },
          {
              path: "/system/dashboard/table",
              component: () => import("../views/dashboard/DashboardTable.vue")
          },
          {
              path: "/system/dashboard/:gateway_id", 
              component: () => import("../views/dashboard/DashboardDetail.vue")
          }, 
        ]
      },
      {
        path: "/system/setting",
        component: () => import("../components/Setting.vue")
      },
      {
        path: ":catchAll(.*)", // 不認得的 path 自動回到 system 首頁
        redirect: '/system',
      },
    ]
  },
  {
    path: "/test_axios_option",
    component: () => import("../views/Test_axios_option.vue")
  },
  {
    path: "/test_axios_composition",
    component: () => import("../views/Test_axios_comp.vue")
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes: routes
})

router.beforeEach(async (to, from, next) => {
  const idToken = await getIdTokenPromise()

  store.dispatch('user/setIdToken', idToken)

  const requiresAuth = to.matched.some(record => record.meta.requiresAuth)
  const requiresGuest = to.matched.some(record => record.meta.requiresGuest)

  if (requiresAuth && idToken == null) { // 判斷該路徑是否需要登入
    console.log("[beforeEach] already logged out")
    next("/")
  } else if(requiresGuest && idToken != null ) { // 判斷該路徑是否需要登出
    console.log("[beforeEach] already logged in")
    next("/system")
  } else {
    console.log("[beforeEach] other")
    next()
  }
});

export default router;
