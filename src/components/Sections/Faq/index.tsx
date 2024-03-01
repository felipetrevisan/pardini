import { Suspense } from "react";
import Image from "next/image";

import { Title } from "@/components/ui/Title";
import { Questions } from "./questions";
import { Loading } from "./loading";
import { getFaq } from "@/services/faq";

export async function Faq() {
  const { content } = await getFaq();

  return (
    <div className="h-full w-screen flex my-20" data-section="faq">
      <div className="container flex flex-col md:flex-row lg:flex-row items-center justify-start gap-12">
        <div className="w-full lg:w-1/2 flex justify-center items-center">
          <div className="relative flex justify-center">
            <Image
              src="/assets/passport.png"
              alt=""
              width={600}
              height={600}
              className="max-w-[70%] lg:max-w-full"
            />
          </div>
        </div>
        <div className="w-full lg:w-1/2 flex flex-col gap-5">
          <Title className="uppercase">Perguntas frequentes</Title>
          <h2 className="ms-7 text-2xl font-semibold">
            Veja algumas perguntas frequentes <br /> de{" "}
            <span className="text-secondary">nossos clientes</span>
          </h2>
          <Suspense fallback={<Loading />}>
            <Questions anwsers={content ?? []} />
          </Suspense>
        </div>
      </div>
    </div>
  );
}
