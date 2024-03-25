import { Image } from "sanity";

export type Testimonial = {
  id: string;
  author: {
    name: string;
    avatar: Image;
  },
  showHome: boolean;
  type: keyof typeof TestimonialType;
  testimonial?: string;
  video?: string;
};

export enum TestimonialType {
  TEXT = "TEXT",
  VIDEO = "VIDEO",
}
