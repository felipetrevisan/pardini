import { type SchemaTypeDefinition } from "sanity";

import blockContent from "./schemas/blog/blockContent";
import category from "./schemas/blog/category";
import post from "./schemas/blog/post";
import author from "./schemas/blog/author";
import tag from "./schemas/blog/tag";

import service from "./schemas/services";
import faq from "./schemas/faq";
import testimonial from "./schemas/testimonials";
import about from "./schemas/about";
import siteConfig from "./schemas/siteConfig";
import featured from "./schemas/featured";

import navigation from "./schemas/navigation";
import navigationItem from "./schemas/objects/navigationItem";
import navigationSubmenuItem from "./schemas/objects/navigationSubmenuItem";
import link from "./schemas/objects/link";

// Social media schema
import socialNetworksItem from "./schemas/objects/socialNetworksItem";

// Define and export schema
export const schema: { types: SchemaTypeDefinition[] } = {
  types: [
    post,
    author,
    category,
    tag,
    blockContent,

    service,
    faq,
    testimonial,
    about,
    siteConfig,
    featured,

    navigation,
    navigationItem,
    navigationSubmenuItem,
    link,

    socialNetworksItem,
  ],
};
