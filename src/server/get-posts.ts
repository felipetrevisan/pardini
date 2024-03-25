"use server";

import { sanityFetch } from "@/sanity/lib/fetch";
import { postQuery, postSlugsQuery, postsQuery } from "@/sanity/lib/queries";
import { Pagination, Post } from "@/types/post";

export async function getPosts({ skip, limit }: Pagination) {
  return sanityFetch<Post[]>({ query: postsQuery, params: { skip, limit } });
}

export async function getPost(slug: string) {
  return sanityFetch<Post>({ query: postQuery, params: { slug } });
}

export async function getPostsSlug() {
  return sanityFetch<{ slug: string }[]>({ query: postSlugsQuery });
}
