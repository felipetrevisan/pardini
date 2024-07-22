import { groq } from "next-sanity";

export const siteConfigQuery = groq`
  *[ _type == 'siteConfig' ][0] {
    title,
    description,
    "whatsappUrl": whatsapp_url,
    "primaryNavigation": main_nav-> {
      "items": items[] {
        "id": _key,
        "hasSubmenu": has_submenu,
        "label": navigation_label,
        "columns": submenu_columns,
        "submenu": navigation_submenu_items[] {
          "label": navigation_label,
          "url": navigation_item_url {
            "type": link_type,
            "path": path_uri,
            "usePath": use_page_path_uri,
            "externalUrl": external_url
          }
        },
        "url": navigation_item_url {
          "type": link_type,
          "path": path_uri,
          "usePath": use_page_path_uri,
          "externalUrl": external_url
        }
      }
    },
    "socialNavigation": social_nav-> {
      "items": social_items[] {
        "id": _key,
        "url": social_network_url,
        "label": social_network_label,
        "icon": social_network_icon,
        
      }
    },
    "featured": featured_items[]-> {
      "id": _id,
      title,
      subtitle,
      "image": background_image {
        "asset": asset,
        "metadata": {
          "lqip": asset->metadata.lqip,
          "dimensions": asset->metadata.dimensions
        }
      }
    }
  }
`;

export const aboutQuery = groq`
  *[ _type == 'about' ] | order(order asc) { 
    "id": _id,
    title,
    content,
    "picture": {
      "hasPicture": has_block_picture,
      "image": picture {
        "asset": asset,
        "metadata": {
          "lqip": asset->metadata.lqip,
          "dimensions": asset->metadata.dimensions
        }
      },
      "side": picture_block_side
    },
    "hasButton": has_button
  }
`;

export const faqQuery = groq`
  *[ _type == 'faq' ] { 
    "id": _id,
    title,
    answer,
    "showHome": show_home,
  }
`;

export const servicesQuery = groq`
  *[ _type == 'service' ] | order(order asc) { 
    "id": _id,
    title,
    icon,
    type,
    excerpt,
    description,
    "buttons": {
      "hasSeeMoreButton": has_see_more_button,
      "linkSeeMore": link_see_more,
      "hasWhatsappButton": has_whatsapp_button,
      "whatsappButtonLabel": whatsapp_button_label,
      "linkWhatsappButton": link_whatsapp_button
      }
  }
`;

export const testimonialsQuery = groq`
  *[ _type == 'testimonial' ] | order(order asc) { 
    "id": _id,
    "author": {
      "name": author_name,
      "avatar": author_avatar {
        "asset": asset,
        "metadata": {
          "lqip": asset->metadata.lqip,
          "dimensions": asset->metadata.dimensions
        }
      }
    },
    "showHome": show_home,
    type,
    testimonial,
    video
  }
`;

const postFields = groq`
  "id": _id,
  "status": select(_originalId in path("drafts.**") => "draft", "published"),
  "title": coalesce(title, "Sem Título"),
  "slug": slug.current,
  excerpt,
  body,
  coverImage {
    "asset": asset,
    "metadata": {
      "lqip": asset->metadata.lqip,
      "dimensions": asset->metadata.dimensions
    }
  },
  "date": coalesce(date, publishedAt),
  "author": author->{"name": coalesce(name, "Anonimo"), picture},
  "tags": tags[]-> {"id": _id,title},
  "categories": categories[]-> {"id": _id,title,slug},
`;

export const postsQuery = groq`{
  "items": *[_type == "post" && defined(slug.current)] | order(date desc, publishedAt desc) [($pageIndex * $pageSize)...($pageIndex + 1) * $pageSize] {
    ${postFields}
 },
  "pagination": {
    "total": count(*[_type == "post" && defined(slug.current)]),
    "page": $pageIndex + 1,
  }
}`;

export const postQuery = groq`*[_type == "post" && slug.current == $slug] [0] {
  ${postFields}
}`;

export const postSlugsQuery = groq`*[_type == "post" && defined(slug.current)]{"slug": slug.current}`;
