import * as App from '@/components/app';
import { getPosts } from '@/server/get-posts';
import { z } from 'zod';
import { Blog } from './blog';

const blogPageSearchParams = z.object({
	pageIndex: z.coerce.number().default(0),
	pageSize: z.coerce.number().default(20),
});

export type BlogPageSearchParams = z.infer<typeof blogPageSearchParams>;

export default async function Page({
	searchParams,
}: { searchParams: Promise<BlogPageSearchParams> }) {
	const query = blogPageSearchParams.parse(await searchParams);

	const posts = await getPosts({
		pageIndex: query.pageIndex,
		pageSize: query.pageSize,
	});

	return (
		<section className="relative flex flex-col min-h-full items-center justify-center">
			<App.PageHeader>Blog</App.PageHeader>
			<Blog {...query} initialData={posts} />
		</section>
	);
}
