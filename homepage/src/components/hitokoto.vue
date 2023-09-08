<template>
  {{ msg }}
</template>
<script setup lang="ts">
import { ref } from "vue";
import getHitokoto from "@miku-utils/hitokoto";
const params = {
  c: "d",
};
const msg = ref("一言获取中...");
getHitokoto(params).then((res) => {
  msg.value = res.data.hitokoto;
});
</script>
