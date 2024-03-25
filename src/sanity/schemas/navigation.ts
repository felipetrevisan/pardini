import { MdMenu } from "react-icons/md";
import { defineField, defineType } from "sanity";

export default defineType({
  name: "navigation",
  title: "Navigation",
  icon: MdMenu,
  type: "document",
  fields: [
    defineField({
      name: "title",
      title: "Title",
      type: "string",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "slug",
      title: "Slug",
      type: "slug",
      options: {
        source: "title",
        maxLength: 96,
      },
    }),
    defineField({
      name: "is_social_network",
      title: "Is Social Network?",
      type: "boolean",
      initialValue: false,
    }),
    defineField({
      name: "items",
      title: "Navigation items",
      type: "array",
      of: [{ type: "navigationItem" }],
      hidden: ({ parent }) => parent?.is_social_network,
    }),
    defineField({
      name: "social_items",
      title: "Social Network items",
      type: "array",
      of: [{ type: "socialNetworksItem" }],
      hidden: ({ parent }) => !parent?.is_social_network,
    }),
  ],
});
