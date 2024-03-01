"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import type { Faq } from "@/types/faq";
import {
  Accordion,
  AccordionItem,
  AccordionContent,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";

type Props = {
  anwsers: Faq[];
};

export function Questions({ anwsers }: Props) {
  const [currentItem, setCurrentItem] = useState<string | null>(null);

  return (
    <AnimatePresence initial={false}>
      <Accordion
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
      </Button>
    </AnimatePresence>
  );
}
