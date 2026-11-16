import { defineBlock, defineField } from '@storyblok/schema';

export const navItemBlock = defineBlock({
	fields: [
		defineField('link', {
			type: 'multilink',
		}),
	],
	is_nestable: true,
	is_root: false,
	name: 'nav_item',
});
