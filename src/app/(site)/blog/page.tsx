import { Fragment } from "react";
import { z } from "zod";
import { Blog } from "./blog";

const blogPageSearchParams = z.object({
  pageIndex: z.coerce.number().default(0),
  pageSize: z.coerce.number().default(10),
});

export type BlogPageSearchParams = z.infer<typeof blogPageSearchParams>;

export default async function Page({ searchParams }: { searchParams: BlogPageSearchParams }) {
  const query = blogPageSearchParams.parse(searchParams);

  return (
    <Fragment>
      <section
        id="blog"
        className="section relative flex min-h-full w-screen items-center justify-center bg-white"
      >
        <Blog {...query} />
      </section>
    </Fragment>
  );
}
