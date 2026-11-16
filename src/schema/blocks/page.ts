import { defineBlock, defineField } from '@storyblok/schema';

export const pageBlock = defineBlock({
	fields: [
		defineField('body', {
			type: 'bloks',
		}),
	],
	is_nestable: false,
	is_root: true,
	name: 'page',
});
