import * as App from "@/components/app";
import { Questions } from "./questions";

export async function Faq() {
  return (
    <div className="container h-full w-screen flex my-20 relative" data-section="faq">
      <div className="container flex flex-col items-center md:items-end justify-center">
        <div className="grid grid-cols-[80vw] lg:grid-cols-[repeat(2,minmax(0,22vw))] xl:grid-cols-[repeat(2,minmax(0,20vw))] lg:col-start-1 lg:col-end-2">
          <div className="lg:col-span-2">
            <App.Title>Perguntas frequentes</App.Title>
            <App.Subtitle>
              Veja algumas perguntas frequentes <br /> de{" "}
              <span className="text-secondary">nossos clientes</span>
            </App.Subtitle>
            <Questions />
          </div>
        </div>
      </div>
    </div>
  );
}
