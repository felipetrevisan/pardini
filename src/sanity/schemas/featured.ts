import { MdMenu } from 'react-icons/md';
import { defineField, defineType } from 'sanity';

export default defineType({
	name: 'featured',
	title: 'Featured Content',
	icon: MdMenu,
	type: 'document',
	groups: [
		{
			name: 'basic',
			title: 'Basic Details',
		},
		{
			name: 'image',
			title: 'Image',
		},
	],
	fields: [
		defineField({
			name: 'title',
			title: 'Title',
			type: 'string',
			group: 'basic',
			validation: (Rule) => Rule.required(),
		}),
		defineField({
			name: 'subtitle',
			title: 'Subtitle',
			type: 'text',
			group: 'basic',
			validation: (Rule) => Rule.required().warning('O título é obrigatório'),
		}),
		defineField({
			name: 'background_image',
			title: 'Background Image',
			type: 'image',
			group: 'image',
		}),
	],
});
