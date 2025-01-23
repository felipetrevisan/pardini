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
      validation: (Rule) => 
        Rule.required().warning("O título é obrigatório"),
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
      validation: (Rule) => 
        Rule.required().warning("A resposta é obrigatória"),
    }),
    defineField({
      name: "show_home",
      title: "Show In Home?",
      type: "boolean",
      initialValue: false,
      validation: (Rule) => 
        Rule.required().warning("Esse campo precisa ser preenchido"),
    }),
  ],
  preview: {
    select: {
      title: "title",
    },
    prepare(selection) {
      const { title } = selection;
      return {
        title: title ?? "Pergunta sem título",
      };
    },
  },
});
