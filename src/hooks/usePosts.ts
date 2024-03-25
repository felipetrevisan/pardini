import { useQuery } from "@tanstack/react-query";
import { Post } from "@/types/post";
import { getPost, getPosts } from "@/server/get-posts";
import { Pagination } from "@/types/post";

export function usePosts({ skip, limit }: Pagination) {
  const { data, isLoading, isPending } = useQuery<Post[]>({
    queryKey: ["posts", skip, limit],
    queryFn: () => getPosts({ skip, limit }),
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
