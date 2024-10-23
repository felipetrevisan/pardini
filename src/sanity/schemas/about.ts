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
      title: "Título",
      type: "string",
      validation: (Rule) => Rule.required().warning("O título é obrigatório."),
    }),
    defineField({
      name: "order",
      title: "Ordem de Exibição",
      type: "number",
      initialValue: 0,
      validation: (Rule) =>
        Rule.required().min(0).max(100).warning("A ordem deve estar entre 0 e 100."),
    }),
    defineField({
      name: "content",
      title: "Conteúdo",
      type: "array",
      of: [
        {
          type: "block",
          marks: {
            decorators: [
              { title: "Negrito", value: "strong" },
              { title: "Ênfase", value: "em" },
              { title: "Código", value: "code" },
              {
                title: "Destaque",
                value: "highlight",
                icon: () => "H",
              },
            ],
          },
        },
      ],
      validation: (Rule) => Rule.required().warning("O conteúdo não pode estar vazio."),
    }),
    defineField({
      name: "has_block_picture",
      title: "Possui Bloco de Imagem?",
      type: "boolean",
      initialValue: false,
      validation: (Rule) => Rule.required().warning("Esse campo precisa ser preenchido."),
    }),
    defineField({
      name: "picture",
      title: "Imagem",
      type: "image",
      hidden: ({ parent }) => !parent?.has_block_picture,
      validation: (Rule) =>
        Rule.custom((field, context) => {
          if (context?.document?.has_block_picture && !field) {
            return "A imagem deve ser fornecida quando o bloco de imagem estiver ativado.";
          }
          return true;
        }).warning(),
    }),
    defineField({
      name: "picture_block_side",
      title: "Lado da Imagem",
      type: "string",
      options: {
        list: [
          { title: "Antes do Conteúdo", value: "BEFORE" },
          { title: "Depois do Conteúdo", value: "AFTER" },
        ],
        layout: "radio",
      },
      hidden: ({ parent }) => !parent?.has_block_picture,
      validation: (Rule) =>
        Rule.custom((field, context) => {
          if (context?.document?.has_block_picture && !field) {
            return "O lado da imagem deve ser selecionado quando o bloco de imagem estiver ativado.";
          }
          return true;
        }).warning(),
    }),
    defineField({
      name: "has_button",
      title: "Possui Botão?",
      type: "boolean",
      initialValue: false,
      validation: (Rule) => Rule.required().warning("Esse campo precisa ser preenchido."),
    }),
    defineField({
      name: "button_label",
      title: "Rótulo do Botão",
      type: "string",
      hidden: ({ parent }) => !parent?.has_button,
      validation: (Rule) =>
        Rule.custom((field, context) => {
          if (context?.document?.has_button && !field) {
            return "O botão precisa de um rótulo quando ativado.";
          }
          return true;
        }).warning(),
    }),
    defineField({
      name: "link_button",
      title: "Link do Botão",
      type: "url",
      hidden: ({ parent }) => !parent?.has_button,
      validation: (Rule) =>
        Rule.custom((field, context) => {
          if (context?.document?.has_button && !field) {
            return "O botão precisa de um link quando ativado.";
          }
          return true;
        }).warning(),
    }),
  ],
  preview: {
    select: {
      title: "title",
    },
    prepare(selection) {
      const { title } = selection;
      return {
        title: title ?? "Conteúdo sem título",
      };
    },
  },
});
