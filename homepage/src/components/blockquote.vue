<template>
  <div class="blockquote">
    <slot></slot>
  </div>
</template>

<script setup lang="ts"></script>

<style lang="less" scoped>
.blockquote {
  background-color: var(--blockquote-color);
  margin: 10px 0;
  border-left: 5px solid var(--blockquote-border-color);
  padding: 10px;
  transition: 0.2s;
}

.blockquote:hover {
  background-color: var(--blockquote-hover-color);
}
</style>
