<template>
  <div class="link-card" @click="goto">
    <div class="header">
      {{ title }}
    </div>
    <div class="body">
      {{ description }}
    </div>
  </div>
</template>

<script setup lang="ts">
const props = defineProps({
  title: {
    type: String,
    default: "",
  },
  description: {
    type: String,
    default: "",
  },
  url: {
    type: String,
    default: "",
  },
});

const goto = () => {
  window.open(props.url, "_blank");
};
</script>

<style scoped>
.link-card {
  background-color: var(--card-bg-color);
  border: 3px solid var(--card-border-color);
  padding: 20px;
  margin: 10px 0;
  cursor: pointer;
  user-select: none;
  -webkit-user-select: none;
  -moz-user-select: none;
  transition: 0.2s;
  & > .header {
    font-size: 28px;
    margin-bottom: 6px;
  }

  & > .body {
    color: var(--card-text-color);
  }
}
.link-card:hover,
.link-card:focus {
  background-color: var(--card-hover-bg-color);
  color: var(--card-hover-text-color);
  .body {
    color: var(--card-hover-text-color);
  }
}
</style>
