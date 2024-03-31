import { PortableTextBlock } from "sanity";
import { SanityAsset } from "./sanityAssets";

export type About = {
  id: string;
  title?: string;
  content: PortableTextBlock[];
  picture: BlockPicture;
  hasButton: boolean;
};

type BlockPicture = {
  hasPicture: boolean;
  image: SanityAsset;
  side: keyof typeof BlockSideType;
};

export enum BlockSideType {
  AFTER = "AFTER",
  BEFORE = "BEFORE",
}
