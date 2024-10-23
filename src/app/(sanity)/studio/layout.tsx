import { Inter } from "next/font/google";

import "../../globals.scss";

const inter = Inter({
  subsets: ["latin"],
  weight: ["200", "300", "400", "500", "600", "700"],
  variable: "--inter",
});

export const metadata = {
  title: {
    template: "%s | Pardini Cidadania",
    absolute: "Pardini Cidadania",
  },
};

export default function StudioLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${inter.className}`} suppressHydrationWarning>
      <body className="antialiased">{children}</body>
    </html>
  );
}
