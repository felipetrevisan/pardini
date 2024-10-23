"use client";

import { ReactNode } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { Card, CardContent, CardHeader } from "@/components/ui/card";

type Props = {
  src: string;
  title: string;
  children: ReactNode;
};

export function Item({ src, title, children }: Props) {
  return (
    <Card className="rounded-lg shadow relative">
      <CardHeader className="relative h-[240px] overflow-hidden">
        <Image
          src={src}
          fill
          alt=""
          className="hover:scale-110 transition-all ease-linear duration-200"
        />
        <motion.div className="flex flex-col items-center justify-center gap-5 absolute bottom-4 left-0 w-full">
          <motion.h6 className="flex items-center text-white bg-black/50 backdrop-blur-md p-2 pl-5 font-semibold text-base md:text-md lg:text-lg text-center w-full">
            {title}
          </motion.h6>
        </motion.div>
      </CardHeader>
      <CardContent className="flex h-56 items-group justify-center p-6">
        <motion.div className="flex flex-col items-center justify-start gap-5">
          <motion.div className="flex flex-col items-center justify-start gap-1 text-sm">
            {children}
          </motion.div>
        </motion.div>
      </CardContent>
    </Card>
  );
}
