import { defineBlock, defineField } from '@storyblok/schema';

export const featuredArticlesBlock = defineBlock({
	fields: [
		defineField('articles', {
			allow_advanced_search: true,
			entry_appearance: 'card',
			filter_content_type: ['article'],
			is_reference_type: true,
			source: 'internal_stories',
			type: 'options',
		}),
	],
	is_nestable: true,
	is_root: false,
	name: 'featured_articles',
});
