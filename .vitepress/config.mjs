import { defineConfig } from "vitepress";

// https://vitepress.dev/reference/site-config
export default defineConfig({
    title: "BlackSoulsWiki",
    description: "🚀 BlackSouls的文档、攻略、资源引导... ",
    themeConfig: {
        logo: "/static/logo.png",
        nav: [
            { text: "Home", link: "/" },
        ],

        sidebar: [
            {
                text: "流程",
                items: [
                    { text: "开始", link: "/doc/getting-start" },
                ],
            },
        ],

        socialLinks: [
            {
                icon: "github",
                link: "https://github.com/yingyu5658/BlackSoulsWiki",
            },
        ],
    },
});
