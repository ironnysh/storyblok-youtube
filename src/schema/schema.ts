import type {
	BlockContent,
	Schema as InferSchema,
	Story as InferStory,
	MapiStory as InferStoryMapi,
} from '@storyblok/schema';
import { defineSchema } from '@storyblok/schema';

import { articleBlock } from './blocks/article';
import { articleOverviewBlock } from './blocks/article-overview';
import { configBlock } from './blocks/config';
import { embedYoutubeBlock } from './blocks/embed-youtube';
import { featuredArticlesBlock } from './blocks/featured-articles';
import { navItemBlock } from './blocks/nav-item';
import { pageBlock } from './blocks/page';
import { teaserBlock } from './blocks/teaser';

export const schema = defineSchema({
	blocks: {
		articleBlock,
		articleOverviewBlock,
		configBlock,
		embedYoutubeBlock,
		featuredArticlesBlock,
		navItemBlock,
		pageBlock,
		teaserBlock,
	},
});

export type Schema = InferSchema<typeof schema>;
export type Blocks = Schema['blocks'];
export type FieldPlugins = Schema['fieldPlugins'];
export type Story = InferStory<Blocks, FieldPlugins>;
export type StoryMapi = InferStoryMapi<Blocks, FieldPlugins>;

// Type a component's props by block name: `Block<"hero">`.
export type Block<TName extends Blocks['name']> = BlockContent<
	Extract<Blocks, { name: TName }>,
	Blocks,
	FieldPlugins
>;

// Loose union of every block's content, for a dynamic component dispatcher.
export type AnyBlock = BlockContent<Blocks, Blocks, FieldPlugins>;
