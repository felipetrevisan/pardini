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
      title: "Nome do Autor",
      type: "string",
      validation: (Rule) => Rule.required().warning("O nome do autor é obrigatório."),
    }),
    defineField({
      name: "author_avatar",
      title: "Avatar do Autor",
      type: "image",
      options: {
        hotspot: true,
      },
    }),
    defineField({
      name: "order",
      title: "Ordem de Exibição",
      type: "number",
      initialValue: 0,
      validation: (Rule) =>
        Rule.required()
          .min(0)
          .max(100)
          .warning("A ordem de exibição é obrigatória e deve ser entre 0 e 100."),
    }),
    defineField({
      name: "show_home",
      title: "Exibir na Página Inicial?",
      type: "boolean",
      initialValue: false,
      validation: (Rule) => Rule.required().warning("Este campo é obrigatório."),
    }),
    defineField({
      name: "type",
      title: "Tipo de Depoimento",
      type: "string",
      options: {
        list: [
          { title: "Texto", value: "TEXT" },
          { title: "Vídeo", value: "VIDEO" },
        ],
        layout: "radio",
      },
      validation: (Rule) =>
        Rule.required().warning("Selecione o tipo de depoimento (Texto ou Vídeo)."),
    }),
    defineField({
      name: "testimonial",
      title: "Depoimento",
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
          context?.document?.type === "TEXT" && !field
            ? "Este campo é obrigatório quando o tipo for Texto."
            : true
        ).warning(),
    }),
    defineField({
      name: "video",
      title: "URL do Vídeo",
      type: "url",
      hidden: ({ parent }) => parent?.type !== "VIDEO",
      validation: (Rule) =>
        Rule.custom((field, context) =>
          context?.document?.type === "VIDEO" && !field
            ? "Este campo é obrigatório quando o tipo for Vídeo."
            : true
        )
          .uri({
            scheme: ["http", "https"],
          })
          .warning("Insira uma URL de vídeo válida."),
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
      title: "Tipo",
      name: "typeDesc",
      by: [{ field: "type", direction: "desc" }],
    },
    {
      title: "Ordem",
      name: "orderAsc",
      by: [{ field: "order", direction: "asc" }],
    },
  ],
});
