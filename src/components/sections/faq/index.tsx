import Image from "next/image";

import * as App from "@/components/app";
import { Questions } from "./questions";

export async function Faq() {
  return (
    <div className="h-full w-screen flex my-20" data-section="faq">
      <div className="container flex flex-col md:grid md:grid-cols-2 items-center justify-start gap-12">
        <div className="md:w-full md:h-full md:flex md:justify-center md:items-center hidden md:relative">
          <div className="flex justify-center w-full h-full md:max-h-[440px] lg:max-h-[740px] relative md:absolute">
            <Image
              src="/assets/passport.png"
              alt=""
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            />
          </div>
        </div>
        <div className="w-full flex flex-col gap-5">
          <App.Title>Perguntas frequentes</App.Title>
          <App.Subtitle>
            Veja algumas perguntas frequentes <br /> de{" "}
            <span className="text-secondary">nossos clientes</span>
          </App.Subtitle>
          <Questions />
        </div>
      </div>
    </div>
  );
}
