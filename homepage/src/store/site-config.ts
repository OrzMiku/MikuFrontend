import site from "@/../site.config";
import { defineStore } from "pinia";

export const useSiteConfigStore = defineStore("siteconfig", {
  state: () => {
    return { ...site };
  },
});
