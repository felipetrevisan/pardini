"use server";

import { sanityFetch } from "@/sanity/lib/fetch";
import { postQuery, postSlugsQuery, postsQuery } from "@/sanity/lib/queries";
import { PaginationQuery, Post, Posts } from "@/types/post";

export async function getPosts({ pageIndex, pageSize }: PaginationQuery) {
  return sanityFetch<Posts>({ query: postsQuery, params: { pageIndex, pageSize } });
}

export async function getPost(slug: string) {
  return sanityFetch<Post>({ query: postQuery, params: { slug } });
}

export async function getPostsSlug() {
  return sanityFetch<{ slug: string }[]>({ query: postSlugsQuery });
}
