import { Metadata } from "next";
import { SpeedInsights } from "@vercel/speed-insights/next";

import { Inter } from "next/font/google";

import "../globals.css";
import Providers from "./providers";
import { getSiteConfig } from "@/server/get-site-config";

const inter = Inter({
  subsets: ["latin"],
  weight: ["200", "300", "400", "500", "600", "700"],
  variable: "--inter",
});

export async function generateMetadata(): Promise<Metadata> {
  const settings = await getSiteConfig();
  const title = settings?.title || "Pardini Cidadania";
  const description = settings?.description || "";

  return {
    title: {
      template: `%s | ${title}`,
      default: title,
    },
    description,
  };
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${inter.className}`} suppressHydrationWarning>
      <body className="antialiased">
        <Providers>{children}</Providers>
        <SpeedInsights />
      </body>
    </html>
  );
}
