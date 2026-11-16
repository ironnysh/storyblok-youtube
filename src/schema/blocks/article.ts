import { defineBlock, defineField } from '@storyblok/schema';

export const articleBlock = defineBlock({
	display_name: 'Article',
	fields: [
		defineField('title', {
			type: 'text',
		}),
		defineField('lead', {
			display_name: 'Lead',
			type: 'text',
		}),
		defineField('content', {
			allow: ['teaser', 'embed_youtube'],
			allow_custom_attributes: true,
			customize_toolbar: true,
			toolbar: [
				'blok',
				'bold',
				'list',
				'copy',
				'cut',
				'h1',
				'h2',
				'h3',
				'hrule',
				'unset',
				'link',
				'undo',
			],
			type: 'richtext',
		}),
	],
	is_nestable: false,
	is_root: true,
	name: 'article',
});
