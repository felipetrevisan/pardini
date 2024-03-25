import { type SchemaTypeDefinition } from "sanity";

import blockContent from "./schemas/blog/blockContent";
import category from "./schemas/blog/category";
import post from "./schemas/blog/post";
import author from "./schemas/blog/author";

import service from "./schemas/services";
import faq from "./schemas/faq";
import testimonial from "./schemas/testimonials";
import about from "./schemas/about";
import siteConfig from "./schemas/siteConfig";
import navigation from "./schemas/navigation";
import navigationItem from "./schemas/objects/navigationItem";
import link from "./schemas/objects/link";
import navigationSubmenuItem from "./schemas/objects/navigationSubmenuItem";
import featured from "./schemas/featured";
import socialNetworksItem from "./schemas/objects/socialNetworksItem";

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [
    post,
    author,
    category,
    blockContent,
    service,
    faq,
    testimonial,
    about,
    navigation,
    navigationItem,
    navigationSubmenuItem,
    link,
    featured,
    socialNetworksItem,
    siteConfig,
  ],
};
