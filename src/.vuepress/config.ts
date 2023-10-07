import { defineUserConfig } from "vuepress";
import theme from "./theme.js";

export default defineUserConfig({
    base: "/",
    locales: {
        "/": {
            lang: "zh-CN",
            title: "iEDA",
            description: "iEDA的官方网站",
        }
    },
    theme
});
