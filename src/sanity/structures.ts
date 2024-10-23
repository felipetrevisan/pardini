import { MdGridView, MdSettings } from "react-icons/md";
import { StructureBuilder } from "sanity/structure";

const structure = (S: StructureBuilder) =>
  S.list()
    .title("Content Manager")
    .items([
      // Blog section
      S.listItem()
        .title("Blog")
        .icon(MdGridView)
        .child(
          S.list()
            .title("Blog")
            .items([
              S.listItem().title("Post").child(S.documentTypeList("post")),
              S.listItem().title("Author").child(S.documentTypeList("author")),
              S.listItem().title("Category").child(S.documentTypeList("category")),
            ])
        ),

      // Settings section
      S.listItem()
        .title("Settings")
        .icon(MdSettings)
        .child(
          S.list()
            .title("Settings")
            .items([
              S.listItem()
                .title("Config")
                .child(S.document().schemaType("siteConfig").documentId("siteConfig")),
              S.listItem().title("Navigation").child(S.documentTypeList("navigation")),
              S.listItem().title("Featured Content").child(S.documentTypeList("featured")),
            ])
        ),

      S.divider(),

      ...S.documentTypeListItems().filter(
        (listItem) =>
          !["post", "author", "category", "siteConfig", "navigation", "featured"].includes(
            listItem.getId() || ""
          )
      ),
    ]);

export default structure;
