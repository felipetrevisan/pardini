import { Fragment } from "react";
import { About } from "./about";
import { getAboutContent } from "@/server/get-about";

// export const metadata: Metadata = {
//   title: "Sobre nós",
//   description: "",
// };

export default async function Page() {
  const content = await getAboutContent();

  return (
    <Fragment>
      <section
        id="about"
        className="section relative flex flex-col min-h-full w-screen items-center justify-center bg-white"
      >
        <About initialData={content} />
      </section>
    </Fragment>
  );
}
