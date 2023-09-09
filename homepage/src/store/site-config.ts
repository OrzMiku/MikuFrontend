import site from "@/../site.config";
import { defineStore } from "pinia";

// navs处理

const defaultNavs = [
  {
    text: "关于",
    path: "/home",
  },
];

if (site.links.length !== 0) {
  defaultNavs.push({
    text: "友情链接",
    path: "/links",
  });
}

if (site.setu === true) {
  defaultNavs.push({
    text: "瑟图",
    path: "/setu",
  });
}

site.navs = [...defaultNavs, ...site.navs];

console.log(site.navs);

export const useSiteConfigStore = defineStore("siteconfig", {
  state: () => {
    return { ...site };
  },
});
