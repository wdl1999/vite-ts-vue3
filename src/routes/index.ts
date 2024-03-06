import type { RouteRecordRaw } from "vue-router";

const appRoutes: RouteRecordRaw[] = [
    {
        path: "/helloWorld",
        name: "helloWorld",
        component: () => import("@/components/HelloWorld.vue"),

    },
];

export default appRoutes;