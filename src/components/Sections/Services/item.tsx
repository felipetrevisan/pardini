"use client";

import { ReactNode } from "react";
import { motion } from "framer-motion";
import { icons } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { AiOutlineWhatsApp } from "react-icons/ai";

type Props = {
  icon: keyof typeof icons;
  title: string;
  description: string;
  children: ReactNode;
};

export function Item({ icon, title, description, children }: Props) {
  const LucideIcon = icons[icon] ?? icons["Scale"];

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Card className="shadow hover:shadow-xl hover:border-secondary group relative overflow-hidden select-none cursor-pointer">
          <CardContent className="flex h-80 items-center justify-center p-6">
            <motion.div className="flex flex-col items-center justify-start gap-5">
              <motion.div className="flex flex-col items-center justify-center gap-5">
                <LucideIcon className="rounded-full bg-muted p-5 size-20 overflow-hidden" />
                <motion.h6 className="flex items-center h-12 font-semibold text-base md:text-md lg:text-lg text-center">
                  {title}
                </motion.h6>
              </motion.div>
              <motion.div className="flex flex-col items-center justify-start gap-4 text-sm">
                {children}
                <div className="hidden justify-end w-full group-hover:flex absolute bottom-0 opacity-0 group-hover:opacity-100 group-hover:transition-all">
                  <Button
                    variant="outline"
                    className="rounded-tl-3xl border-r-0 border-b-0"
                  >
                    Ver mais
                  </Button>
                </div>
              </motion.div>
            </motion.div>
          </CardContent>
        </Card>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>
            <div className="flex flex-row items-center gap-3">
              <LucideIcon className="bg-background text-primary-foreground p-2 size-12" />{" "}
              {title}
            </div>
          </DialogTitle>
        </DialogHeader>
        <div
          className="grid gap-4 p-6"
          dangerouslySetInnerHTML={{ __html: description }}
        />
        <DialogFooter>
          <Button
            variant="whatsapp"
            size="xl"
            className="flex items-center justify-center gap-2"
            rounded="2xl"
          >
            <AiOutlineWhatsApp size={32} /> Entre em contato
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
