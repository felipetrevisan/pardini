"use client";

import * as React from "react";
import Image from "next/image";
import { HTMLMotionProps, MotionValue, motion } from "framer-motion";
import { useApp } from "@/hooks/use-app";

type LogoProps = {
  height: MotionValue<string>;
  width: MotionValue<string>;
} & HTMLMotionProps<"a">;

export const Logo = ({ className, height, width, ...props }: LogoProps) => {
  const { isMenuOpen } = useApp();

  return (
    <motion.a
      className="relative w-full h-[60px]"
      style={{
        height,
        width,
      }}
      {...props}
      href="/"
    >
      <Image
        src={`${!isMenuOpen ? `/assets/logo-pardini.png` : `/assets/logo-pardini-dark.png`}`}
        alt="Logo Pardini"
        className="w-[200px] h-full max-w-[200px] md:max-w-[440px]"
        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        priority
        fill
      />
    </motion.a>
  );
};
