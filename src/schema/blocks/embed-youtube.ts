import { defineBlock, defineField } from '@storyblok/schema';

export const embedYoutubeBlock = defineBlock({
	color: '#ef6252',
	display_name: 'YouTube',
	fields: [
		defineField('youtube_url', {
			display_name: 'YouTube URL',
			type: 'text',
		}),
		defineField('youtube_title', {
			display_name: 'YouTube Title',
			type: 'text',
		}),
	],
	icon: 'block-share',
	is_nestable: true,
	is_root: false,
	name: 'embed_youtube',
});
