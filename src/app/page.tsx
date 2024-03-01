import { Home as HomeComponent } from "@/components/Sections/Home";
import { About as AboutComponent } from "@/components/Sections/About";
import { Services as ServicesComponent } from "@/components/Sections/Services";
import { Solutions as SolutionsComponent } from "@/components/Sections/Solutions";
import { Testimonials as TestimonialsComponent } from "@/components/Sections/Testimonials";
import { Faq as FaqComponent } from "@/components/Sections/Faq";
import { TriangleDivider } from "@/components/ui/SectionDivider/Triangle";

export default function Home() {
  return (
    <>
      <section
        id="home"
        className="section home relative flex items-center justify-center"
      >
        <HomeComponent />
      </section>
      {/* <CurveDownDivider color="#23190b" className="w-[610px]" /> */}
      <section
        id="about"
        className="section about relative flex min-h-full items-center justify-center bg-white
        before:absolute before:-top-[50px] before:bg-[length:unset] before:bg-separator before:left-0 before:w-full before:h-[50px]"
      >
        <AboutComponent />
      </section>
      {/* <TriangleDivider transparent={false} /> */}
      <section
        id="services"
        className="section services relative flex min-h-full items-center justify-center bg-pattern bg-white before:absolute after:absolute before:top-full before:left-0 after:left-0 before:-z-[1] after:-z-[1] before:h-[90px] after:h-[90px] before:bg-primary-dark after:bg-primary-dark before:w-full before:rounded-tr-[90px]
        after:bottom-0 after:w-1/2"
      >
        <ServicesComponent />
      </section>
      <section
        id="solutions"
        className="section solutions relative flex min-h-full items-center justify-center bg-white"
      >
        <SolutionsComponent />
      </section>
      <TriangleDivider transparent={false} />
      <section
        id="testimonials"
        className="section testimonials relative flex min-h-full items-center justify-center bg-white
        before:-left-[25px] before:w-[291px] before:h-[279px] before:absolute before:bg-auto before:bg-no-repeat before:bg-honeycomb after:absolute after:bg-section-divider after:bg-[50%] after:right-0 after:left-0 after:bottom-0 ater:z-[10] after:h-[90px] after:bg-[length:50px_100%] after:rotate-180"
      >
        <TestimonialsComponent />
      </section>
      <section
        id="faqs"
        className="section faqs relative flex min-h-full items-center justify-center bg-vacation"
      >
        <FaqComponent />
      </section>
    </>
  );
}
