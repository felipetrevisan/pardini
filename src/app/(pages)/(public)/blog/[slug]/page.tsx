import type { Metadata, ResolvingMetadata } from "next";
import { notFound } from "next/navigation";
import { z } from "zod";
import { motion } from "framer-motion";
import { sanityFetch } from "@/sanity/lib/fetch";
import * as App from "@/components/app";
import { getPost, getPostsSlug } from "@/server/get-posts";
import { resolveOpenGraphImage, urlForImage } from "@/sanity/lib/utils";
import { postQuery } from "@/sanity/lib/queries";
import type { Post as PostType } from "@/types/post";
import { Post } from "./post";
import { Skeleton } from "@/components/ui/skeleton";

const blogPageParams = z.object({
  params: z.object({
    slug: z.string(),
  }),
});

export type BlogPageParams = z.infer<typeof blogPageParams>;

export async function generateStaticParams() {
  return getPostsSlug();
}

export async function generateMetadata(
  { params }: BlogPageParams,
  parent: ResolvingMetadata
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

export default async function Page({ params: { slug } }: BlogPageParams) {
  const post = await getPost(slug);

  if (!post.id) {
    return notFound();
  }

  return (
    <section className="relative flex flex-col min-h-full items-center justify-center">
      <Post initialData={post} slug={slug} />
    </section>
  );
}
