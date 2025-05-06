import { useQuery } from '@tanstack/react-query';
import { Faq } from '@/types/faq';
import { getFaq } from '@/server/get-faq';

export function useFaq() {
	const { data, isLoading, isPending } = useQuery<Faq[]>({
		queryKey: ['faq'],
		queryFn: () => getFaq(),
	});

	return { data, isLoading, isPending };
}
