<template>
  <div class="tag">
    {{ text }}
  </div>
</template>

<script setup lang="ts">
// eslint-disable-next-line @typescript-eslint/no-unused-vars
const props = defineProps({
  text: {
    type: String,
    default: "",
  },
});
</script>

<style lang="less" scoped>
.tag {
  display: inline-block;
  box-shadow: var(--btn-box-shadow);
  color: var(--btn-text-color);
  padding: var(--btn-default-padding);
  margin: var(--btn-default-margin);
  transition: var(--global-transition-time);
  border: var(--btn-default-border);
  &:hover {
    background: var(--btn-hover-bg-color);
    color: var(--btn-hover-text-color);
  }
}
</style>
