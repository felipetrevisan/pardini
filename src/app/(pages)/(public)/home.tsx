"use client";

import { Home as HomeComponent } from "@/components/sections/home";
import { About as AboutComponent } from "@/components/sections/about";
import { Services as ServicesComponent } from "@/components/sections/services";
import { Testimonials as TestimonialsComponent } from "@/components/sections/testimonials";
import { Faq as FaqComponent } from "@/components/sections/faq";
import { Fragment } from "react";

import { Site } from "@/types/site";

export default function Home({ featured }: Site) {
  return (
    <Fragment>
      <section id="home" className="section relative flex items-center justify-center">
        <HomeComponent images={featured ?? []} />
      </section>
      <section
        id="about"
        className="section relative flex min-h-full items-center justify-center bg-white rounded-t-3xl z-[1] -mt-24"
      >
        <AboutComponent />
      </section>
      <section
        id="services"
        className="section relative flex min-h-full items-center justify-center bg-pattern bg-cover bg-no-repeat bg-white"
      >
        <ServicesComponent />
      </section>
      <section
        id="testimonials"
        className="section relative flex min-h-full items-center justify-center bg-white"
      >
        <TestimonialsComponent />
      </section>
      <section
        id="faqs"
        className="section relative flex min-h-full items-center justify-center bg-faq lg:bg-faq-blend lg:bg-blend-multiply lg:bg-[cover,50vw] lg:bg-position-y-center-center lg:bg-repeat-no-repeat"
      >
        <FaqComponent />
      </section>
    </Fragment>
  );
}
