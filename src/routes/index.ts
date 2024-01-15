import type { RouteRecordRaw } from "vue-router";

const appRoutes: RouteRecordRaw[] = [
    {
        path: "/puppeteer",
        name: "puppeteer",
        component: () => import("@/components/puppeteer.vue"),

    },
    {
        path: "/helloWorld",
        name: "helloWorld",
        component: () => import("@/components/HelloWorld.vue"),

    },
];

export default appRoutes;