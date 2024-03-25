import { useQuery } from "@tanstack/react-query";
import { Testimonial } from "@/types/testimonial";
import { sanityFetch } from "@/sanity/lib/fetch";
import { testimonialsQuery } from "@/sanity/lib/queries";

export function useTestimonials() {
  const { data, isLoading, isPending } = useQuery<Testimonial[]>({
    queryKey: ["testimonials"],
    queryFn: () => sanityFetch({ query: testimonialsQuery }),
  });

  return { data, isLoading, isPending };
}
