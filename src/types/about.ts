import { Image, PortableTextBlock } from "sanity";

export type About = {
  id: string;
  title?: string;
  content: PortableTextBlock[];
  picture: BlockPicture;
  hasButton: boolean;
};

type BlockPicture = {
  hasPicture: boolean;
  url: Image;
  side: keyof typeof BlockSideType;
};

export enum BlockSideType {
  AFTER = "AFTER",
  BEFORE = "BEFORE",
}
