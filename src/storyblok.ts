import { createApiClient } from '@storyblok/api-client';
import { defineStoryblokBlocks } from '@storyblok/astro';
import type { Schema } from './schema/schema';
import Article from './storyblok/Article.astro';
import ArticleOverview from './storyblok/ArticleOverview.astro';
import Config from './storyblok/Config.astro';
import FeaturedArticles from './storyblok/FeaturedArticles.astro';
import Page from './storyblok/Page.astro';
import Teaser from './storyblok/Teaser.astro';
import Youtube from './storyblok/Youtube.astro';

export const apiClient = createApiClient({
	accessToken: import.meta.env.STORYBLOK_TOKEN,
	inlineRelations: true,
	region: 'eu',
}).withTypes<Schema>();

export const { StoryblokBlock, StoryblokRichText } = defineStoryblokBlocks(
	() => ({
		components: {
			article: Article,
			article_overview: ArticleOverview,
			config: Config,
			embed_youtube: Youtube,
			featured_articles: FeaturedArticles,
			page: Page,
			teaser: Teaser,
		},
	}),
);
