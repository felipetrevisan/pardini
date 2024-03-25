import { MdGridView, MdSettings } from "react-icons/md";
import { StructureBuilder } from "sanity/structure";

// Render a custom UI to view siteconfig & pages
// and showing other items except mentioed in the hiddendoctypes
const structure = (S: StructureBuilder) =>
  S.list()
    .title("Content Manager")
    .items([
      S.listItem()
        .title("Blog")
        .icon(MdGridView)
        .child(
          S.list()
            // Sets a title for our new list
            .title("Blog")
            // Add items to the array
            // Each will pull one of our new singletons
            .items([
              S.listItem().title("Post").child(S.documentTypeList("post")),
              S.listItem().title("Author").child(S.documentTypeList("author")),
              S.listItem().title("Category").child(S.documentTypeList("category")),
            ])
        ),
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
      // We also need to remove the new singletons from the main list
      ...S.documentTypeListItems().filter(
        (listItem) =>
          ![
            "post",
            "author",
            "category",
            "siteConfig",
            "navigation",
            "featured",
          ].includes(listItem.getId()!)
      ),
    ]);

export default structure;
