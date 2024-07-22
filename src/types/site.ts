import { SanityAsset } from "./sanityAssets";

export type Site = {
  id: string;
  title: string;
  description?: string;
  primaryNavigation?: Navigation;
  socialNavigation?: SocialNetwork;
  featured?: Featured[];
  whatsappUrl: string;
};

export type Navigation = {
  items: NavigationItem[];
};

export type SocialNetwork = {
  items: SocialNetworkItem[];
};

export type Featured = {
  id: string;
  title: string;
  subtitle: string;
  image: SanityAsset;
};

export type NavigationItem = {
  id: string;
  label: string;
  url: NavigationItemURL;
  hasSubmenu: boolean;
  columns?: number;
  submenu: NavigationItem[];
};

export type SocialNetworkItem = {
  id: string;
  label: string;
  url: string;
  icon: string;
};

export type NavigationItemURL = {
  usePath?: boolean;
  type: LinkType;
  path?: string;
  externalUrl?: string;
};

export enum LinkType {
  EXTERNAL = "EXTERNAL",
  INTERNAL = "INTERNAL",
  SERVICE_DIALOG = "SERVICE_DIALOG",
}
