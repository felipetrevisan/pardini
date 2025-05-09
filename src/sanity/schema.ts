import type { SchemaTypeDefinition } from 'sanity';

import author from './schemas/blog/author';
import blockContent from './schemas/blog/blockContent';
import category from './schemas/blog/category';
import post from './schemas/blog/post';
import tag from './schemas/blog/tag';

import faq from './schemas/faq';
import featured from './schemas/featured';
import service from './schemas/services';
import settings from './schemas/settings';
import testimonial from './schemas/testimonials';

import navigation from './schemas/navigation';
import link from './schemas/objects/link';
import navigationItem from './schemas/objects/navigationItem';
import navigationSubmenuItem from './schemas/objects/navigationSubmenuItem';

// Social media schema
import socialNetworksItem from './schemas/objects/socialNetworksItem';
import about from './schemas/pages/about';
import family from './schemas/pages/family';
import journey from './schemas/pages/journey';

// Define and export schema
export const schema: { types: SchemaTypeDefinition[] } = {
	types: [
		post,
		author,
		category,
		tag,
		blockContent,

		service,
		faq,
		testimonial,
		about,
		settings,
		featured,

		family,
		journey,

		navigation,
		navigationItem,
		navigationSubmenuItem,
		link,

		socialNetworksItem,
	],
};
