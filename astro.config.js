import { defineConfig } from "astro/config";
import { storyblok } from "@storyblok/astro";
import { loadEnv } from "vite";
import mkcert from 'vite-plugin-mkcert'
import vercel from '@astrojs/vercel';

const env = loadEnv("", process.cwd(), "STORYBLOK");
const { STORYBLOK_DELIVERY_API_TOKEN} = loadEnv(import.meta.env.MODE, process.cwd(), "");

export default defineConfig({
  integrations: [
    storyblok({
      accessToken: env.STORYBLOK_DELIVERY_API_TOKEN,
      livePreview: true,
      bridge: {
        resolveRelations: ['featured_articles.articles'],
      },
      apiOptions: {
        region: "eu",
      },
      components: {
        article: "storyblok/Article",
        article_overview: "storyblok/ArticleOverview",
        featured_articles: "storyblok/FeaturedArticles",
        page: "storyblok/Page",
        teaser: "storyblok/Teaser",
        config: "storyblok/Config",
        embed_youtube: "storyblok/Youtube",
      },
      enableFallbackComponent: true,
      customFallbackComponent: "storyblok/Fallback",
    }),
  ],
  output: 'server',
  adapter: vercel(),
  vite: {
    plugins: [ mkcert() ],
    
  },
});
