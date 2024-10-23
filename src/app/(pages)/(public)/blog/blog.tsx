"use client";

import { motion } from "framer-motion";
import { usePosts } from "@/hooks/use-posts";
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
      className="h-full flex flex-col space-y-20 bg-white"
    >
      <div className="container flex flex-col gap-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
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
