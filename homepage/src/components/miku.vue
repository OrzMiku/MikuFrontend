<template>
  <div class="miku" ref="miku" @click="clickMiku"></div>
</template>

<script setup lang="ts">
import { ref } from "vue";

const miku = ref<HTMLDivElement>(null!);

function clickMiku() {
  miku.value.style.bottom = "-15vh";
  miku.value.style.right = "-20px";
  setTimeout(function () {
    miku.value.style.bottom = "0vh";
    miku.value.style.right = "20px";
  }, 500);
}
</script>

<style scoped>
.miku {
  position: fixed;
  bottom: 0;
  right: 20px;
  width: 20vh;
  height: 20vh;
  background: url(@/assets/images/miku.gif);
  background-size: 100%;
  z-index: 999;
  transition: all 0.5s;
}
.miku:hover {
  cursor: pointer;
}
</style>
