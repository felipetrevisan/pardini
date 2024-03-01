import { notionClient } from "@/lib/notion-client";
import { Service, ServiceType } from "@/types/services";

export async function getServices(type: "HAVING" | "NOT_HAVING") {
  const pageIdByServiceType = ServiceType[type];

  const { results } = await notionClient.databases.query({
    database_id: pageIdByServiceType,
    sorts: [
      {
        property: "Order",
        direction: "descending",
      },
    ],
  });

  async function transform(service: any): Promise<Service> {
    return {
      id: service.id,
      icon: service.properties.Icon.rich_text?.[0]?.plain_text ?? null,
      title: service.properties.Title.title?.[0]?.plain_text ?? null,
      excerpt: service.properties.Excerpt.rich_text?.[0]?.text.content ?? null,
      description: service.properties.Description.rich_text?.[0]?.text.content ?? null,
    };
  }

  const content = await Promise.all(
    results.reverse().map(async (service: any) => {
      return await transform(service);
    }),
  );

  return { content };
}
