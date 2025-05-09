'use client';

import { Badge, badgeVariants } from '@/components/ui/badge';
import {
	Card,
	CardContent,
	CardFooter,
	CardHeader,
} from '@/components/ui/card';
import { urlForImage } from '@/sanity/lib/utils';
import type { Post as PostType } from '@/types/post';
import { getImageDimensions } from '@sanity/asset-utils';
import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { PostDetails } from './details';

type PostProps = PostType;

export function Post({
	coverImage,
	title,
	excerpt,
	slug,
	author,
	date,
	categories,
}: PostProps) {
	// const { width, height } = coverImage
	//   ? getImageDimensions(coverImage.asset)
	//   : { width: 0, height: 0 };

	return (
        <Link href={`blog/${slug}`} passHref legacyBehavior>
            <Card className="flex flex-col rounded-xl shadow-lg relative overflow-hidden h-full min-h-[32rem] max-w-[390px] md:max-w-full">
				<CardHeader className="relative h-[200px] overflow-hidden bg-secondary p-0">
					{coverImage !== null && (
						<Image
							src={urlForImage(coverImage.asset).url()}
							alt=""
							fill
							className="hover:scale-110 transition-all ease-linear duration-200"
							placeholder="blur"
							blurDataURL={coverImage.metadata.lqip}
						/>
					)}
				</CardHeader>
				<CardContent className="flex flex-col h-auto flex-shrink flex-grow justify-start p-4 space-y-4">
					<motion.h2 className="text-secondary font-semibold text-base md:text-md lg:text-xl">
						{title}
					</motion.h2>
					<motion.div className="flex flex-col items-start justify-start gap-1 text-sm text-truncate md:text-md text-gray-500">
						{excerpt}
					</motion.div>
					{/* {categories?.map((category, id) => (
            <Badge variant="secondary" key={id}>
              {category.title}
            </Badge>
          ))} */}
				</CardContent>
				<hr className="border-t border-gray-400/30 m-4" />
				<CardFooter>
					<div className="flex flex-row flex-shrink">
						<PostDetails {...author} date={date} />
					</div>
				</CardFooter>
			</Card>
        </Link>
    );
}
