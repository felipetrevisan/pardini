import { MdLink } from "react-icons/md";
import { defineField, defineType } from "sanity";

export default defineType({
  name: "link",
  title: "Link",
  type: "object",
  icon: MdLink,
  fields: [
    defineField({
      name: "link_type",
      title: "Tipo de Link",
      type: "string",
      initialValue: "EXTERNAL",
      options: {
        list: [
          { title: "Interno", value: "INTERNAL" },
          { title: "Externo", value: "EXTERNAL" },
          { title: "Diálogo de Serviço", value: "SERVICE_DIALOG" },
        ],
        layout: "radio",
      },
      validation: (Rule) => Rule.required().warning("O tipo de link é obrigatório."),
    }),
    defineField({
      name: "internal_link",
      title: "Link Interno",
      description: "Selecione uma página para navegação",
      type: "reference",
      to: [{ type: "post" }],
      hidden: ({ parent }) => parent?.link_type !== "INTERNAL",
      validation: (Rule) =>
        Rule.custom((field, context) =>
          context?.document?.link_type === "INTERNAL" && !field
            ? "Este campo é obrigatório para links internos."
            : true
        ).warning(),
    }),
    defineField({
      name: "use_page_path_uri",
      title: "Usar URI do Caminho da Página",
      type: "boolean",
      initialValue: false,
      hidden: ({ parent }) => parent?.link_type !== "EXTERNAL",
    }),
    defineField({
      name: "path_uri",
      title: "URI do Caminho da Página",
      description: "O caminho deve começar com uma barra (/)",
      type: "string",
      hidden: ({ parent }) => !parent?.use_page_path_uri || parent?.link_type !== "EXTERNAL",
      validation: (Rule) =>
        Rule.custom((field, context) => {
          const isExternalLink = context?.document?.link_type === "EXTERNAL";
          const usesPagePath = context?.document?.use_page_path_uri;
          return isExternalLink && usesPagePath && (!field || !field.startsWith("/"))
            ? "O caminho precisa começar com uma barra (/)"
            : true;
        }).warning(),
    }),
    defineField({
      name: "external_url",
      title: "URL Externa",
      description: "Use uma URL totalmente qualificada para links externos",
      type: "url",
      hidden: ({ parent }) => parent?.use_page_path_uri || parent?.link_type !== "EXTERNAL",
      validation: (Rule) =>
        Rule.uri({
          scheme: ["http", "https"],
        }).warning("Insira uma URL externa válida."),
    }),
  ],
});
