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
      validation: (Rule) => Rule.required().warning("O título é obrigatório"),
    }),
    defineField({
      name: "slug",
      title: "Slug",
      type: "slug",
      options: {
        source: "title",
        maxLength: 96,
      },
      validation: (Rule) => Rule.required().warning("O slug é obrigatório"),
    }),
    defineField({
      name: "is_social_network",
      title: "Is Social Network?",
      type: "boolean",
      initialValue: false,
      validation: (Rule) =>
        Rule.required().warning("É necessário especificar se é uma rede social"),
    }),
    defineField({
      name: "items",
      title: "Navigation items",
      type: "array",
      of: [{ type: "navigationItem" }],
      hidden: ({ parent }) => !!parent?.is_social_network,
      validation: (Rule) => 
        Rule.custom((items, context) => {
          const isSocial = context?.document?.is_social_network ?? false;
          if (!isSocial && (!items || items.length === 0)) {
            return "A navegação deve conter ao menos um item quando não for uma rede social.";
          }
          return true;
        }).warning(),
    }),
    defineField({
      name: "social_items",
      title: "Social Network items",
      type: "array",
      of: [{ type: "socialNetworksItem" }],
      hidden: ({ parent }) => !(parent?.is_social_network),
      validation: (Rule) => 
        Rule.custom((items, context) => {
          const isSocial = context?.document?.is_social_network ?? false;
          if (isSocial && (!items || items.length === 0)) {
            return "Deve haver ao menos um item de rede social quando for uma rede social.";
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
        title: title ?? "Navegação sem título",
      };
    },
  },
});
