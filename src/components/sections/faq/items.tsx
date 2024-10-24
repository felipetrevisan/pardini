import { Fragment, useState } from "react";
import { motion } from "framer-motion";
import { PortableText } from "@portabletext/react";
import { Button } from "@/components/ui/button";
import {
  DrawerTrigger,
  DrawerContent,
  DrawerHeader,
  DrawerTitle,
  DrawerFooter,
  DrawerClose,
  Drawer,
} from "@/components/ui/drawer";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Faq } from "@/types/faq";
import { portableComponents } from "@/components/ui/portable-components";

export function Items({ data }: { data: Faq[] }) {
  const [currentItem, setCurrentItem] = useState<string | null>(null);

  return (
    <Fragment>
      <Accordion
        type="single"
        collapsible
        onValueChange={(value) => setCurrentItem(value)}
        className="flex flex-col mt-10"
      >
        {data
          .filter((faq) => !!faq.showHome)
          .map(({ id, title, answer }) => (
            <AccordionItem key={id} value={id}>
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
                  >
                    <PortableText value={answer} components={portableComponents} />
                  </motion.section>
                )}
              </AccordionContent>
            </AccordionItem>
          ))}
      </Accordion>
      <Drawer>
        <DrawerTrigger asChild>
          <Button variant="secondary" size="xl" rounded="full" hover="effect" shadow fullWidth className="mt-6">
            Veja mais perguntas frequentes
          </Button>
        </DrawerTrigger>
        <DrawerContent className="container max-w-6xl h-3/4">
          <DrawerHeader>
            <DrawerTitle>Perguntas Frequentes</DrawerTitle>
          </DrawerHeader>
          <ScrollArea className="h-full">
            <Accordion type="single" collapsible onValueChange={(value) => setCurrentItem(value)}>
              {data.map(({ id, title, answer }) => (
                <AccordionItem key={id} value={id}>
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
                      >
                        <PortableText value={answer} components={portableComponents} />
                      </motion.section>
                    )}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </ScrollArea>
          <DrawerFooter>
            <DrawerClose>
              <Button variant="secondary" rounded="full" size="xl" className="w-full md:w-[400px]">
                Fechar
              </Button>
            </DrawerClose>
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
    </Fragment>
  );
}
