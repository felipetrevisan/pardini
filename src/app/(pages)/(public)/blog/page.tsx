import { Fragment } from "react";
import { z } from "zod";
import { Blog } from "./blog";
import { getPosts } from "@/server/get-posts";

const blogPageSearchParams = z.object({
  pageIndex: z.coerce.number().default(0),
  pageSize: z.coerce.number().default(20),
});

export type BlogPageSearchParams = z.infer<typeof blogPageSearchParams>;

export default async function Page({ searchParams }: { searchParams: BlogPageSearchParams }) {
  const query = blogPageSearchParams.parse(searchParams);

  const posts = await getPosts({ pageIndex: query.pageIndex, pageSize: query.pageSize });

  return (
    <Fragment>
      <section
        id="blog"
        className="section relative flex flex-col min-h-full w-screen items-center justify-center bg-white"
      >
        <Blog {...query} initialData={posts} />
      </section>
    </Fragment>
  );
}
