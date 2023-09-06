<template>
  <div class="footer">
    <template v-if="hasText">{{ foot }}</template>
    <template v-else>配置错误</template>
    <template v-if="hasIcp"> | {{ icp }}</template>
  </div>
</template>

<script setup lang="ts">
import { computed } from "vue";
import { useSiteConfigStore } from "@/store/site-config";

// 获取页脚信息
const site = useSiteConfigStore().$state;
const foot = site.foot;
const icp = site.icp;

const hasText = computed(() => {
  return foot === "" ? false : true;
});
const hasIcp = computed(() => {
  return icp === "" ? false : true;
});
</script>

<style scoped lang="less">
.footer {
  text-align: center;
  color: var(--theme-bg-color);
  font-weight: bolder;
}
</style>
