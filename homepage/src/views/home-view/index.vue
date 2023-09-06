<template>
  <div class="about">
    <h2>关于</h2>
    <div class="tags">
      <template v-for="item of profile.tags()" :key="item">
        <tag :text="item" />
      </template>
    </div>
    <div class="description">
      <div class="head">
        <div class="logo"></div>
        <div class="profiles">
          <div class="name">ID: {{ profile.name }}</div>
          <div class="slogan">{{ profile.slogan }}</div>
        </div>
      </div>
      <div class="body">
        <p>在校大学生，校园蛀虫一只。</p>
        <p>懒狗且菜比。</p>
        <p>学习计算机，但是弱鸡。</p>
        <p>代码，游戏，动漫，人生三大美事。</p>
        <p>正在变成肥宅，渴望周游世界，吃遍美食。</p>
      </div>
      <div class="footer">e-mail: {{ profile.email }}</div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useSiteConfigStore } from "@/store/site-config";

// 组件
import tag from "@/components/tag.vue";

// 获取个人信息
const profile = useSiteConfigStore().$state.profile;
</script>

<style lang="less" scoped>
.head {
  display: flex;
  background: var(--main-bg-color);
  height: 128px;
  border-bottom: 3px solid var(--main-border-color);
  overflow: hidden;

  > .logo {
    flex: 0 0 auto;
    background: url(https://q1.qlogo.cn/g?b=qq&nk=2475539124&s=640) no-repeat;
    background-size: cover;
    width: 128px;
  }

  > .profiles {
    flex: 1;
    width: 128px;
    box-sizing: border-box;
    padding: 20px;
    color: var(--main-text-color);

    > .name {
      font-size: 28px;
      border-bottom: 3px solid var(--main-border-color);
      margin-bottom: 5px;
    }

    @media screen and (max-width: 512px) {
      .name {
        font-size: 23px;
        border-bottom: 3px solid var(--main-border-color);
        margin-bottom: 5px;
      }

      .slogan {
        font-size: small;
      }
    }
  }
}

.description {
  border: 3px solid var(--main-border-color);
  margin: 10px 0;
  transition: 0.2s;

  .body {
    padding: 20px;
  }

  p {
    margin-top: 10px;
  }

  .footer {
    text-align: center;
    background-color: var(--main-bg-color);
    color: var(--main-text-color);
    padding: 5px;
  }
}
</style>
