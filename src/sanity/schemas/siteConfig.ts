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
      validation: (Rule) => Rule.required().warning("O título do site é obrigatório."),
    }),
    defineField({
      name: "description",
      title: "Site Description",
      type: "string",
      validation: (Rule) => Rule.required().warning("A descrição do site é obrigatória."),
    }),
    defineField({
      name: "main_nav",
      title: "Main Navigation",
      description: "Selecione o menu para a navegação principal do site.",
      type: "reference",
      to: { type: "navigation" },
      validation: (Rule) =>
        Rule.custom((field, context) =>
          !context?.document?.main_nav && !context?.document?.social_nav
            ? "A navegação principal ou social deve estar configurada."
            : true
        ).warning(),
    }),
    defineField({
      name: "social_nav",
      title: "Social Navigation",
      description: "Selecione o menu para a navegação social do site.",
      type: "reference",
      to: { type: "navigation" },
      validation: (Rule) =>
        Rule.custom((field, context) =>
          !context?.document?.main_nav && !context?.document?.social_nav
            ? "A navegação social ou principal deve estar configurada."
            : true
        ).warning(),
    }),
    defineField({
      name: "featured_items",
      title: "Featured Items",
      description: "Selecione os itens em destaque para o carrossel da página inicial.",
      type: "array",
      of: [
        {
          type: "reference",
          to: [{ type: "featured" }],
        },
      ],
    }),
    defineField({
      name: "whatsapp_url",
      title: "Whatsapp URL Button",
      type: "url",
      description: "Insira a URL para o botão de contato do WhatsApp.",
      validation: (Rule) =>
        Rule.required()
          .uri({
            scheme: ["https", "http"],
          })
          .warning("A URL do WhatsApp deve ser um link válido, começando com http ou https."),
    }),
  ],
});
