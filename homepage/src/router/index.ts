import { createWebHashHistory, createRouter } from "vue-router";
import pinia from "@/store";
import { useSiteConfigStore } from "@/store/site-config";

const site = useSiteConfigStore(pinia).$state;

const router = createRouter({
  history: createWebHashHistory(),
  routes: [
    {
      path: "/",
      redirect: "/home",
    },
    {
      path: "/home",
      name: "home",
      component: () => import("@/views/home-view/index.vue"),
      meta: {
        title: "关于",
        description: site["description"],
      },
    },
    {
      path: "/links",
      name: "links",
      component: () => import("@/views/links-view/index.vue"),
      meta: {
        title: "友情链接",
        description: `${site["title"]} - 友情链接`,
        keywords: "友情链接",
      },
    },
    {
      path: "/setu",
      name: "setu",
      component: () => import("@/views/setu-view/index.vue"),
      meta: {
        title: "涩图",
        description: `${site["title"]} - 瑟瑟达咩！`,
        keywords: "涩图",
      },
    },
  ],
});

// 信息动态切换
router.beforeEach((to, from, next) => {
  // 标题切换
  document.title = to.meta.title
    ? site["title"] + " - " + to.meta.title
    : site["title"];

  // 描述切换
  document
    .querySelector('meta[name="description"]')!
    .setAttribute(
      "content",
      to.meta.description ? String(to.meta.description) : site["description"]
    );

  // 关键字切换
  document
    .querySelector('meta[name="keywords"]')!
    .setAttribute(
      "content",
      to.meta.keywords
        ? site["keywords"] + "," + to.meta.keywords
        : site["keywords"]
    );

  // 图标切换
  document.querySelector('link[rel="icon"]')?.setAttribute("href", site.icon);
  next();
});

export default router;
