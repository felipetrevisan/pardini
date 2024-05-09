import { Button } from "@/components/ui/button";
import * as App from "@/components/app";
import Link from "next/link";

export default function Page() {
  return (
    <div className="relative flex flex-col items-center justify-evenly bg-white m-10 md:max-w-4xl w-[80vw] max-h-[540px] h-full rounded-2xl shadow-xl z-10 p-8 gap-10">
      <App.Title className="text-xl md:text-2xl lg:text-3xl">Cidadania Italiana com a Pardini</App.Title>
      <iframe
        width="560"
        height="315"
        src="https://www.youtube-nocookie.com/embed/YcV9KMDoieM?si=tyx60rzq_VEStkXB"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerPolicy="strict-origin-when-cross-origin"
        allowFullScreen
        className="rounded-2xl aspect-video w-full md:w-auto"
      ></iframe>
      <div className="flex justify-center items-center flex-col gap-2">
        <h4 className="font-bold text-secondary text-md uppercase drop-shadow-text shadow-secondary/20">
          Ficou com dúvidas?
        </h4>
        <Link href="https://wa.link/5nhsvg" passHref target="_blank">
          <Button variant="whatsapp" size="2xl" rounded="2xl" hover="effect">
            Entre em contato conosco
          </Button>
        </Link>
      </div>
    </div>
  );
}
