import { MdNavigation } from "react-icons/md";
import { defineField, defineType } from "sanity";

export default defineType({
  name: "navigationItem",
  title: "Navigation Item",
  type: "object",
  icon: MdNavigation,
  fields: [
    defineField({
      name: "navigation_label",
      title: "Navigation Label",
      type: "string",
      validation: (Rule) => Rule.required().warning(),
    }),
    defineField({
      name: "has_submenu",
      title: "Has Submenu?",
      type: "boolean",
      initialValue: false,
    }),
    defineField({
      name: "navigation_submenu_items",
      title: "Navigation Submenu",
      type: "array",
      of: [{ type: "navigationSubmenuItem" }],
      hidden: ({ parent }) => !parent?.has_submenu,
    }),
    defineField({
      name: "navigation_item_url",
      title: "Navigation Item",
      type: "link",
      hidden: ({ parent }) => parent?.has_submenu,
      validation: (Rule) =>
        Rule.custom((field, context) =>
          !context?.document?.navigation_submenu_items && field === undefined
            ? "This field must not be empty."
            : true
        ).warning(),
    }),
  ],
});
