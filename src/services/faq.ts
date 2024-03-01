import { notionClient } from "@/lib/notion-client";
import { Faq } from "@/types/faq";

export async function getFaq() {
  const { results } = await notionClient.databases.query({
    database_id: "6cada98140d64f94bc1b9e784f86232b",
  });

  async function transform(faq: any): Promise<Faq> {
    return {
      id: faq.id,
      title: faq.properties.Question.title?.[0]?.plain_text ?? null,
      content: faq.properties.Answer.rich_text?.[0]?.text.content ?? null,
      showInHome: faq.properties.Default.checkbox ?? false,
    };
  }

  const content = await Promise.all(
    results.map(async (faq: any) => {
      return await transform(faq);
    }),
  );

  return { content };
}
