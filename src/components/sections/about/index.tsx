"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import * as App from "@/components/app";
import { Button } from "@/components/ui/button";
import { ChevronRightIcon } from "lucide-react";
import Link from "next/link";
import "./styles.scss";

export function About() {
  return (
    <motion.div
      layout
      className="container h-full w-screen flex flex-col lg:flex-row my-20"
      data-section="about"
    >
      <div className="container flex flex-col lg:flex-row items-center justify-around gap-10">
        <div className="size-full md:size-[436px] max-w-[436px] max-h-[436px] flex justify-center items-center relative">
          <Image src="/assets/about.png" alt="" width={436} height={436} />
        </div>
        <div className="w-full lg:w-1/2 flex flex-col gap-5">
          <App.Title className="text-2xl md:text-4xl">A Pardini</App.Title>
          <p className="font-medium text-justify md:text-start">
            Não somos apenas uma empresa, somos pessoas que, assim como você, escolhemos mudar as
            nossas vidas, e para nós, a cidadania italiana foi uma ferrasssenta importante neste
            percurso. Acima de tudo, nossa missão é oferecer a você a oportunidade de mudar sua
            vida, seguir seus sonhos, e viver o novo da forma como você quiser. <br />
            <br /> Não apenas te auxiliar no reconhecimento da sua cidadania italiana, nossa
            intenção é te levar mais além, para que você possa descobrir dentro de você todas as
            oportunidades que te rodeiam.
          </p>
          <Link href="/quem-somos" passHref>
            <Button
              variant="default"
              size="xl"
              rounded="full"
              hover="effect"
              shadow
              className="flex items-center justify-between gap-2 w-full md:w-auto"
            >
              Saiba mais sobre nós
              <ChevronRightIcon fontSize={10} />
            </Button>
          </Link>
        </div>
      </div>
    </motion.div>
  );
}
