import { defineBlock, defineField } from '@storyblok/schema';

export const articleOverviewBlock = defineBlock({
	display_name: 'Article overview',
	fields: [
		defineField('title', {
			type: 'text',
		}),
	],
	is_nestable: false,
	is_root: true,
	name: 'article_overview',
});
