import { getServices } from '@/server/get-services';
import type { Service } from '@/types/services';
import { useQuery } from '@tanstack/react-query';

export function useServices() {
	const { data, isLoading, isPending } = useQuery<Service[]>({
		queryKey: ['services'],
		queryFn: () => getServices(),
	});

	return { data, isLoading, isPending };
}
