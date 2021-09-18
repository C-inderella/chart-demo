import Vue from "vue";
import VueRouter from "vue-router";
// import Home from "../views/Home.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "list",
    meta: {
      title: "首页",
    },
    component: () => import("@/views/list"),
    // children: [
    //   {
    //     path: "/",
    //     name: "list",
    //     meta: {
    //       title: "列表",
    //     },
    //     component: () => import("@/views/list"),
    //   },
    // ],
  },
  {
    path: "/bar/:storeId",
    name: "bar",
    meta: {
      title: "柱状图",
    },
    component: () => import("@/views/bar"),
  },
  {
    path: "/line",
    name: "line",
    meta: {
      title: "折线图",
    },
    component: () => import("@/views/line"),
  },
];

const router = new VueRouter({
  routes,
});

export default router;
