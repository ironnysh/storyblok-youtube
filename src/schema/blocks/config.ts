import { defineBlock, defineField } from '@storyblok/schema';

export const configBlock = defineBlock({
	fields: [
		defineField('header_nav', {
			allow: ['nav_item'],
			type: 'bloks',
		}),
	],
	is_nestable: false,
	is_root: true,
	name: 'config',
});
