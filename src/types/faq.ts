import { PortableTextBlock } from "sanity";

export type Faq = {
  id: string;
  title: string;
  answer: PortableTextBlock[];
  showHome: boolean;
};
