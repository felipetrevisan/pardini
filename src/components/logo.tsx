"use client";

import * as React from "react";
import Image from "next/image";
import { HTMLMotionProps, MotionValue, motion } from "framer-motion";
import Link from "next/link";

type LogoProps = {
  height: MotionValue<string>;
  width: MotionValue<string>;
} & HTMLMotionProps<"a">;

export const Logo = ({ className, height, width, ...props }: LogoProps) => {
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
        src="/assets/logo-pardini.png"
        alt="Logo Pardini"
        className="w-[200px] h-full max-w-[200px] md:max-w-[440px]"
        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        priority
        fill
      />
    </motion.a>
  );
};
