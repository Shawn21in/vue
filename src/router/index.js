import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import Home from "../views/Home.vue";

const routes = [
  {
    path: "/homeview",
    name: "home",
    component: HomeView,
  },
  {
    path: "/",
    name: "home1",
    component: Home,
    meta: {
      layout: "Layout",
    },
  },
  {
    path: "/act",
    name: "act",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import("../views/act.vue"),
    meta: {
      layout: "layout",
    },
  },
  {
    path: "/notice",
    name: "notice",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import("../views/notice.vue"),
    meta: {
      layout: "layout",
    },
  },
  {
    path: "/product",
    name: "product",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import("../views/product.vue"),
    meta: {
      layout: "layout",
    },
  },
  {
    path: "/member",
    name: "member",
    component: () => import("../views/Member.vue"),
  },
  {
    path: "/qa", //網址路徑
    name: "qa", //名稱vue可以用名稱來連結
    component: () => import("../views/Qa.vue"), //執行哪個網頁的意思
    meta: {
      layout: "layout",
    },
  },
  {
    path: "/prize", //網址路徑
    name: "prize", //名稱vue可以用名稱來連結
    component: () => import("../views/Prize.vue"), //執行哪個網頁的意思
    meta: {
      layout: "layout",
    },
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
