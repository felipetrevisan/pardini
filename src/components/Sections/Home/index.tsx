"use client";

import { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { MailIcon } from "lucide-react";
import { useApp } from "@/hooks/useApp";
import { slideUpVariants } from "@/config/animation";
import { Button } from "@/components/ui/button";
import { Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import { Drawer, DrawerTrigger } from "@/components/ui/drawer";
import { ContactFormDrawer } from "@/components/contact-form-drawer";
import { Featured } from "@/types/site";
import { urlForImage } from "@/sanity/lib/utils";
import Image from "next/image";

export function Home({ images }: { images: Featured[] }) {
  const refHome = useRef<HTMLDivElement>(null);
  const { setCurrentSection, getSection } = useApp();

  useEffect(() => {
    setCurrentSection(getSection("/"));
  }, [getSection, setCurrentSection]);

  return (
    <motion.div layout ref={refHome} className="w-screen" data-section="home">
      <div className="aspect-[1] md:aspect-[16/7] flex items-center justify-start space-y-1 relative bg-white shadow-xl">
        <Swiper
          slidesPerView={1}
          loop={true}
          autoplay={{
            delay: 5000,
            disableOnInteraction: true,
          }}
          modules={[Autoplay]}
          className="w-full h-full"
        >
          {images?.map(({ id, title, subtitle, image }) => (
            <SwiperSlide
              key={id}
              className="relative before:absolute before:z-[2] before:bg-gradient-to-r before:from-black/70 before:via-secondary/40 before:to-black/10 before:w-full before:h-full bg-primary"
            >
              {image && (
                <Image
                  className="h-auto w-full z-[1]"
                  alt=""
                  src={urlForImage(image).url()}
                  sizes="100vw"
                  fill
                />
              )}
              <div className="w-full h-full flex flex-row items-center px-10 md:px-20">
                <motion.div
                  className="flex flex-col items-start justify-start md:justify-center space-y-6 z-[3]"
                  variants={slideUpVariants}
                  initial="initial"
                  animate="animate"
                >
                  <motion.h2 className="text-2xl text-secondary-foreground md:text-5xl font-bold md:text-start drop-shadow-text shadow-black">
                    {title}
                  </motion.h2>
                  <motion.h3 className="text-xl font-medium text-secondary-foreground md:text-3xl md:text-start drop-shadow-text shadow-black line-clamp-2 max-w-2xl">
                    {subtitle}
                  </motion.h3>
                  <Drawer>
                    <DrawerTrigger asChild>
                      <Button
                        variant="secondary"
                        size="xl"
                        rounded="full"
                        hover="effect"
                        shadow
                        className="flex items-center justify-center gap-2"
                      >
                        <MailIcon fontSize={10} />
                        Entre em contato
                      </Button>
                    </DrawerTrigger>
                    <ContactFormDrawer onRequestClose={() => null} />
                  </Drawer>
                </motion.div>
              </div>
            </SwiperSlide>
          ))}
          {/* <SwiperSlide className="from-black/70 via-primary/40 to-black/10 bg-[linear-gradient(to_right,var(--tw-gradient-stops)),url(/assets/bg/bg-1.jpg)] bg-cover bg-center px-20">
            <div className="w-full h-full flex flex-row items-center">
              <motion.div
                className="flex flex-col items-start justify-center space-y-6"
                variants={slideUpVariants}
                initial="initial"
                animate="animate"
              >
                <motion.h2 className="text-3xl text-secondary-foreground lg:text-5xl font-bold text-center md:text-start drop-shadow-text shadow-black">
                  Bem vindo à Pardini Cidadania
                </motion.h2>
                <motion.h3 className="text-xl font-medium text-secondary-foreground lg:text-3xl text-center md:text-start drop-shadow-text shadow-black">
                  Sua cidadania italiana de forma simple. <br />
                  Nós cuidamos de toda burocracia para você.
                </motion.h3>
                <Drawer>
                  <DrawerTrigger>
                    <Button
                      variant="secondary"
                      size="xl"
                      rounded="full"
                      hover="effect"
                      shadow
                      className="flex items-center justify-center gap-2"
                    >
                      <MailIcon fontSize={10} />
                      Entre em contato
                    </Button>
                  </DrawerTrigger>
                  <ContactFormDrawer onRequestClose={() => null} />
                </Drawer>
              </motion.div>
            </div>
          </SwiperSlide>

          <SwiperSlide className="from-black/70 via-secondary/40 to-black/10 bg-[linear-gradient(to_right,var(--tw-gradient-stops)),url(/assets/bg/bg-2.jpg)] bg-cover bg-center px-20">
            <div className="w-full h-full flex flex-row items-center">
              <motion.div
                className="flex flex-col items-start justify-center space-y-6"
                variants={slideUpVariants}
                initial="initial"
                animate="animate"
              >
                <motion.h2 className="text-3xl text-secondary-foreground lg:text-5xl font-bold text-center md:text-start drop-shadow-text shadow-black">
                  Bem vindo à Pardini Cidadania
                </motion.h2>
                <motion.h3 className="text-xl font-medium text-secondary-foreground lg:text-3xl text-center md:text-start drop-shadow-text shadow-black">
                  Se torne um cidadão italiano <br /> e realize o seu sonho de viver na Europa.
                </motion.h3>
                <Drawer>
                  <DrawerTrigger>
                    <Button
                      variant="secondary"
                      size="xl"
                      rounded="full"
                      hover="effect"
                      shadow
                      className="flex items-center justify-center gap-2"
                    >
                      <MailIcon fontSize={10} />
                      Entre em contato
                    </Button>
                  </DrawerTrigger>
                  <ContactFormDrawer onRequestClose={() => null} />
                </Drawer>
              </motion.div>
            </div>
          </SwiperSlide>

          <SwiperSlide className="from-black/70 via-secondary/40 to-black/10 bg-[linear-gradient(to_right,var(--tw-gradient-stops)),url(/assets/bg/bg-3.jpg)] bg-cover bg-center px-20">
            <div className="w-full h-full flex flex-row items-center">
              <motion.div
                className="flex flex-col items-start justify-center space-y-6"
                variants={slideUpVariants}
                initial="initial"
                animate="animate"
              >
                <motion.h2 className="text-3xl text-secondary-foreground lg:text-5xl font-bold text-center md:text-start drop-shadow-text shadow-black">
                  Bem vindo à Pardini Cidadania
                </motion.h2>
                <motion.h3 className="text-xl font-medium text-secondary-foreground lg:text-3xl text-center md:text-start drop-shadow-text shadow-black">
                  Se torne um cidadão italiano <br /> e realize o seu sonho de viver na Europa.
                </motion.h3>
                <Drawer>
                  <DrawerTrigger>
                    <Button
                      variant="secondary"
                      size="xl"
                      rounded="full"
                      hover="effect"
                      shadow
                      className="flex items-center justify-center gap-2"
                    >
                      <MailIcon fontSize={10} />
                      Entre em contato
                    </Button>
                  </DrawerTrigger>
                  <ContactFormDrawer onRequestClose={() => null} />
                </Drawer>
              </motion.div>
            </div>
          </SwiperSlide>

          <SwiperSlide className="from-black/70 via-secondary/40 to-black/10 bg-[linear-gradient(to_right,var(--tw-gradient-stops)),url(/assets/bg/bg-4.jpg)] bg-cover bg-center px-20">
            <div className="w-full h-full flex flex-row items-center">
              <motion.div
                className="flex flex-col items-start justify-center space-y-6"
                variants={slideUpVariants}
                initial="initial"
                animate="animate"
              >
                <motion.h2 className="text-3xl text-secondary-foreground lg:text-5xl font-bold text-center md:text-start drop-shadow-text shadow-black">
                  Bem vindo à Pardini Cidadania
                </motion.h2>
                <motion.h3 className="text-xl font-medium text-secondary-foreground lg:text-3xl text-center md:text-start drop-shadow-text shadow-black">
                  Se torne um cidadão italiano <br /> e realize o seu sonho de viver na Europa.
                </motion.h3>
                <Drawer>
                  <DrawerTrigger>
                    <Button
                      variant="secondary"
                      size="xl"
                      rounded="full"
                      hover="effect"
                      shadow
                      className="flex items-center justify-center gap-2"
                    >
                      <MailIcon fontSize={10} />
                      Entre em contato
                    </Button>
                  </DrawerTrigger>
                  <ContactFormDrawer onRequestClose={() => null} />
                </Drawer>
              </motion.div>
            </div>
          </SwiperSlide> */}
        </Swiper>
      </div>
    </motion.div>
  );
}
