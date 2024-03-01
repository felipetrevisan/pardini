"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Title } from "@/components/ui/Title";
import { Button } from "@/components/ui/button";
import { ChevronLeftIcon, ChevronRightIcon } from "lucide-react";
import Link from "next/link";

export function About() {
  return (
    <>
      {/* <TransitionEffect /> */}
      <motion.div
        layout
        className="h-full w-screen flex flex-col lg:flex-row my-20"
        data-section="about"
      >
        <div className="container flex flex-col-reverse lg:flex-row items-center justify-start gap-1">
          <div className="w-full lg:w-1/2 flex justify-center items-center">
            <div className="relative w-[436px]">
              <Image src="/assets/about.png" alt="" width={436} height={436} />
            </div>
          </div>
          <div className="w-full lg:w-1/2 flex flex-col gap-5">
            <Title className="uppercase text-4xl">A Pardini</Title>
            <p className="font-extralight">
              Não somos apenas uma empresa, somos pessoas que, assim como você,
              escolhemos mudar as nossas vidas, e para nós, a cidadania italiana
              foi uma ferramenta importante neste percurso. Acima de tudo, nossa
              missão é oferecer a você a oportunidade de mudar sua vida, seguir
              seus sonhos, e viver o novo da forma como você quiser. <br />
              <br /> Não apenas te auxiliar no reconhecimento da sua cidadania
              italiana, nossa intenção é te levar mais além, para que você possa
              descobrir dentro de você todas as oportunidades que te rodeiam.
            </p>
            <Link href="/about" passHref>
              <Button
                variant="default"
                size="xl"
                rounded="xl"
                hover="effect"
                className="flex items-center justify-between gap-2"
              >
                Saiba mais sobre nós
                <ChevronRightIcon fontSize={10} />
              </Button>
            </Link>
          </div>
        </div>
      </motion.div>
    </>
  );
}
