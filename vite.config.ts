import { defineConfig, loadEnv } from "vite";
import process from "process";
import vue from "@vitejs/plugin-vue";
console.log("1111 import.meta.env.PORT ", import.meta);
// https://vitejs.dev/config/

// 第二步 根据不同环境 去读取 不同的 对象  进行返回
const envResolve = (mode) => {
  return loadEnv(mode, process.cwd());
};

// // 第三步 传 要读取的 参数 key
// const getEnv = function (env) {
//   //           我这里采用了lodash 读取 环境名
//   return envResolve(_.last(process.argv))[env];
// };
// // 第四步 使用
// getEnv("VITE_APP_MODULE");
export default defineConfig({
  plugins: [vue()],
  // server: {
  //   port: import.meta.env.PORT || 8081,
  //   host: import.meta.env.HOST,
  // },
});
