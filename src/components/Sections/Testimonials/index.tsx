import { Suspense } from "react";
import { getTestimonialsFromNotion } from "@/lib/notion-client";
import { Title } from "@/components/ui/Title";
import { Items } from "./items";

export async function Testimonials() {
  const { content } = await getTestimonialsFromNotion();

  return (
    <>
      {/* <TransitionEffect /> */}
      <div className="h-full w-screen flex my-20" data-section="testimonials">
        <div className="container flex items-center justify-start gap-1">
          <div className="w-full flex flex-col">
            <Title className="uppercase">Depoimentos</Title>
            <h2 className="ms-7 text-2xl font-semibold">
              O que <span className="text-secondary">nossos clientes</span>{" "}
              dizem sobre nós
            </h2>
            <div className="w-full mt-10">
              <Suspense fallback={<p>Loading</p>}>
                <Items data={content.filter(faq => faq.showInHome) ?? []} />
              </Suspense>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
