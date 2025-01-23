import { MdPages } from "react-icons/md";
import { defineType } from "sanity";
import { fields } from "./base";

export default defineType({
  name: "journeyPage",
  title: "Journey Page",
  icon: MdPages,
  type: "document",
  fields: fields,

  preview: {
    select: {
      title: "title",
    },
    prepare(selection) {
      const { title } = selection;
      return {
        title: title ?? "Página sem título",
      };
    },
  }
});
