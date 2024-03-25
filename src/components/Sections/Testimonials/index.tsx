import * as App from "@/components/app";
import { Items } from "./items";

export function Testimonials() {
  return (
    <div className="h-full w-screen flex my-20" data-section="testimonials">
      <div className="container w-full flex flex-col gap-14">
        <div className="flex flex-col">
          <App.Title>Depoimentos</App.Title>
          <App.Subtitle>
            O que{" "}
            <span className="text-primary drop-shadow-[0px_1px_2px_var(--tw-shadow-color)] shadow-slate-200">
              nossos clientes
            </span>{" "}
            dizem sobre nós
          </App.Subtitle>
        </div>
        <Items />
      </div>
    </div>
  );
}
