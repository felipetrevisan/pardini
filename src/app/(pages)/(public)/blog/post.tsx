'use client';

import {
	Card,
	CardContent,
	CardFooter,
	CardHeader,
} from '@/components/ui/card';
import { urlForImage } from '@/sanity/lib/utils';
import type { Post as PostType } from '@/types/post';
import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { PostDetails } from './details';

export function Post({
	coverImage,
	title,
	excerpt,
	slug,
	author,
	date,
	categories,
}: PostType) {
	return (
		<motion.div
			whileHover="hover"
			initial="initial"
			className="h-full min-h-128 max-w-[390px] md:max-w-full"
		>
			<Link href={`blog/${slug}`} passHref>
				<Card className="flex flex-col rounded-xl shadow-lg hover:shadow-2xl hover:border-tertiary hover:border-2 relative overflow-hidden h-full">
					<CardHeader className="relative h-[200px] overflow-hidden bg-secondary p-0">
						{coverImage !== null && (
							<motion.div
								className="absolute inset-0"
								variants={{
									hover: { scale: 1.2 },
									initial: { scale: 1 },
								}}
								transition={{ duration: 0.4, ease: 'easeInOut' }}
							>
								<Image
									src={urlForImage(coverImage.asset).url()}
									alt=""
									fill
									placeholder="blur"
									blurDataURL={coverImage.metadata.lqip}
									className="object-fill h-max"
								/>
							</motion.div>
						)}
					</CardHeader>
					<CardContent className="flex flex-col h-auto shrink grow justify-start p-4 space-y-4">
						<motion.h2 className="text-secondary font-semibold text-base md:text-md lg:text-xl">
							{title}
						</motion.h2>
						<motion.div className="flex flex-col items-start justify-start gap-1 text-sm text-truncate md:text-md text-gray-500">
							{excerpt}
						</motion.div>
					</CardContent>
					<hr className="border-t border-gray-400/30 m-4" />
					<CardFooter>
						<div className="flex flex-row shrink">
							<PostDetails {...author} date={date} />
						</div>
					</CardFooter>
				</Card>
			</Link>
		</motion.div>
	);
}
