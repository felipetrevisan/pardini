import { getSiteConfig } from "@/server/get-site-config";
import Home from "./home";

export default async function Page() {
  const settings = await getSiteConfig();

  return <Home {...settings} />;
}
