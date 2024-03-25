"use client";

import { motion } from "framer-motion";
import * as App from "@/components/app";
import { usePost } from "@/hooks/usePosts";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { urlForImage } from "@/sanity/lib/utils";
import Image from "next/image";
import { Skeleton } from "@/components/ui/skeleton";
import type { Post as PostType } from "@/types/post";
import { getWordInitials } from "@/lib/utils";
import { PostDetails } from "../details";
import { PortableText } from "@portabletext/react";
import { ChevronLeftCircle } from "lucide-react";
import Link from "next/link";

const MotionLink = motion(Link);

export function Post({ initialData, slug }: { initialData: PostType; slug: string }) {
  const { data, isLoading } = usePost(slug, initialData);

  return (
    <motion.div
      layout
      className="h-full w-screen flex flex-col mb-20 space-y-20"
      data-section="blog"
    >
      <App.PageHeader
        background={
          data.coverImage ? urlForImage(data.coverImage)?.height(800).width(1000).url() : undefined
        }
      >
        <div className="flex items-center gap-4">
          <MotionLink href="/blog" whileHover={{ scale: 1.2 }}>
            <ChevronLeftCircle />
          </MotionLink>{" "}
          {isLoading ? <Skeleton className="size-4" /> : data.title}
        </div>
      </App.PageHeader>
      <article className="container">
        <div className="flex flex-col justify-start items-start space-y-24">
          <div className="flex flex-col">
            {isLoading ? (
              <Skeleton className="size-14 rounded-full" />
            ) : (
              <>{data.author && <PostDetails {...data.author} date={data.date} />}</>
            )}
          </div>
          {data.body && <PortableText value={data.body} />}
        </div>
      </article>
    </motion.div>
  );
}
