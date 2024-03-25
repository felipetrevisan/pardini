import { Image } from "sanity";
import { PortableTextBlock } from "@portabletext/react";

export type Post = {
  id: string;
  status: "draft" | "published";
  title: string;
  slug: string;
  excerpt?: string | null;
  body: PortableTextBlock;
  coverImage?: Image | null;
  date: string;
  author: Author;
  categories?: Category[] | null;
};

export type Author = {
  name: string;
  picture?: Image | null;
};

export type Category = {
  title: string;
  slug: string;
};

export type Pagination = {
  skip: string;
  limit: number;
};
