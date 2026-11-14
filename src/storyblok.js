import { createApiClient } from "@storyblok/api-client";
import { defineStoryblokBlocks } from "@storyblok/astro";
import Article from "./storyblok/Article.astro";
import ArticleOverview from "./storyblok/ArticleOverview.astro";
import FeaturedArticles from "./storyblok/FeaturedArticles.astro";
import Page from "./storyblok/Page.astro";
import Teaser from "./storyblok/Teaser.astro";
import Config from "./storyblok/Config.astro";
import EmbedYoutube from "./storyblok/EmbedYoutube.astro";

export const apiClient = createApiClient({
  accessToken: "YOUR_ACCESS_TOKEN",
    region: "eu",
  inlineRelations: true,
});

export const { StoryblokBlock, StoryblokRichText } = defineStoryblokBlocks(() => ({
  components: {
    article: Article,
    article_overview: ArticleOverview,
    featured_articles: FeaturedArticles,
    page: Page,
    teaser: Teaser,
    config: Config,
    embed_youtube: EmbedYoutube,
  },
}));