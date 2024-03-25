import { MdInfoOutline } from "react-icons/md";
import { defineField, defineType } from "sanity";

export default defineType({
  name: "about",
  title: "Sobre a Pardini",
  icon: MdInfoOutline,
  type: "document",
  fields: [
    defineField({
      name: "title",
      title: "Title",
      type: "string",
    }),
    defineField({
      name: "order",
      title: "Display Order",
      type: "number",
      initialValue: 0,
      validation: (Rule) => Rule.required().min(0).max(100).warning(),
    }),
    defineField({
      name: "content",
      title: "Content",
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
      validation: (Rule) => Rule.required().warning(),
    }),
    defineField({
      name: "has_block_picture",
      title: "Has Block Picture",
      type: "boolean",
      initialValue: false,
      validation: (Rule) => Rule.required().warning(),
    }),
    defineField({
      name: "picture",
      title: "Picture",
      type: "image",
      hidden: ({ parent }) => !parent?.has_block_picture,
      validation: (Rule) =>
        Rule.custom((field, context) =>
          context?.document?.has_block_picture && field === undefined
            ? "This field must not be empty."
            : true
        ).warning(),
    }),
    defineField({
      name: "picture_block_side",
      title: "Picture Side",
      type: "string",
      options: {
        list: [
          { title: "Before Content", value: "BEFORE" },
          { title: "After Content", value: "AFTER" },
        ],
        layout: "radio",
      },
      hidden: ({ parent }) => !parent?.has_block_picture,
      validation: (Rule) =>
        Rule.custom((field, context) =>
          context?.document?.has_block_picture && field === undefined
            ? "This field must not be empty."
            : true
        ).warning(),
    }),
    defineField({
      name: "has_button",
      title: "Has Button?",
      type: "boolean",
      initialValue: false,
      validation: (Rule) => Rule.required().warning(),
    }),
    defineField({
      name: "button_label",
      title: "Button Label",
      type: "string",
      hidden: ({ parent }) => !parent?.has_button,
      validation: (Rule) =>
        Rule.custom((field, context) =>
          context?.document?.has_button && field === undefined
            ? "This field must not be empty."
            : true
        ).warning(),
    }),
    defineField({
      name: "link_button",
      title: "Button Link",
      type: "url",
      hidden: ({ parent }) => !parent?.has_button,
      validation: (Rule) =>
        Rule.custom((field, context) =>
          context?.document?.has_button && field === undefined
            ? "This field must not be empty."
            : true
        ).warning(),
    }),
  ],
  preview: {
    select: {
      title: "title",
    },
    prepare(selection) {
      const { title } = selection;

      return {
        title: title ?? "Conteúdo sem titulo",
      };
    },
  },
});
