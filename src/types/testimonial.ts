import { PortableTextBlock } from "sanity";
import { SanityAsset } from "./sanityAssets";

export type Testimonial = {
  id: string;
  author: {
    name: string;
    avatar: SanityAsset;
  };
  showHome: boolean;
  type: keyof typeof TestimonialType;
  testimonial?: PortableTextBlock[];
  video?: string;
};

export enum TestimonialType {
  TEXT = "TEXT",
  VIDEO = "VIDEO",
}
