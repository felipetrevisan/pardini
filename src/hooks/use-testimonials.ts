import { sanityFetch } from '@/sanity/lib/fetch';
import { testimonialsQuery } from '@/sanity/lib/queries';
import type { Testimonial } from '@/types/testimonial';
import { useQuery } from '@tanstack/react-query';

export function useTestimonials() {
	const { data, isLoading, isPending } = useQuery<Testimonial[]>({
		queryKey: ['testimonials'],
		queryFn: () => sanityFetch({ query: testimonialsQuery }),
	});

	return { data, isLoading, isPending };
}
