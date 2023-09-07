<template>
  <nav class="nav">
    <template v-for="item in navs" :key="item">
      <template v-if="item.path">
        <router-link :to="item.path" class="nav-item">
          {{ item.text }}</router-link
        >
      </template>
      <template v-else-if="item.url">
        <a class="nav-item extra-links" :href="item.url"> {{ item.text }}</a>
      </template>
    </template>
  </nav>
</template>

<script setup lang="ts">
import { RouterLink } from "vue-router";
import { useSiteConfigStore } from "@/store/site-config";

// 获取nav-item
const navs = useSiteConfigStore().$state.navs;
</script>

<style>
.nav {
  margin: 10px 0;
}

.nav-item {
  display: inline-block;
  flex: 2;
  padding: 0 5px;
  margin: 0 2px;
  font-weight: bold;
  cursor: pointer;
  transition: var(--global-transition-time);
  color: var(--nav-text-color);

  &:hover {
    background-color: var(--nav-hover-bg-color);
    box-shadow: 1px 1px 1px var(--nav-hover-bg-color);
  }
}

.router-link-active {
  border-bottom: 2px solid var(--nav-border-color);
}

.extra-links::before {
  content: "➥";
  color: var(--nav-text-color);
  font-size: 10px;
}
</style>
