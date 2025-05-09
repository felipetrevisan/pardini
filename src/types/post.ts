import type { SanityAssetSource } from '@sanity/asset-utils';
import type { PortableTextBlock } from 'sanity';
import type { SanityAsset } from './sanityAssets';

export type Posts = {
	items: Post[];
	pagination: Pagination;
};

export type Post = {
	id: string;
	status: 'draft' | 'published';
	title: string;
	slug: string;
	excerpt?: string | null;
	body: PortableTextBlock;
	coverImage: SanityAsset;
	date: string;
	author: Author;
	categories?: Category[] | null;
	tags?: Tag[] | null;
};

export type Author = {
	name: string;
	picture?: SanityAssetSource | null;
};

export type Category = {
	id: string;
	title: string;
	slug: string;
};

export type Tag = {
	id: string;
	title: string;
	slug: string;
};

export type Pagination = {
	total: number;
	page: number;
};

export type PaginationQuery = {
	pageIndex: number;
	pageSize: number;
};
