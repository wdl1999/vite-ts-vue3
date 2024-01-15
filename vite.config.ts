// 开发环境下，vite会在浏览器直接请求需要的文件，需要浏览器支持ESM，因为vite不支持commonjs
import { defineConfig, loadEnv } from "vite";
import process from "process"; // vite中访问node进程相关信息
import _ from "lodash";
import vue from "@vitejs/plugin-vue";
import path from "path";

export default defineConfig(({ command, mode, ssrBuild }) => {
  // 设置第三个参数为 '' 来加载所有环境变量，而不管是否有 `VITE_` 前缀
  const env = loadEnv(mode, process.cwd(), "");
  console.log("1111 env", env.NODE_ENV === 'development');
  return {
    base: env.NODE_ENV === 'development' ? "/" : "http://tumaxadmin.to8to.com/",
    define: {
      __APP_VERSION__: "1.0", // 只能定义常量 页面获取到的__APP_VERSION__是number类型的
    },
    plugins: [vue()],
    server: {
      port: Number(env.VITE_PORT) || 8081,
      host: env.VITE_HOST,
      hot: true,
    },
    resolve: {
      alias: {
        "@": path.resolve(__dirname, "src"),
      },
    },
    preview: {
      port: Number(env.VITE_PORT) || 8081,
      host: env.VITE_HOST,
    },
    build: {},
  };
});
