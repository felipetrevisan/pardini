import { About as AboutComponent } from "@/components/Sections/About";
import { TransitionEffect } from "@/components/ui/TransitionEffect";

export default function About() {
  return (
    <>
      <TransitionEffect />
      <section
        id="about"
        className="section about relative flex min-h-full w-screen items-center justify-center bg-white"
      >
        <AboutComponent />
      </section>
    </>
  );
}
