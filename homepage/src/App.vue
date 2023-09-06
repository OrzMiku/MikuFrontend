<template>
  <template v-if="site.miku"><miku /></template>

  <div class="app">
    <h1 class="title">EcyPink</h1>
    <nav-component />
    <bq><hitokoto /></bq>
    <router-view> </router-view>
    <footer-component></footer-component>
  </div>
</template>

<script setup lang="ts">
import { onMounted } from "vue";
import { useSiteConfigStore } from "@/store/site-config";
import { RouterView } from "vue-router";

// 组件
import miku from "@/components/miku.vue";
import bq from "@/components/blockquote.vue";
import hitokoto from "@/components/hitokoto.vue";
import NavComponent from "@/components/nav.vue";
import FooterComponent from "@/components/footer.vue";

// 获取网站配置
const site = useSiteConfigStore().$state;

// onMounted
onMounted(() => {
  // 控制台输出
  const title = site.title;
  const description = site.description;

  const style = `
    display: block;
    margin-top: 80px;
    margin-bottom: 80px;
    background-color: rgba(57, 197, 187, 0.2);
    border-radius: 5px;
    padding: 20px;
    color: #39c5bb;
    font-size: 30px;
`;

  console.log(`%c${title} - ${description}`, style);
});
</script>

<style lang="less" scoped>
.app {
  max-width: 720px;
  padding: 20px;
  margin: auto;
  .title {
    font-size: 2em;
    margin: 0.67em 0;
  }
}
</style>
