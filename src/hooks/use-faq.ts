import { getFaq } from '@/server/get-faq';
import type { Faq } from '@/types/faq';
import { useQuery } from '@tanstack/react-query';

export function useFaq() {
	const { data, isLoading, isPending } = useQuery<Faq[]>({
		queryKey: ['faq'],
		queryFn: () => getFaq(),
	});

	return { data, isLoading, isPending };
}
