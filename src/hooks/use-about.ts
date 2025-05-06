import { useQuery } from '@tanstack/react-query';
import { About } from '@/types/about';
import { getAboutContent } from '@/server/get-about';

export function useAbout(initialData: About[]) {
	const { data, isLoading, isPending } = useQuery<About[]>({
		queryKey: ['about'],
		queryFn: () => getAboutContent(),
		initialData,
	});

	return { data, isLoading, isPending };
}
