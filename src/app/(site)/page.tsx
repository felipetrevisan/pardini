import { Home as HomeComponent } from "@/components/sections/home";
import { About as AboutComponent } from "@/components/sections/about";
import { Services as ServicesComponent } from "@/components/sections/services";
import { Testimonials as TestimonialsComponent } from "@/components/sections/testimonials";
import { Faq as FaqComponent } from "@/components/sections/faq";
import { Fragment } from "react";
import { getSiteConfig } from "@/server/get-site-config";

export default async function Page() {
  const settings = await getSiteConfig();

  return (
    <Fragment>
      <section
        id="home"
        className="section relative flex items-center justify-center after:absolute after:bottom-0 after:bg-[length:unset] after:bg-separator after:left-0 after:w-full after:h-[50px] after:z-50"
      >
        <HomeComponent images={settings.featured ?? []} />
      </section>
      <section
        id="about"
        className="section relative flex min-h-full items-center justify-center bg-white"
      >
        <AboutComponent />
      </section>
      {/* <TriangleDivider transparent={false} /> */}
      <section
        id="services"
        className="section relative flex min-h-full items-center justify-center bg-pattern bg-cover bg-no-repeat bg-white"
      >
        <ServicesComponent />
      </section>
      {/* <TriangleDivider transparent={false} /> */}
      <section
        id="testimonials"
        className="section relative flex min-h-full items-center justify-center bg-white"
      >
        <TestimonialsComponent />
      </section>
      <section
        id="faqs"
        className="section relative flex min-h-full items-center justify-center bg-vacation"
      >
        <FaqComponent />
      </section>
    </Fragment>
  );
}
