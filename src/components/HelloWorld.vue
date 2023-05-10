<template>
  <h1>测试props：{{ msg }}===</h1>

  <div class="card">
    测试ref响应变量：
    <button type="button" @click="count++">count is {{ count }}</button>
  </div>

  <div class="card">
    测试counter仓库：
    <button @click="store.increment()">点击增加count</button>
    <span>doubleValue is {{ doubleValue }}</span>
  </div>

  <div class="card">
    测试动态导入图片:
    <img :src="getImage('../assets/vue.svg')" alt="">
  </div>
</template>

<script setup lang="ts">
import { ref, computed } from "vue";
import { useCounterStore } from '@/store/counter';
const store = useCounterStore()

defineProps<{ msg: string }>();

const doubleValue = computed(() => store.doubleCount)

const count = ref(0);

const getImage = (url: string) => {
  return new URL(url, import.meta.url).href
}
</script>

<style scoped>
.read-the-docs {
  color: #888;
}
</style>
