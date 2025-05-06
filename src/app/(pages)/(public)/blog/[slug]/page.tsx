import type { Metadata, ResolvingMetadata } from 'next';
import { notFound } from 'next/navigation';
import { z } from 'zod';
import { sanityFetch } from '@/sanity/lib/fetch';
import { getPost, getPostsSlug } from '@/server/get-posts';
import { resolveOpenGraphImage } from '@/sanity/lib/utils';
import { postQuery } from '@/sanity/lib/queries';
import type { Post as PostType } from '@/types/post';
import { Post } from './post';

const blogPageParams = z.object({
	slug: z.string(),
});

export type BlogPageParams = z.infer<typeof blogPageParams>;

export async function generateStaticParams() {
	return getPostsSlug();
}

export async function generateMetadata(
	{ params }: { params: Promise<BlogPageParams> },
	parent: ResolvingMetadata,
): Promise<Metadata> {
	const post = await sanityFetch<PostType>({
		query: postQuery,
		params,
		stega: false,
	});
	const previousImages = (await parent).openGraph?.images || [];
	const ogImage = post?.coverImage?.asset
		? resolveOpenGraphImage(post.coverImage.asset)
		: undefined;

	return {
		authors: post?.author?.name ? [{ name: post?.author?.name }] : [],
		title: post?.title,
		description: post?.excerpt,
		openGraph: {
			images: ogImage ? [ogImage, ...previousImages] : previousImages,
		},
	} satisfies Metadata;
}

export default async function Page({
	params,
}: { params: Promise<BlogPageParams> }) {
	const { slug } = await params;
	const post = await getPost(slug);

	if (!post.id) {
		return notFound();
	}

	return (
		<section
			className="relative flex flex-col min-h-full items-center justify-center"
			data-section="post"
		>
			<Post initialData={post} slug={slug} />
		</section>
	);
}
