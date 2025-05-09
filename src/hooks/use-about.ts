import { getAboutContent } from '@/server/get-about';
import type { About } from '@/types/about';
import { useQuery } from '@tanstack/react-query';

export function useAbout(initialData: About[]) {
	const { data, isLoading, isPending } = useQuery<About[]>({
		queryKey: ['about'],
		queryFn: () => getAboutContent(),
		initialData,
	});

	return { data, isLoading, isPending };
}
