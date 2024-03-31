import { PortableTextBlock } from "@portabletext/react";
import { SanityAsset } from "./sanityAssets";
import { SanityAssetSource } from "@sanity/asset-utils";

export type Posts = {
  items: Post[];
  pagination: Pagination;
}

export type Post = {
  id: string;
  status: "draft" | "published";
  title: string;
  slug: string;
  excerpt?: string | null;
  body: PortableTextBlock;
  coverImage: SanityAsset;
  date: string;
  author: Author;
  categories?: Category[] | null;
};

export type Author = {
  name: string;
  picture?: SanityAssetSource | null;
};

export type Category = {
  title: string;
  slug: string;
};

export type Pagination = {
  total: number;
  page: number;
}

export type PaginationQuery = {
  pageIndex: number;
  pageSize: number;
};
