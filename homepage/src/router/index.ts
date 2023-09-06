import { createWebHashHistory, createRouter } from "vue-router";

export default createRouter({
  history: createWebHashHistory(),
  routes: [
    {
      path: "/",
      redirect: "/home",
    },
    {
      path: "/home",
      component: () => import("@/views/home-view/index.vue"),
    },
  ],
});
