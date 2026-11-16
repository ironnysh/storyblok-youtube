import { defineBlock, defineField } from '@storyblok/schema';

export const teaserBlock = defineBlock({
	fields: [
		defineField('headline', {
			type: 'text',
		}),
	],
	is_nestable: true,
	is_root: false,
	name: 'teaser',
});
