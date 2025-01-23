import { Metadata } from "next";
import FacebookPixel from "@/components/facebook-pixel";
import { env } from "@/config/env";
import "../../globals.scss";

export async function generateMetadata(): Promise<Metadata> {
  return {
    robots: {
      index: false,
      follow: false,
    },
  };
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return children;
}
