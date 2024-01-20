import { defineClientConfig } from "@vuepress/client";
import ElementPlus from "element-plus";
import * as ElementPlusIconsVue from "@element-plus/icons-vue";
import "element-plus/dist/index.css";

export default defineClientConfig({
    enhance({ app, router, siteData }) {
        app.use(ElementPlus);
        Object.keys(ElementPlusIconsVue).forEach(key => {
            app.component(key, ElementPlusIconsVue[key]);
        });
        router.afterEach((to) => {
        });
    },
    setup() {},
    rootComponents: []
});
