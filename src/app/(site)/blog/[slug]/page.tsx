import { Fragment } from "react";
import { z } from "zod";
import { sanityFetch } from "@/sanity/lib/fetch";
import { getPost, getPostsSlug } from "@/server/get-posts";
import { resolveOpenGraphImage } from "@/sanity/lib/utils";
import type { Metadata, ResolvingMetadata } from "next";
import { postQuery } from "@/sanity/lib/queries";
import type { Post as PostType } from "@/types/post";
import { Post } from "./post";
import { notFound } from "next/navigation";

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
  const ogImage = post?.coverImage?.asset ? resolveOpenGraphImage(post.coverImage.asset) : undefined;

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
    <Fragment>
      <section
        id="blog"
        className="section relative flex min-h-full w-screen items-center justify-center bg-white"
      >
        <Post initialData={post} slug={slug} />
      </section>
    </Fragment>
  );
}
