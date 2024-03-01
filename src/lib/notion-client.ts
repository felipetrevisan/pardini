import { Client, isFullBlock } from "@notionhq/client";
import { ToggleBlockObjectResponse } from "@notionhq/client/build/src/api-endpoints";
import { Testimonial } from "@/types/testimonial";

export const notionClient = new Client({ auth: process.env.NOTION_API_KEY });

export async function getTestimonialsFromNotion() {
  const { results } = await notionClient.databases.query({
    database_id: "ec44556a902d49709e79fa8c29dd6d3a",
  });

  async function transformDTO(testimonial: any): Promise<Testimonial> {
    return {
      id: testimonial.id,
      name: testimonial.properties.Name.title?.[0]?.plain_text ?? null,
      testimonial:
        testimonial.properties.Testimonial.rich_text?.[0]?.text.content ?? null,
      picture: testimonial.properties.Picture.files?.[0]?.file.url ?? "placeholder",
      showInHome: testimonial.properties.Default.checkbox ?? false,
    };
  }

  const content = await Promise.all(
    results.map(async (testimonial: any) => {
      return await transformDTO(testimonial);
    }),
  );

  return { content };
}
