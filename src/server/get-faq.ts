"use server";

import { sanityFetch } from "@/sanity/lib/fetch";
import { faqQuery } from "@/sanity/lib/queries";
import { Faq } from "@/types/faq";

export async function getFaq() {
  return sanityFetch<Faq[]>({ query: faqQuery });
}
