"use client";

import { Poppins } from "next/font/google";
import { Header } from "@/components/Header";
import { AppProvider } from "@/hooks/useApp";
import { Content } from "@/components/Content";
import { Body } from "@/components/Body";
import { Footer } from "@/components/Footer";

import "./globals.css";
import { ThemeProvider } from "@/theme-provider";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

// export const metadata = {
//   title: "Pardini Cidadania",
//   description:
//     "Site profissional da atriz Victória Rocha. DRT 31506 - SP. Teatro, Cinema e TV",
// };

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${poppins.className}`}>
      <ThemeProvider attribute="class" defaultTheme="light" enableSystem>
        <AppProvider>
          <Body>
            <Header />
            <Content>{children}</Content>
            <Footer />
          </Body>
        </AppProvider>
      </ThemeProvider>
    </html>
  );
}
