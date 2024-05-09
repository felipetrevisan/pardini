"use client";

import { motion } from "framer-motion";
import * as App from "@/components/app";
import { usePost } from "@/hooks/usePosts";
import { urlForImage } from "@/sanity/lib/utils";
import { Skeleton } from "@/components/ui/skeleton";
import type { Post as PostType } from "@/types/post";
import { PostDetails } from "../details";
import { PortableText } from "@portabletext/react";
import { ChevronLeftCircle } from "lucide-react";
import Link from "next/link";
import { portableComponents } from "@/components/ui/portable-components";

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
        background={data.coverImage ? urlForImage(data.coverImage.asset)?.url() : undefined}
      >
        <div className="flex flex-row items-center gap-4">
          <MotionLink href="/blog" whileHover={{ scale: 1.2 }}>
            <ChevronLeftCircle />
          </MotionLink>{" "}
          {isLoading ? <Skeleton className="size-4" /> : data.title}
        </div>
      </App.PageHeader>
      <article className="container max-w-4xl md:max-w-7xl">
        <div className="flex flex-col justify-start items-start gap-10">
          <div className="flex flex-row justify-start bg-secondary/5 rounded-3xl w-full p-5">
            {isLoading ? (
              <Skeleton className="size-14 rounded-full" />
            ) : (
              <>{data.author && <PostDetails {...data.author} date={data.date} />}</>
            )}
          </div>
          <div className="flex flex-col space-y-2 p-2">
            {data.body && <PortableText value={data.body} components={portableComponents} />}
          </div>
        </div>
      </article>
    </motion.div>
  );
}
