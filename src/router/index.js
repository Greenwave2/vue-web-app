import { createRouter, createWebHistory } from "vue-router"
import store from '../store'
import { getAuth, onAuthStateChanged } from "firebase/auth"

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
        path: "/system/profile",
        component: () => import("../layouts/Profile.vue")
      },
      {
        path: "/system/dashboard", 
        component: () => import("../layouts/Dashboard.vue"),
        children: [
          {
            path: "",
            redirect: "/system/dashboard/table",
          },
          {
              path: "/system/dashboard/table",
              component: () => import("../layouts/DashboardTable.vue")
          }
        ]
      }
    ]
  },
  {
    path: "/test_axios_option",
    component: () => import("../views/Test_axios_option.vue")
  },
  {
    path: "/test_axios_composition",
    component: () => import("../views/Test_axios_comp.vue")
  },
  {
    path: "*", 
    component: () => import("../views/404.vue")
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes: routes
})

router.beforeEach(async (to, from, next) => {
  const auth = getAuth()
  const getCurrentUser = () => {
    return new Promise((resolve, reject) => {
        const unsubscribe = onAuthStateChanged(auth, user => {
            store.dispatch("setUser", user)
            unsubscribe();
            resolve(user);
        }, reject);
    })
  }
  const user = await getCurrentUser()

  const requiresAuth = to.matched.some(record => record.meta.requiresAuth)
  const requiresGuest = to.matched.some(record => record.meta.requiresGuest)

  if (requiresAuth && user == null) { // 判斷該路徑是否需要登入
    console.log("[beforeEach] already logged out")
    next("/")
  } else if(requiresGuest && user != null ) { // 判斷該路徑是否需要登出
    console.log("[beforeEach] already logged in")
    next("/system")
  } else {
    console.log("[beforeEach] other")
    next()
  }
});

export default router;
