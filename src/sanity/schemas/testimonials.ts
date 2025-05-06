import { MdRequestQuote } from 'react-icons/md';
import { defineField, defineType } from 'sanity';

export default defineType({
	name: 'testimonial',
	title: 'Depoimentos',
	icon: MdRequestQuote,
	type: 'document',
	fields: [
		defineField({
			name: 'author_name',
			title: 'Author Name',
			type: 'string',
			validation: (Rule) =>
				Rule.required().warning('O nome do autor é obrigatório.'),
		}),
		defineField({
			name: 'author_avatar',
			title: 'Author Avatar',
			type: 'image',
			options: {
				hotspot: true,
			},
		}),
		defineField({
			name: 'order',
			title: 'Order',
			type: 'number',
			initialValue: 0,
			validation: (Rule) =>
				Rule.required()
					.min(0)
					.max(100)
					.warning(
						'A ordem de exibição é obrigatória e deve ser entre 0 e 100.',
					),
		}),
		defineField({
			name: 'show_home',
			title: 'Show in Home?',
			type: 'boolean',
			initialValue: false,
			validation: (Rule) =>
				Rule.required().warning('Este campo é obrigatório.'),
		}),
		defineField({
			name: 'type',
			title: 'Testimonial Type',
			type: 'string',
			options: {
				list: [
					{ title: 'Text', value: 'TEXT' },
					{ title: 'Vídeo', value: 'VIDEO' },
				],
				layout: 'radio',
			},
			validation: (Rule) =>
				Rule.required().warning(
					'Selecione o tipo de depoimento (Texto ou Vídeo).',
				),
		}),
		defineField({
			name: 'testimonial',
			title: 'Testimonial',
			type: 'array',
			of: [
				{
					type: 'block',
					lists: [],
					styles: [],
					marks: {
						decorators: [
							{ title: 'Strong', value: 'strong' },
							{ title: 'Emphasis', value: 'em' },
							{ title: 'Underline', value: 'underline' },
						],
						annotations: [],
					},
				},
			],
			hidden: ({ parent }) => parent?.type !== 'TEXT',
			validation: (Rule) =>
				Rule.custom((field, context) =>
					context?.document?.type === 'TEXT' && !field
						? 'Este campo é obrigatório quando o tipo for Texto.'
						: true,
				).warning(),
		}),
		defineField({
			name: 'video',
			title: 'Video URL',
			type: 'url',
			hidden: ({ parent }) => parent?.type !== 'VIDEO',
			validation: (Rule) =>
				Rule.custom((field, context) =>
					context?.document?.type === 'VIDEO' && !field
						? 'Este campo é obrigatório quando o tipo for Vídeo.'
						: true,
				)
					.uri({
						scheme: ['http', 'https'],
					})
					.warning('Insira uma URL de vídeo válida.'),
		}),
	],
	preview: {
		select: {
			title: 'author_name',
			media: 'author_avatar',
			subtitle: 'type',
		},
		prepare(selection) {
			const { title, media, subtitle } = selection;
			return {
				title,
				media,
				subtitle: subtitle === 'TEXT' ? 'Texto' : 'Vídeo',
			};
		},
	},
	orderings: [
		{
			title: 'Type',
			name: 'typeDesc',
			by: [{ field: 'type', direction: 'desc' }],
		},
		{
			title: 'Order',
			name: 'orderAsc',
			by: [{ field: 'order', direction: 'asc' }],
		},
	],
});
