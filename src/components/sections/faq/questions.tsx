"use client";

import { Fragment, useState } from "react";
import { motion } from "framer-motion";
import { type Faq } from "@/types/faq";
import {
  Accordion,
  AccordionItem,
  AccordionContent,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer";
import { ScrollArea } from "@/components/ui/scroll-area";
import { useFaq } from "@/hooks/useFaq";
import { FaqSkeleton } from "./skeleton";
import { Items } from "./items";

export function Questions() {
  const { data, isLoading } = useFaq();

  return (
    <Fragment>
      {isLoading ? (
        <Fragment>
          {Array.from({ length: 5 }).map((_, index) => (
            <FaqSkeleton key={index} />
          ))}
        </Fragment>
      ) : (
        <Items data={data ?? []} />
      )}
    </Fragment>
  );
}
