import { defineField } from 'sanity';

export const fields = [
	defineField({
		name: 'title',
		title: 'Page Title',
		type: 'string',
		validation: (Rule) =>
			Rule.required().warning('O título da página é obrigatório.'),
	}),
	defineField({
		name: 'slug',
		title: 'Slug',
		type: 'slug',
		options: {
			maxLength: 96,
		},
		validation: (Rule) => Rule.required().warning('O slug é obrigatório'),
	}),
	defineField({
		name: 'description',
		title: 'Page Description',
		type: 'string',
		validation: (Rule) =>
			Rule.required().warning('A descrição da página é obrigatória.'),
	}),
	defineField({
		name: 'background',
		title: 'Image',
		type: 'image',
	}),
	defineField({
		name: 'video',
		title: 'Video URL',
		type: 'url',
		validation: (Rule) =>
			Rule.required()
				.uri({
					scheme: ['http', 'https'],
				})
				.warning('Insira uma URL de vídeo válida.'),
	}),
	defineField({
		name: 'video_id',
		title: 'Video ID',
		type: 'slug',
		hidden: ({ parent }) => !parent?.video,
		options: {
			source: 'video',
			maxLength: 200, // will be ignored if slugify is set
			slugify: (input) => new URL(input!).pathname.split('/')[2] ?? '',
		},
		validation: (Rule) =>
			Rule.custom((field, context) => {
				if (context?.document?.video && !field) {
					return 'O id do video precisa ser preenchido.';
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
		name: 'show_title_footer',
		title: 'Show Title?',
		type: 'boolean',
		initialValue: false,
		hidden: ({ parent }) => !parent?.has_button,
	}),
	defineField({
		name: 'title_footer',
		title: 'Title Footer',
		type: 'string',
		hidden: ({ parent }) => !parent?.has_button || !parent?.show_title_footer,
		validation: (Rule) =>
			Rule.custom((field, context) => {
				if (
					context?.document?.has_button &&
					context?.document?.show_title_footer &&
					!field
				) {
					return 'O titulo é obrigatório quando ativado.';
				}
				return true;
			}).warning(),
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
];
