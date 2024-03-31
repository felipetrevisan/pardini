"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import Link from "next/link";
import type { Post as PostType } from "@/types/post";
import { PostDetails } from "./details";
import { urlForImage } from "@/sanity/lib/utils";
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";

type PostProps = PostType;

export function Post({ coverImage, title, excerpt, slug, author, date }: PostProps) {
  return (
    <Link href={`blog/${slug}`} passHref>
      <Card className="flex flex-col rounded-xl shadow-lg relative overflow-hidden h-full min-h-96">
        <CardHeader className="relative h-[200px] overflow-hidden">
          {coverImage === null ? (
            <Image
              src="/assets/bg-page-title.jpg"
              fill
              alt=""
              className="hover:scale-110 transition-all ease-linear duration-200"
            />
          ) : (
            <Image
              src={urlForImage(coverImage.asset).url()}
              fill
              alt=""
              className="hover:scale-110 transition-all ease-linear duration-200"
              placeholder="blur"
              blurDataURL={coverImage.metadata.lqip}
            />
          )}
        </CardHeader>
        <CardContent className="flex flex-col h-auto flex-shrink flex-grow justify-start p-4 space-y-4">
          <motion.h6 className="text-secondary font-semibold text-base md:text-md lg:text-xl">
            {title}
          </motion.h6>
          <motion.div className="flex flex-col items-start justify-start gap-1 text-sm text-truncate md:text-md text-gray-500">
            {excerpt}
          </motion.div>
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
