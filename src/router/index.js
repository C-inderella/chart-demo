import Vue from "vue";
import VueRouter from "vue-router";
// import Home from "../views/Home.vue";

Vue.use(VueRouter);

const routes = [
  // {
  //   path: "/",
  //   name: "Home",
  //   component: Home,
  // },
  // {
  //   path: "/about",
  //   name: "About",
  //   // route level code-splitting
  //   // this generates a separate chunk (about.[hash].js) for this route
  //   // which is lazy-loaded when the route is visited.
  //   component: () =>
  //     import(/* webpackChunkName: "about" */ "../views/About.vue"),
  // },
  {
    path: "/",
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
