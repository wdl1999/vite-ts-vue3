import { defineConfig, loadEnv } from "vite";
import process from "process";
import _ from "lodash";
import vue from "@vitejs/plugin-vue";
// https://vitejs.dev/config/

// vite.config.js中访问env文件
const envResolve = (mode) => {
  // process.cwd()获取nodejs进程当前工作目录
  return loadEnv(mode, process.cwd());
};

const getEnv = function (env) {
  // process.argv 属性返回一个数组，这个数组包含了启动Node.js进程时的命令行参数
  // last()返回数组最后一个元素
  return envResolve(_.last(process.argv))[env];
};

export default defineConfig({
  plugins: [vue()],
  server: {
    port: Number(getEnv("VITE_PORT")) || 8081,
    // host: import.meta.env.HOST,
  },
});
