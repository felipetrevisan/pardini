import { Metadata } from "next";
import "../../globals.css";

export async function generateMetadata(): Promise<Metadata> {
  return {
    robots: {
      index: false,
      follow: false
    }
  };
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <main className="relative z-[1] h-screen w-screen flex items-center flex-col justify-center bg-family before:absolute before:w-screen before:h-screen before:z-[2] before:bg-black/80 before:backdrop-blur-sm">
      {children}
    </main>
  );
}
