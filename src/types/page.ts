import { SanityAsset } from "./sanityAssets";

export type Page = {
  id: string;
  title: string;
  slug: string;
  description?: string;
  video: {
    url: string;
    id: string;
  };
  footer: {
    hasButton: boolean;
    hasTitle: boolean;
    title?: string;
    button?: {
      label?: string;
      link?: string;
    };
  };
  background?: SanityAsset;
};
