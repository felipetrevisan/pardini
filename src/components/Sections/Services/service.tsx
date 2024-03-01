"use client";

import { useState } from "react";
import { AnimatePresence } from "framer-motion";
import type { Service } from "@/types/services";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselPrevious,
  CarouselNext,
} from "@/components/ui/carousel";
import { Item } from "./item";

type Props = {
  servicesHaving: Service[];
  servicesNotHaving: Service[];
};

export function ServicesItems({ servicesHaving, servicesNotHaving }: Props) {
  return (
    <AnimatePresence initial={false}>
      <Tabs defaultValue="dont-have-citizenship">
        <TabsList className="grid w-full grid-cols-2">
          <TabsTrigger value="dont-have-citizenship">
            Ainda não tenho cidadania
          </TabsTrigger>
          <TabsTrigger value="already-have-citizenship">
            Já tenho cidadania
          </TabsTrigger>
        </TabsList>
        <TabsContent value="dont-have-citizenship" className="w-full">
          <Carousel>
            <CarouselContent>
              {servicesHaving?.map(({ id, icon, title, excerpt, description }) => (
                <CarouselItem
                  className="basis-1/2 md:basis-1/2 lg:basis-1/3 xl:basis-1/4"
                  key={id}
                >
                  <Item icon={icon} title={title} description={description}>
                    <p className="line-clamp-4">{excerpt}</p>
                  </Item>
                </CarouselItem>
              ))}
              {/* 
              <CarouselItem
                    className="basis-1/2 md:basis-1/2 lg:basis-1/3 xl:basis-1/4"
                    key={id}
                  >
                    <Item icon={Scale} title="Via judicial contra a fila">
                      <p className="line-clamp-4">
                        Melhor opção pata obter a sua cidadania sem precisar ir
                        à Itália ou aguardar anos na fila do consulado. <br />
                        Preparação dos documentos, ajuizamento e acompanhamento
                        do processo do começo ao fim.
                      </p>
                    </Item>
                  </CarouselItem>
              <CarouselItem className="basis-1/2 md:basis-1/2 lg:basis-1/3 xl:basis-1/4">
                <Item icon={Landmark} title="Via judicial materna (1948)">
                  <p className="line-clamp-4">
                    Análise e preparação dos documentos no Brasil, orientação
                    ajuizamento e acompanhamento da ação judicial na Itália
                    feito por uma advogada italiana.
                  </p>
                </Item>
              </CarouselItem>
              <CarouselItem className="basis-1/2 md:basis-1/2 lg:basis-1/3 xl:basis-1/4">
                <Item icon={Building} title="Via consulado">
                  <p className="line-clamp-4">
                    Análise e preparação dos documentos no Brasil e orientação
                    para a entrega e pedido via consulado.
                  </p>
                </Item>
              </CarouselItem>
              <CarouselItem className="basis-1/2 md:basis-1/2 lg:basis-1/3 xl:basis-1/4">
                <Item
                  icon={Building}
                  title="Consultoria on-line para reconhecimento na Itália"
                >
                  <p className="line-clamp-4">
                    Tenha orientação e consultoria para fazer o seu processo
                    sozinho na Itália. <br />
                    Avaliamos o seu caso individual e montamos juntos um plano
                    de execução e suporte em todas as etapas.
                  </p>
                </Item>
              </CarouselItem>
              <CarouselItem className="basis-1/2 md:basis-1/2 lg:basis-1/3 xl:basis-1/4">
                <Item icon={SearchCheck} title="Pesquisa Genealógica">
                  <p className="line-clamp-4">
                    Para você que está começando agora.
                    <br />
                    Pesquisa genealógica para resgatar informações sobre a sua
                    família e encontrar os dados de todos os documentos
                    necessários para o processo.
                  </p>
                </Item>
              </CarouselItem>
              <CarouselItem className="basis-1/2 md:basis-1/2 lg:basis-1/3 xl:basis-1/4">
                <Item icon={FileCheck2} title="Busca de documentos na Itália">
                  <p className="line-clamp-4">
                    Para você que já localizou a certidão do seu italiano e
                    precisa do documento físico. Busca e apostilamento do
                    documento na Itália (nascimento, batismo e casamento).
                  </p>
                </Item>
              </CarouselItem>
              <CarouselItem className="basis-1/2 md:basis-1/2 lg:basis-1/3 xl:basis-1/4">
                <Item icon={FileSearch} title="Análise de documentos">
                  <p className="line-clamp-4">
                    Análise minuciosa de todas as certidões do processo,
                    relatório detalhado e orientações para a execução das
                    retificações necessárias.
                  </p>
                </Item>
              </CarouselItem>
              <CarouselItem className="basis-1/2 md:basis-1/2 lg:basis-1/3 xl:basis-1/4">
                <Item icon={Folders} title="Montagem da pasta de documentos">
                  <p className="line-clamp-4">
                    Para você que não quer ter trabalho algum com os documentos
                    do Brasil.
                    <br />
                    Preparação, análise, emissão, retificação, tradução e
                    apostilamento de todos os documentos necessários para o
                    reconhecimento da sua cidadania.
                  </p>
                </Item>
              </CarouselItem> */}
            </CarouselContent>
            <div className="relative flex justify-end mt-4">
              <CarouselPrevious className="relative top-0 left-0 translate-y-0" />
              <CarouselNext className="relative top-0 right-0 translate-y-0" />
            </div>
          </Carousel>
        </TabsContent>
        <TabsContent value="already-have-citizenship" className="w-full">
          <Carousel>
            <CarouselContent>
              {servicesNotHaving?.map(({ id, icon, title, excerpt, description }) => (
                <CarouselItem
                  className="basis-1/2 md:basis-1/2 lg:basis-1/3 xl:basis-1/4"
                  key={id}
                >
                  <Item icon={icon} title={title} description={description}>
                    <p className="line-clamp-4">{excerpt}</p>
                  </Item>
                </CarouselItem>
              ))}
              {/* <CarouselItem className="basis-1/2 md:basis-1/2 lg:basis-1/3 xl:basis-1/4">
                <Item icon={BookOpen} title="Emissão do passaporte italiano">
                  <p className="line-clamp-4">
                    Assistência completa para primeira via ou renovação do
                    passaporte italiano na Itália, ou nos consulados.
                  </p>
                </Item>
              </CarouselItem>
              <CarouselItem className="basis-1/2 md:basis-1/2 lg:basis-1/3 xl:basis-1/4">
                <Item
                  icon={FastForward}
                  title="Inscrição e atualização do AIRE"
                >
                  <p className="line-clamp-4">
                    Assessoria para inscrição e atualização dos dados cadastrais
                    no sistema FAST IT para italianos residentes no exterior.
                  </p>
                </Item>
              </CarouselItem>
              <CarouselItem className="basis-1/2 md:basis-1/2 lg:basis-1/3 xl:basis-1/4">
                <Item icon={Users} title="Cidadania para filhos menores">
                  <p className="line-clamp-4">
                    Preparação dos documentos, assessoria e orientação para o
                    reconhecimento da cidadania de filhos menores de 18 anos, na
                    Itália ou nos consulados.
                  </p>
                </Item>
              </CarouselItem>
              <CarouselItem className="basis-1/2 md:basis-1/2 lg:basis-1/3 xl:basis-1/4">
                <Item icon={Connection} title="Naturalização por matrimônio">
                  <p className="line-clamp-4">
                    Preparação dos documentos, assessoria e orientação para o
                    processo de naturalização para cônjuge de cidadão italiano.
                  </p>
                </Item>
              </CarouselItem> */}
            </CarouselContent>
          </Carousel>
        </TabsContent>
      </Tabs>
      {/* <Accordion
        type="single"
        collapsible
        onValueChange={(value) => setCurrentItem(value)}
      >
        {anwsers
          ?.filter((faq) => faq.showInHome)
          .map(({ id, title, content }) => (
            <AccordionItem key={id} className="" value={id}>
              <AccordionTrigger>
                <span>{title}</span>
              </AccordionTrigger>
              <AccordionContent className="relative px-4 pb-8 pt-0">
                {currentItem === id && (
                  <motion.section
                    initial="collapsed"
                    animate="open"
                    exit="collapsed"
                    variants={{
                      open: { opacity: 1, height: "auto" },
                      collapsed: { opacity: 0, height: 0 },
                    }}
                    transition={{
                      duration: 0.8,
                      ease: [0.04, 0.62, 0.23, 0.98],
                    }}
                    dangerouslySetInnerHTML={{ __html: content }}
                  />
                )}
              </AccordionContent>
            </AccordionItem>
          ))}
      </Accordion>

      <Button variant="secondary" size="xl" rounded="full" hover="effect">
        Veja mais perguntas frequentes
      </Button> */}
    </AnimatePresence>
  );
}
