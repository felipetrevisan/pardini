import { MdSettingsApplications } from 'react-icons/md';
import { defineField, defineType } from 'sanity';

export default defineType({
	name: 'siteConfig',
	title: 'Site Settings',
	icon: MdSettingsApplications,
	type: 'document',
	groups: [
		{
			name: 'site',
			title: 'Site',
		},
		{
			name: 'seo',
			title: 'SEO',
		},
		{
			name: 'navigation',
			title: 'Navigation',
		},
		{
			name: 'others',
			title: 'Others',
		},
		{
			name: 'contact',
			title: 'Contacts',
		},
	],
	fields: [
		defineField({
			name: 'title',
			title: 'Title',
			type: 'string',
			group: ['site', 'seo'],
			validation: (Rule) =>
				Rule.required().warning('O título do site é obrigatório.'),
		}),
		defineField({
			name: 'description',
			title: 'Description',
			type: 'string',
			group: ['site', 'seo'],
			validation: (Rule) =>
				Rule.required().warning('A descrição do site é obrigatória.'),
		}),
		defineField({
			name: 'keywords',
			title: 'Keywords',
			type: 'string',
			group: ['seo'],
			validation: (Rule) =>
				Rule.required().warning('As palavras chaves é obrigatória.'),
		}),
		defineField({
			name: 'logo',
			title: 'Logo',
			type: 'image',
			group: 'site',
		}),
		defineField({
			name: 'main_nav',
			title: 'Main Navigation',
			description: 'Selecione o menu para a navegação principal do site.',
			type: 'reference',
			group: 'navigation',
			to: { type: 'navigation' },
			validation: (Rule) =>
				Rule.custom((field, context) =>
					!context?.document?.main_nav && !context?.document?.social_nav
						? 'A navegação principal ou social deve estar configurada.'
						: true,
				).warning(),
		}),
		defineField({
			name: 'social_nav',
			title: 'Social Navigation',
			description: 'Selecione o menu para a navegação social do site.',
			type: 'reference',
			group: 'navigation',
			to: { type: 'navigation' },
			validation: (Rule) =>
				Rule.custom((field, context) =>
					!context?.document?.main_nav && !context?.document?.social_nav
						? 'A navegação social ou principal deve estar configurada.'
						: true,
				).warning(),
		}),
		defineField({
			name: 'featured_items',
			title: 'Featured Items',
			description:
				'Selecione os itens em destaque para o carrossel da página inicial.',
			group: ['site', 'others'],
			type: 'array',
			of: [
				{
					type: 'reference',
					to: [{ type: 'featured' }],
				},
			],
		}),
		defineField({
			name: 'short_about',
			title: 'Short About Us',
			type: 'blockContent',
			group: ['site', 'others'],
			validation: (Rule) =>
				Rule.required().warning('This field must not be empty.'),
		}),
		defineField({
			name: 'whatsapp_url',
			title: 'Whatsapp URL Button',
			type: 'url',
			group: 'contact',
			description: 'Insira a URL para o botão de contato do WhatsApp.',
			validation: (Rule) =>
				Rule.required()
					.uri({
						scheme: ['https', 'http'],
					})
					.warning(
						'A URL do WhatsApp deve ser um link válido, começando com http ou https.',
					),
		}),
	],
});
