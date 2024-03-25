"use client";

import { motion } from "framer-motion";
import * as App from "@/components/app";
import { usePosts } from "@/hooks/usePosts";
import { Post } from "./post";

type BlogPaginationProps = {
  pageCount: number;
  pageSize: number;
  pageIndex: number;
};

type BlogPostQuery = {
  pageIndex: number;
  pageSize: number;
};

export function Blog({ pageIndex, pageSize }: BlogPostQuery) {
  // const createQueryString = useCallback(
  //   (name: string, value: string) => {
  //     const params = new URLSearchParams(searchParams.toString());
  //     params.set(name, value);

  //     return params.toString();
  //   },
  //   [searchParams]
  // );

  const { data } = usePosts({ skip: "", limit: pageSize });

  return (
    <motion.div
      layout
      className="h-full w-screen flex flex-col mb-20 space-y-20"
      data-section="blog"
    >
      <App.PageHeader>Blog</App.PageHeader>
      <div className="container grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
        {data?.map((post) => <Post {...post} />)}
      </div>
    </motion.div>
  );
}
