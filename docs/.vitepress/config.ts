import { defineConfig } from "vitepress";

// https://vitepress.dev/reference/site-config
export default defineConfig({
    title: "前端学习化仓库",
    description: "前端工程化学习笔记整理",
    themeConfig: {
        siteTitle: "前端学习",
        logo: "https://hyzhu-oss.oss-cn-hangzhou.aliyuncs.com/images/logo.png",
        nav: [
            { text: "首页", link: "/" },
            { text: "ES6", link: "/ES6/" },
            { text: "TypeScript", link: "/TypeScript/" },
            { text: "Vue3", link: "/vue3-basic/" },
            { text: "CSS", link: "/CSS/" },
        ],
        socialLinks: [
            { icon: "github", link: "https://github.com/junwanzhao/vue3-ts-docs.git" },
        ],
        sidebar: {
            "/vue3-basic/": [
                {
                    text: "开始",
                    collapsible: true,
                    items: [
                        { text: "介绍", link: "/vue3-basic/" },
                        { text: "安装", link: "/vue3-basic/installation" },
                        { text: "基本概念", link: "/vue3-basic/concepts" },
                    ],
                },
            ],
            "/CSS/": [
                {
                    text: "常用样式",
                    items: [
                        { text: "介绍", link: "/CSS/" },
                        { text: "基本概念", link: "/CSS/concepts" },

                    ],
                },
            ],
        },
        footer: {
            message: "温故而知新",
            copyright: "Copyright © 2024 hyzhu",
        },
    },
});