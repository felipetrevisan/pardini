import { Fragment } from "react";
import { Contact } from "./contact";
export default function Page() {

  return (
    <Fragment>
      <section
        id="contact"
        className="section relative flex flex-col min-h-full w-screen items-center justify-center bg-white"
      >
        <Contact />
      </section>
    </Fragment>
  );
}
