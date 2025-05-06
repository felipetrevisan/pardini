import { MdPages } from 'react-icons/md';
import { defineField, defineType } from 'sanity';

export default defineType({
	name: 'about',
	title: 'Sobre a Pardini',
	icon: MdPages,
	type: 'document',
	fields: [
		defineField({
			name: 'title',
			title: 'Title',
			type: 'string',
			validation: (Rule) => Rule.required().warning('O título é obrigatório.'),
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
					.warning('A ordem deve estar entre 0 e 100.'),
		}),
		defineField({
			name: 'content',
			title: 'Content',
			type: 'array',
			of: [
				{
					type: 'block',
					marks: {
						decorators: [
							{ title: 'Bold', value: 'strong' },
							{ title: 'Emphasis', value: 'em' },
							{ title: 'Code', value: 'code' },
							{
								title: 'Highlight',
								value: 'highlight',
								icon: () => 'H',
							},
						],
					},
				},
			],
			validation: (Rule) =>
				Rule.required().warning('O conteúdo não pode estar vazio.'),
		}),
		defineField({
			name: 'has_block_picture',
			title: 'Has Block Picture?',
			type: 'boolean',
			initialValue: false,
			validation: (Rule) =>
				Rule.required().warning('Esse campo precisa ser preenchido.'),
		}),
		defineField({
			name: 'picture',
			title: 'Image',
			type: 'image',
			hidden: ({ parent }) => !parent?.has_block_picture,
			validation: (Rule) =>
				Rule.custom((field, context) => {
					if (context?.document?.has_block_picture && !field) {
						return 'A imagem deve ser fornecida quando o bloco de imagem estiver ativado.';
					}
					return true;
				}).warning(),
		}),
		defineField({
			name: 'picture_block_side',
			title: 'Picture Side',
			type: 'string',
			options: {
				list: [
					{ title: 'Before Content', value: 'BEFORE' },
					{ title: 'After Content', value: 'AFTER' },
				],
				layout: 'radio',
			},
			hidden: ({ parent }) => !parent?.has_block_picture,
			validation: (Rule) =>
				Rule.custom((field, context) => {
					if (context?.document?.has_block_picture && !field) {
						return 'O lado da imagem deve ser selecionado quando o bloco de imagem estiver ativado.';
					}
					return true;
				}).warning(),
		}),
		defineField({
			name: 'has_button',
			title: 'Has Button?',
			type: 'boolean',
			initialValue: false,
			validation: (Rule) =>
				Rule.required().warning('Esse campo precisa ser preenchido.'),
		}),
		defineField({
			name: 'button_label',
			title: 'Button Label',
			type: 'string',
			hidden: ({ parent }) => !parent?.has_button,
			validation: (Rule) =>
				Rule.custom((field, context) => {
					if (context?.document?.has_button && !field) {
						return 'O botão precisa de um rótulo quando ativado.';
					}
					return true;
				}).warning(),
		}),
		defineField({
			name: 'link_button',
			title: 'Button URL',
			type: 'url',
			hidden: ({ parent }) => !parent?.has_button,
			validation: (Rule) =>
				Rule.custom((field, context) => {
					if (context?.document?.has_button && !field) {
						return 'O botão precisa de um link quando ativado.';
					}
					return true;
				})
					.uri({
						scheme: ['https', 'http'],
					})
					.warning(
						'A URL do WhatsApp deve ser um link válido, começando com http ou https.',
					),
		}),
	],
	preview: {
		select: {
			title: 'title',
		},
		prepare(selection) {
			const { title } = selection;
			return {
				title: title ?? 'Conteúdo sem título',
			};
		},
	},
});
