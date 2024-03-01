"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import Link from "next/link";
import clsx from "clsx";
import { motion } from "framer-motion";
import { MailIcon } from "lucide-react";
import { useApp } from "@/hooks/useApp";
import { slideUpVariants } from "@/config/animation";
import { Logo } from "@/components/Logo";
import Image from "next/image";
import Autoplay from "embla-carousel-autoplay";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import { Button } from "@/components/ui/button";

export function Home() {
  const refHome = useRef<HTMLDivElement>(null);
  const { setCurrentSection, getSection, isMenuOpen } = useApp();

  useEffect(() => {
    setCurrentSection(getSection("/"));
  }, [getSection, setCurrentSection]);

  const classes = clsx("w-screen", {
    "backdrop-blur-sm": !isMenuOpen,
    "backdrop-blur-lg": isMenuOpen,
  });

  return (
    <>
      {/* <TransitionEffect /> */}
      <motion.div layout ref={refHome} className={classes} data-section="home">
        <div className="aspect-video md:aspect-[16/7] flex items-center justify-start space-y-1 relative before:w-full before:h-full before:bg-gradient-to-r before:from-black/70 before:via-secondary/40 before:to-transparent before:z-40">
          <Carousel
            className="w-full h-full"
            opts={{
              loop: true,
            }}
            plugins={[Autoplay()]}
          >
            <CarouselContent>
              <CarouselItem>
                <Image
                  src={`/assets/bg/bg-0.jpg`}
                  alt=""
                  fill
                  className="z-30"
                />
              </CarouselItem>
              <CarouselItem>
                <Image
                  src={`/assets/bg/bg-1.jpg`}
                  alt=""
                  fill
                  className="z-30"
                />
              </CarouselItem>
            </CarouselContent>
          </Carousel>

          <motion.div className="absolute flex items-start w-full z-50 px-20">
            <div className="flex flex-col space-y-6 md:items-start items-center justify-center">
              <motion.h4
                className="text-3xl text-secondary-foreground lg:text-5xl font-bold text-center md:text-start"
                variants={slideUpVariants}
                initial="initial"
                animate="animate"
              >
                Bem vindo à Pardini Cidadania
              </motion.h4>
              <motion.h2
                className="text-xl font-light text-secondary-foreground lg:text-3xl text-center md:text-start"
                variants={slideUpVariants}
                initial="initial"
                animate="animate"
              >
                Se torne um cidadão italiano <br /> e realize o seu sonho de
                viver na Europa
              </motion.h2>
              <Link href="/contact" passHref>
                <Button
                  variant="secondary"
                  size="xl"
                  rounded="full"
                  hover="effect"
                  className="flex items-center justify-center gap-2"
                >
                  <MailIcon fontSize={10} />
                  Entre em contato
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </>
  );
}
