import { MdRequestQuote } from "react-icons/md";
import { defineField, defineType } from "sanity";

export default defineType({
  name: "testimonial",
  title: "Depoimentos",
  icon: MdRequestQuote,
  type: "document",
  fields: [
    defineField({
      name: "author_name",
      title: "Author Name",
      type: "string",
      validation: (Rule) => Rule.required().warning(),
    }),
    defineField({
      name: "author_avatar",
      title: "Author Avatar",
      type: "image",
    }),
    defineField({
      name: "order",
      title: "Display Order",
      type: "number",
      initialValue: 0,
      validation: (Rule) => Rule.required().min(0).max(100).warning(),
    }),
    defineField({
      name: "show_home",
      title: "Show In Home?",
      type: "boolean",
      initialValue: false,
      validation: (Rule) => Rule.required().warning(),
    }),
    defineField({
      name: "type",
      title: "Testimonial Type",
      type: "string",
      options: {
        list: [
          { title: "Texto", value: "TEXT" },
          { title: "Vídeo", value: "VIDEO" },
        ],
        layout: "radio",
      },
      validation: (Rule) => Rule.required().warning(),
    }),
    defineField({
      name: "testimonial",
      title: "Testimonial",
      type: "array",
      of: [
        {
          type: "block",
          lists: [],
          styles: [],
          marks: {
            decorators: [
              { title: "Strong", value: "strong" },
              { title: "Emphasis", value: "em" },
              { title: "Underline", value: "underline" },
            ],
            annotations: [],
          },
        },
      ],
      hidden: ({ parent }) => parent?.type !== "TEXT",
      validation: (Rule) =>
        Rule.custom((field, context) =>
          context?.document?.type === "TEXT" && field === undefined
            ? "This field must not be empty."
            : true
        ).warning(),
    }),
    defineField({
      name: "video",
      title: "Video URL",
      type: "url",
      hidden: ({ parent }) => parent?.type !== "VIDEO",
      validation: (Rule) =>
        Rule.custom((field, context) =>
          context?.document?.type === "VIDEO" && field === undefined
            ? "This field must not be empty."
            : true
        ).warning(),
    }),
  ],
  preview: {
    select: {
      title: "author_name",
      media: "author_avatar",
      subtitle: "type",
    },
    prepare(selection) {
      const { title, media, subtitle } = selection;
      return {
        title,
        media,
        subtitle: subtitle === "TEXT" ? "Texto" : "Vídeo",
      };
    },
  },
  orderings: [
    {
      title: "type",
      name: "typeDesc",
      by: [{ field: "type", direction: "desc" }],
    },
    {
      title: "order",
      name: "orderAsc",
      by: [{ field: "order", direction: "asc" }],
    },
  ],
});
