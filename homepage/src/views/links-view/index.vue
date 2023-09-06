<template>
  <h2>友情链接</h2>
  <template v-for="item in links" :key="item">
    <linkcard
      :title="item.title"
      :description="item.description"
      :url="item.url"
    />
  </template>
</template>

<script setup lang="ts">
import { useSiteConfigStore } from "@/store/site-config";

// 组件
import linkcard from "@/components/linkcard.vue";

// 获取友链信息
const links = useSiteConfigStore().$state.links();
</script>

<style lang="less" scoped></style>
