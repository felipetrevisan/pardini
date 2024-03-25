import Image from "next/image";

import * as App from "@/components/app";
import { Questions } from "./questions";

export async function Faq() {
  return (
    <div className="h-full w-screen flex my-20" data-section="faq">
      <div className="container flex flex-col md:flex-row lg:flex-row items-center justify-start gap-12">
        <div className="w-full h-full lg:w-1/2 hidden md:flex justify-center items-center">
          <div className="flex justify-center max-w-[70%] lg:max-w-full w-full h-full relative">
            <Image
              src="/assets/passport.png"
              alt=""
              fill
              className="w-full h-full object-cover"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            />
          </div>
        </div>
        <div className="w-full lg:w-1/2 flex flex-col gap-5">
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
