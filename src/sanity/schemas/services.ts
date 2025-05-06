import { icons } from 'lucide-react';
import { defineField, defineType } from 'sanity';

export default defineType({
	name: 'service',
	title: 'Serviços',
	type: 'document',
	fields: [
		defineField({
			name: 'title',
			title: 'Title',
			type: 'string',
			validation: (Rule) => Rule.required().warning('O título é obrigatório'),
		}),
		defineField({
			name: 'slug',
			title: 'Slug',
			type: 'slug',
			options: {
				source: 'title',
				maxLength: 96,
			},
		}),
		defineField({
			name: 'order',
			title: 'Display Order',
			type: 'number',
			initialValue: 0,
			validation: (Rule) =>
				Rule.required()
					.min(0)
					.max(100)
					.warning('A ordem deve ser entre 0 e 100'),
		}),
		defineField({
			name: 'icon',
			title: 'Icon',
			type: 'string',
		}),
		defineField({
			name: 'type',
			title: 'Service Type',
			type: 'string',
			options: {
				list: [
					{ title: 'Já tenho Cidadania', value: 'HAVING' },
					{ title: 'Não tenho Cidadania', value: 'NOT_HAVING' },
				],
				layout: 'radio',
			},
			validation: (Rule) =>
				Rule.required().warning('O tipo de serviço é obrigatório'),
		}),
		defineField({
			name: 'excerpt',
			title: 'Excerpt',
			type: 'text',
			validation: (Rule) => Rule.required().warning('O resumo é obrigatório'),
		}),
		defineField({
			name: 'description',
			title: 'Description',
			type: 'array',
			of: [
				{
					type: 'block',
					styles: [],
					marks: {
						decorators: [
							{ title: 'Strong', value: 'strong' },
							{ title: 'Emphasis', value: 'em' },
							{ title: 'Underline', value: 'underline' },
						],
					},
				},
			],
			validation: (Rule) =>
				Rule.required().warning('A descrição é obrigatória'),
		}),
		defineField({
			name: 'has_see_more_button',
			title: 'See More Button?',
			type: 'boolean',
			initialValue: false,
			validation: (Rule) =>
				Rule.required().warning(
					"É necessário informar se há um botão de 'Ver mais'",
				),
		}),
		defineField({
			name: 'link_see_more',
			title: 'See More Button Link',
			type: 'url',
			hidden: ({ parent }) => !parent?.has_see_more_button,
			validation: (Rule) =>
				Rule.custom((field, context) =>
					context?.document?.has_see_more_button && !field
						? "Este campo é obrigatório quando houver um botão 'Ver mais'."
						: true,
				).warning(),
		}),
		defineField({
			name: 'has_whatsapp_button',
			title: 'Whatsapp Button?',
			type: 'boolean',
			initialValue: false,
			validation: (Rule) =>
				Rule.required().warning(
					'É necessário informar se há um botão do WhatsApp',
				),
		}),
		defineField({
			name: 'whatsapp_button_label',
			title: 'Whatsapp Button Label',
			type: 'string',
			options: {
				list: [
					{ title: 'Fale com um especialista', value: 'TALK_WITH_SPECIALIST' },
					{ title: 'Solicite um orçamento', value: 'GET_QUOTE' },
					{ title: 'Saiba mais', value: 'MORE_INFORMATION' },
				],
			},
			hidden: ({ parent }) => !parent?.has_whatsapp_button,
			validation: (Rule) =>
				Rule.custom((field, context) =>
					context?.document?.has_whatsapp_button && !field
						? 'Este campo é obrigatório quando houver um botão do WhatsApp.'
						: true,
				).warning(),
		}),
		defineField({
			name: 'link_whatsapp_button',
			title: 'Whatsapp Button Link',
			type: 'url',
			hidden: ({ parent }) => !parent?.has_whatsapp_button,
			validation: (Rule) =>
				Rule.custom((field, context) =>
					context?.document?.has_whatsapp_button && !field
						? 'Este campo é obrigatório quando houver um botão do WhatsApp.'
						: true,
				).warning(),
		}),
	],
	preview: {
		select: {
			title: 'title',
			media: 'icon',
			subtitle: 'type',
		},
		prepare(selection) {
			const { title, media, subtitle } = selection;
			const LucideIcon = icons[media as keyof typeof icons] ?? icons['Scale'];
			return {
				title,
				media: LucideIcon,
				subtitle:
					subtitle === 'HAVING'
						? 'Já tenho cidadania'
						: 'Ainda não tenho cidadania',
			};
		},
	},
	orderings: [
		{
			title: 'Título',
			name: 'titleDesc',
			by: [{ field: 'title', direction: 'desc' }],
		},
		{
			title: 'Tipo de serviço',
			name: 'typeDesc',
			by: [{ field: 'type', direction: 'desc' }],
		},
		{
			title: 'Ordem de exibição',
			name: 'orderAsc',
			by: [{ field: 'order', direction: 'asc' }],
		},
	],
});
