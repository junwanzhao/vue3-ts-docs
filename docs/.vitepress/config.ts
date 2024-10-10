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
            { text: "基础", link: "/HCJ/" },
            { text: "Vue3", link: "/vue3-basic/" },

        ],
        socialLinks: [
            { icon: "github", link: "https://github.com/junwanzhao/vue3-ts-docs.git" },
        ],
        sidebar: {
            "/HCJ/": [
                {
                    text: "开始",
                    collapsible: true,
                    items: [
                        { text: "HTML", link: "/HCJ/HTML" },
                        { text: "CSS", link: "/HCJ/CSS" },
                        { text: "JavaScript", link: "/HCJ/JavaScript" },
                    ],
                },
            ],
            "/HCJ/JavaScript/": [
                {
                    text: "开始",
                    collapsible: true,
                    items: [
                        { text: "核心原理", link: "/HCJ/JavaScript" },
                        { text: "ES6", link: "/HCJ/JavaScript/ES6" },
                        { text: "NodeJS", link: "/HCJ/JavaScript/NodeJS" },
                        { text: "TypeScript", link: "/HCJ/JavaScript/TypeScript" },
                    ],
                },
            ],
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
        },
        footer: {
            message: "温故而知新",
            copyright: "Copyright © 2024 hyzhu",
        },
    },
});