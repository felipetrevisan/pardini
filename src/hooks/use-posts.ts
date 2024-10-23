import { useQuery } from "@tanstack/react-query";
import { Post, Posts } from "@/types/post";
import { getPost, getPosts } from "@/server/get-posts";
import { PaginationQuery } from "@/types/post";

export function usePosts({
  pageIndex,
  pageSize,
  initialData,
}: PaginationQuery & { initialData: Posts }) {
  const { data, isLoading, isPending } = useQuery<Posts>({
    queryKey: ["posts", pageIndex, pageSize],
    queryFn: () => getPosts({ pageIndex, pageSize }),
    initialData,
  });

  return { data, isLoading, isPending };
}

export function usePost(slug: string, initialData: Post) {
  const { data, isLoading, isPending } = useQuery<Post>({
    queryKey: ["post", slug],
    queryFn: () => getPost(slug),
    initialData,
  });

  return { data, isLoading, isPending };
}
