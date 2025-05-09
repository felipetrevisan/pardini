'use client';

import * as App from '@/components/app';
import { portableComponents } from '@/components/ui/portable-components';
import { Skeleton } from '@/components/ui/skeleton';
import { usePost } from '@/hooks/use-posts';
import { urlForImage } from '@/sanity/lib/utils';
import type { Post as PostType } from '@/types/post';
import { PortableText } from '@portabletext/react';
import { motion } from 'framer-motion';
import { ChevronLeftCircle } from 'lucide-react';
import Link from 'next/link';
import { Fragment } from 'react';
import { PostDetails } from '../details';

const MotionLink = motion(Link);

export function Post({
	initialData,
	slug,
}: { initialData: PostType; slug: string }) {
	const { data, isLoading } = usePost(slug, initialData);

	return (
		<Fragment>
			<App.PageHeader
				background={
					data.coverImage
						? urlForImage(data.coverImage.asset)?.url()
						: undefined
				}
				className="text-center"
			>
				<div className="flex flex-row items-center gap-4 pb-10 md:leading-snug">
					<MotionLink href="/blog" whileHover={{ scale: 1.2 }}>
						<ChevronLeftCircle className="size-8" />
					</MotionLink>
					{isLoading ? <Skeleton className="size-4" /> : data.title}
				</div>
			</App.PageHeader>
			<motion.div layout className="h-full flex flex-col bg-white py-0">
				<div className="flex flex-row justify-start bg-secondary/5 rounded-3xl w-full p-5">
					{isLoading ? (
						<Skeleton className="size-14 rounded-full" />
					) : (
						<>
							{data.author && <PostDetails {...data.author} date={data.date} />}
						</>
					)}
				</div>
				<article className="container mt-10">
					<div className="flex flex-col justify-start items-start gap-10">
						<div className="flex flex-col space-y-2 p-2">
							{data.body && (
								<PortableText
									value={data.body}
									components={portableComponents}
								/>
							)}
						</div>
					</div>
				</article>
			</motion.div>
		</Fragment>
	);
}
