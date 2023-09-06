<template>
  <div class="App">
    <RouterView></RouterView>
  </div>
</template>

<script setup lang="ts">
import { RouterView } from "vue-router";
import mikureq from "mikureq";

const baseurl = "https://v1.hitokoto.cn/";
const req = new mikureq(baseurl);

interface hitokotoResponse {
  id: number;
  hitokoto: string;
  type: string;
  from: string;
  from_who: string;
  creator: string;
  creator_uid: number;
  reviewer: number;
  commit_from: string;
  created_at: string;
  length: number;
}

req.get<hitokotoResponse>().then((res) => {
  console.log(res.data.hitokoto);
});
</script>

<style lang="less" scoped></style>
