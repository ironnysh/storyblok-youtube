import { defineConfig } from "astro/config";
import storyblok from "@storyblok/astro";
import { loadEnv } from "vite";
import basicSsl from "@vitejs/plugin-basic-ssl";

const env = loadEnv("", process.cwd(), "STORYBLOK");

// https://astro.build/config
export default defineConfig({
  integrations: [
    storyblok({
      accessToken: env.STORYBLOK_TOKEN,
      apiOptions: {
        region: "",
      },
      bridge: {
        customParent: "https://app.storyblok.com",
      },
      components: {
        article: "storyblok/Article",
        articleList: "storyblok/ArticleList",
        page: "storyblok/Page",
        teaser: "storyblok/Teaser",
        config: 'storyblok/Config',
        embed_youtube: 'storyblok/Youtube'
      },
    }),
  ],
  vite: {
    plugins: [basicSsl()],
    server: {
      https: true,
    },
  },
});
