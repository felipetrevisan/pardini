"use client";

import { Title } from "@/components/ui/Title";
import { Item } from "./item";

import "swiper/css";
import "swiper/css/navigation";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";

export function Solutions() {
  return (
    <>
      {/* <TransitionEffect /> */}
      <div className="h-full w-screen flex my-20" data-section="solutions">
        <div className="container flex items-center justify-start gap-1">
          <div className="w-full flex flex-col gap-14">
            <Title className="uppercase">Nossas Soluções</Title>
            <div className="w-full flex justify-center">
              <Carousel>
                <CarouselContent>
                  <CarouselItem className="basis-1/2 md:basis-1/2 lg:basis-1/3 xl:basis-1/4">
                    <Item
                      src="https://pardinicidadania.com/wp-content/uploads/2023/08/1.png"
                      title="Guia em busca das suas origens"
                    >
                      <p>
                        Um curso prático com aulas e material didático, para que
                        você encontre a certidão de nascimento do seu
                        antepassado italiano e inicie o seu processo de
                        reconhecimento da cidadania.
                      </p>
                    </Item>
                  </CarouselItem>
                  <CarouselItem className="basis-1/2 md:basis-1/2 lg:basis-1/3 xl:basis-1/4">
                    <Item
                      src="https://pardinicidadania.com/wp-content/uploads/2023/08/1.png"
                      title="E-book gratuito: Você italiano"
                    >
                      <p>
                        Tudo o que você precisa saber sobre a cidadania italiana
                        e os requisitos para iniciar o seu processo.
                      </p>
                      <p>
                        Com este e-book você vai entender as vantagens, as
                        formas que você tem de reconhecer a cidadania italiana e
                        ter todas as suas dúvidas respondidas
                      </p>
                    </Item>
                  </CarouselItem>
                  <CarouselItem className="basis-1/2 md:basis-1/2 lg:basis-1/3 xl:basis-1/4">
                    <Item
                      src="https://pardinicidadania.com/wp-content/uploads/2023/08/1.png"
                      title="Consultoria Online"
                    >
                      <p>
                        Tenha orientação e consultoria para fazer o seu processo
                        sozinho na Itália.
                      </p>
                      <p>
                        Avaliamos o seu caso individual e montamos juntos um
                        plano de execução e suporte em todas as etapas.
                      </p>
                    </Item>
                  </CarouselItem>
                </CarouselContent>
                {/* <CarouselPrevious />
                  <CarouselNext /> */}
              </Carousel>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
