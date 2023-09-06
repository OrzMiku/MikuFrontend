<template>
  <div class="setu">
    <h2>色图</h2>
    <div class="img-box">
      <p class="tips">点击图片切换下一张</p>
      <template v-if="setu === ''">少女祈祷中...</template>
      <img @click="update" v-else :src="setu" />
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
import { getSetu, isR18 } from "@/utils/setu";
const setu = ref("");
const r18 = isR18();
console.log("R18: " + r18);
function update() {
  setu.value = "";
  getSetu(r18).then((res) => {
    setu.value = res.data.pics[0];
  });
}
update();
</script>

<style scoped lang="less">
.img-box {
  border: 3px solid var(--main-border-color);
  margin: 10px 0;
  cursor: pointer;
  user-select: none;
  -webkit-user-select: none;
  -moz-user-select: none;
  transition: var(--global-transition-time);
  & > .tips {
    text-align: center;
    background-color: var(--main-bg-color);
    color: var(--main-text-color);
    padding: 5px;
    margin: 0;
  }
}

img {
  width: 100%;
  display: block;
}
</style>
