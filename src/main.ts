import { createApp } from "vue";
import "./style.css";
import App from "./App.vue";
import "@/styles/base.scss";
import routes from "@/routes/index";
import { puppeteer } from 'puppeteer';
import { createPinia } from "pinia";
import { createRouter, createWebHashHistory } from "vue-router";
// 使用import.meta.env可以获取默认的环境变量以及.env中以VITE_开头的环境变量
console.log("1111 import.meta.env", import.meta.env);
console.log("1111 __APP_VERSION__", __APP_VERSION__, typeof __APP_VERSION__);

const router = createRouter({
    history: createWebHashHistory(),
    routes: [{ path: "/", redirect: "puppeteer" }, ...routes],
});

// 创建一个pinia 实例（根store）并将其传递给应用
const pinia = createPinia();
const app = createApp(App);
app.use(pinia);
app.use(router);

app.mount("#app");
