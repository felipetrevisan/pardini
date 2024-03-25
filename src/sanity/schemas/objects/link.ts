import { MdLink, MdNavigation } from "react-icons/md";
import { defineField, defineType } from "sanity";

export default defineType({
  name: "link",
  title: "Link",
  type: "object",
  icon: MdLink,
  fields: [
    defineField({
      name: "link_type",
      title: "Link Type",
      type: "string",
      initialValue: "EXTERNAL",
      options: {
        list: [
          { title: "Internal", value: "INTERNAL" },
          { title: "External", value: "EXTERNAL" },
          { title: "Service Dialog", value: "SERVICE_DIALOG" },
        ],
        layout: "radio",
      },
      validation: (Rule) => Rule.required().warning(),
    }),
    defineField({
      name: "internal_link",
      title: "Internal Link",
      description: "Select pages for navigation",
      type: "reference",
      to: [{ type: "post" }],
      hidden: ({ parent }) =>
        parent?.link_type === "EXTERNAL" || parent?.link_type === "SERVICE_DIALOG",
      validation: (Rule) =>
        Rule.custom((field, context) =>
          context?.document?.link_type === "INTERNAL" && field === undefined
            ? "This field must not be empty."
            : true
        ).warning(),
    }),
    defineField({
      name: "use_page_path_uri",
      title: "Use Page Path URI",
      type: "boolean",
      initialValue: false,
      hidden: ({ parent }) =>
        parent?.link_type === "INTERNAL" || parent?.link_type === "SERVICE_DIALOG",
    }),
    defineField({
      name: "path_uri",
      title: "Page Path URI",
      description: "Paths URI need starts with a slash (/)",
      type: "string",
      hidden: ({ parent }) =>
        !parent?.use_page_path_uri ||
        parent?.link_type === "INTERNAL" ||
        parent?.link_type === "SERVICE_DIALOG",
      validation: (rule) =>
        rule
          .custom((field, context) => {
            // This would crash if we didn't check
            // for undefined values first
            return context?.document?.link_type === "EXTERNAL" &&
              context?.document?.use_page_path_uri &&
              !field?.startsWith("/")
              ? "Path need starts with slash"
              : true;
          })
          .warning(),
    }),
    defineField({
      name: "external_url",
      title: "External URL",
      description: "Use fully qualified URLS for external link",
      type: "url",
      hidden: ({ parent }) =>
        parent?.use_page_path_uri ||
        parent?.link_type === "INTERNAL" ||
        parent?.link_type === "SERVICE_DIALOG",
    }),
  ],
});
