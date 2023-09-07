<template>
  <div class="about">
    <h2>关于</h2>
    <div class="tags">
      <template v-for="item of profile.tags" :key="item">
        <tag :text="item" />
      </template>
    </div>
    <div class="description">
      <div class="head">
        <div class="logo" :style="getAvatar()"></div>
        <div class="profiles">
          <div class="name">ID: {{ profile.name }}</div>
          <div class="slogan">{{ profile.slogan }}</div>
        </div>
      </div>
      <div class="body" v-html="profile.description"></div>
      <div class="footer">e-mail: {{ profile.email }}</div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useSiteConfigStore } from "@/store/site-config";
import { onMounted } from "vue";

// 组件
import tag from "@/components/tag.vue";

// 获取个人信息
const profile = useSiteConfigStore().$state.profile;

// 头像设置
const getAvatar = () => {
  return { backgroundImage: `url(${profile.avatar})` };
};

onMounted(() => {});
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
    width: 128px;
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
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
