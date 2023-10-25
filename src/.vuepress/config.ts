import path from "path";
import { defineUserConfig } from "vuepress";
import { registerComponentsPlugin } from "@vuepress/plugin-register-components";

import AutoImport from "unplugin-auto-import/vite";
import Components from "unplugin-vue-components/vite";
import { ElementPlusResolver } from "unplugin-vue-components/resolvers";
import Icons from "unplugin-icons/vite"
import IconsResolver from "unplugin-icons/resolver"

import { searchProPlugin } from "vuepress-plugin-search-pro";

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
    shouldPrefetch: false,
    plugins: [
        AutoImport({
            imports: ["vue"],
            resolvers: [
                ElementPlusResolver(),
                IconsResolver({
                    prefix: "Icon"
                })
            ]
        }),
        Components({
            resolvers: [
                ElementPlusResolver(),
                IconsResolver({
                    enabledCollections: ["ep"]
                })
            ]
        }),
        Icons({
            autoInstall: true
        }),
        registerComponentsPlugin({
            componentsDir: path.resolve(__dirname, "./components")
        }),
        searchProPlugin({
            indexContent: true,
            autoSuggestions: true,
            customFields: [{
                getter: (page) => page.frontmatter.title,
                formatter: "标题：$content"
            }, {
                getter: (page) => page.frontmatter.author,
                formatter: "作者：$content"
            }, {
                getter: (page) => page.frontmatter.category,
                formatter: "分类：$content"
            }, {
                getter: (page) => page.frontmatter.tag,
                formatter: "标签：$content"
            }],
            hotKeys: [{ key: "k", ctrl: true }, { key: "/", ctrl: true }],
            queryHistoryCount: 5,
            resultHistoryCount: 5,
            searchDelay: 150,
            sortStrategy: "max"
        })
    ],
    theme: theme
});
