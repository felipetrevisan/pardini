"use client";

import { motion } from "framer-motion";
import * as App from "@/components/app";
import { usePosts } from "@/hooks/usePosts";
import { Post } from "./post";
import { Posts } from "@/types/post";
import { PostsPagination } from "./pagination";

type BlogPostQuery = {
  pageIndex: number;
  pageSize: number;
};

type BlogPostProps = {
  initialData: Posts;
} & BlogPostQuery;

export function Blog({ pageIndex, pageSize, initialData }: BlogPostProps) {
  const { data } = usePosts({ pageIndex, pageSize, initialData });

  return (
    <motion.div
      layout="size"
      className="h-full w-screen flex flex-col mb-10 md:mb-20 space-y-20"
      data-section="blog"
    >
      <App.PageHeader>Blog</App.PageHeader>
      <div className="container flex flex-col gap-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {data?.items?.map((post) => <Post {...post} key={post.id} />)}
        </div>
        <PostsPagination
          pageSize={pageSize}
          pageIndex={pageIndex}
          pageCount={data.pagination.total}
        />
      </div>
    </motion.div>
  );
}
