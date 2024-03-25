import { Inter } from "next/font/google";
import * as App from "@/components/app";

import "../../globals.css";
import Providers from "../providers";
import { Metadata } from "next";

// export async function generateMetadata(): Promise<Metadata> {
//   const settings = await sanityFetch<SettingsQueryResponse>({
//     query: settingsQuery,
//     // Metadata should never contain stega
//     stega: false,
//   });
//   const title = settings?.title;
//   const description = settings?.description;

//   const ogImage = resolveOpenGraphImage(settings?.ogImage);
//   let metadataBase: URL | undefined = undefined;

//   try {
//     metadataBase = settings?.ogImage?.metadataBase
//       ? new URL(settings.ogImage.metadataBase)
//       : undefined;
//   } catch {
//     // ignore
//   }
//   return {
//     metadataBase,
//     title: {
//       template: `%s | ${title}`,
//       default: title,
//     },
//     description: toPlainText(description),
//     openGraph: {
//       images: ogImage ? [ogImage] : [],
//     },
//   };
// }

const inter = Inter({
  subsets: ["latin"],
  weight: ["200", "300", "400", "500", "600", "700"],
  variable: "--inter",
});

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return children;
}
