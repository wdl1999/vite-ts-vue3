<script setup lang="ts"></script>

<template>
  <div>
    <div class="test red-border">测试$bgColor导入并使用</div>
  </div>
  <router-view> </router-view>
</template>

<style scoped lang="scss">
@import "@/styles/variable.scss";

.test {
  color: $bgColor;
}

.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
  transition: filter 300ms;
}

.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}

.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
</style>
