import { MdQuestionMark } from "react-icons/md";
import { defineField, defineType } from "sanity";

export default defineType({
  name: "faq",
  title: "Perguntas Frequentes",
  icon: MdQuestionMark,
  type: "document",
  fields: [
    defineField({
      name: "title",
      title: "Title",
      type: "string",
      validation: (Rule) => Rule.required().warning(),
    }),
    defineField({
      name: "answer",
      title: "Answer",
      type: "array",
      of: [
        {
          type: "block",
          styles: [],
          marks: {
            decorators: [
              { title: "Strong", value: "strong" },
              { title: "Emphasis", value: "em" },
              { title: "Underline", value: "underline" },
            ],
          },
        },
      ],
      validation: (Rule) => Rule.required().warning(),
    }),
    defineField({
      name: "show_home",
      title: "Show In Home?",
      type: "boolean",
      initialValue: false,
      validation: (Rule) => Rule.required().warning(),
    }),
  ],
});
