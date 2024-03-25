import createImageUrlBuilder from "@sanity/image-url";
import type { Image } from "sanity";

import { dataset, projectId } from "../env";

const imageBuilder = createImageUrlBuilder({
  projectId: projectId || "",
  dataset: dataset || "",
});

export function urlForImage(source: Image) {
  return imageBuilder?.image(source).auto("format").fit("max");
}

export function resolveOpenGraphImage(image: Image, width = 1200, height = 627) {
  if (!image) return;

  const url = urlForImage(image)?.width(1200).height(627).fit("crop").url();

  if (!url) return;

  return { url, alt: image?.alt as string, width, height };
}

export function resolveHref(documentType?: string, slug?: string): string | undefined {
  switch (documentType) {
    case "post":
      return slug ? `/posts/${slug}` : undefined;
    default:
      console.warn("Invalid document type:", documentType);
      return undefined;
  }
}
