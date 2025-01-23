import { SanityAsset } from "./sanityAssets";

export type Page = {
  id: string;
  title: string;
  slug: string;
  description?: string;
  video: string;
  hasButton: boolean;
  button?: {
    label?: string;
    link?: string;
  };
  background?: SanityAsset;
};
