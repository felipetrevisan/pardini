import { MdGridView, MdPages, MdSettings } from 'react-icons/md';
import type { StructureBuilder } from 'sanity/structure';

const structure = (S: StructureBuilder) =>
	S.list()
		.title('Content Manager')
		.items([
			// Blog section
			S.listItem()
				.title('Blog')
				.icon(MdGridView)
				.child(
					S.list()
						.title('Blog')
						.items([
							S.listItem().title('Post').child(S.documentTypeList('post')),
							S.listItem().title('Author').child(S.documentTypeList('author')),
							S.listItem()
								.title('Category')
								.child(S.documentTypeList('category')),
						]),
				),

			// Settings section
			S.listItem()
				.title('Settings')
				.icon(MdSettings)
				.child(
					S.list()
						.title('Settings')
						.items([
							S.listItem()
								.title('Settings')
								.child(
									S.document()
										.schemaType('siteConfig')
										.documentId('siteConfig'),
								),
							S.listItem()
								.title('Navigation')
								.child(S.documentTypeList('navigation')),
							S.listItem()
								.title('Banners')
								.child(S.documentTypeList('featured')),
						]),
				),

			S.divider(),

			S.listItem()
				.title('Pages')
				.icon(MdPages)
				.child(
					S.list()
						.title('Pages')
						.items([
							S.listItem()
								.title('Cidadania Italiana com a Pardini')
								.child(
									S.document()
										.schemaType('familyPage')
										.documentId('familyPage'),
								),
							S.listItem()
								.title('Jornada Italiana')
								.child(
									S.document()
										.schemaType('journeyPage')
										.documentId('journeyPage'),
								),
							S.listItem()
								.title('Sobre a Pardini')
								.child(S.documentTypeList('about')),
						]),
				),

			S.divider(),

			...S.documentTypeListItems().filter(
				(listItem) =>
					![
						'post',
						'author',
						'category',
						'siteConfig',
						'navigation',
						'featured',
						'familyPage',
						'journeyPage',
						'about',
						'tag',
					].includes(listItem.getId() || ''),
			),
		]);

export default structure;
