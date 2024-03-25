import { MdSettingsApplications } from "react-icons/md";
import { defineField, defineType } from "sanity";

export default defineType({
  name: "siteConfig",
  title: "Site Settings",
  icon: MdSettingsApplications,
  type: "document",
  fields: [
    defineField({
      name: "title",
      title: "Site Title",
      type: "string",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "description",
      title: "Site Description",
      type: "string",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "main_nav",
      title: "Main Navigation",
      description: "Select menu for main navigation",
      type: "reference",
      to: { type: "navigation" },
    }),
    defineField({
      name: "social_nav",
      title: "Social Navigation",
      description: "Select menu for social navigation",
      type: "reference",
      to: { type: "navigation" },
    }),
    defineField({
      name: "featured_items",
      title: "Featured Items",
      description: "Select featured items for carousel home",
      type: "array",
      of: [
        {
          type: "reference",
          to: [{ type: "featured" }],
        },
      ],
    }),
  ],
});
