"use client";

import { Facebook, Instagram, Youtube } from "lucide-react";
import { motion } from "framer-motion";
import { ContentArea } from "@/types";

type Props = {
  location: keyof typeof ContentArea;
  size: number;
  className?: string;
};

export function SocialNetworks({ location, size, className = "" }: Props) {
  return (
    <motion.div whileTap={{ scale: 0.97 }} className={className}>
      <a
        className="relative mx-1 inline-flex h-9 w-9 items-center justify-center rounded-lg border border-primary text-white duration-300 ease-linear bg-black/70 after:absolute after:left-[-1*3px] after:top-[-1*3px] after:-z-[1] after:h-[calc(100%+3px*2)] after:w-[calc(100%+3px*2)] after:rounded-lg after:bg-gradient-to-r after:from-primary after:to-secondary hover:bg-black/50 hover:after:animate-pulse"
        href="https://www.instagram.com/victoriaarocha"
        target="_blank"
        rel="noopener noreferrer"
      >
        <Instagram size={size} />
      </a>
      <a
        className="relative mx-1 inline-flex h-9 w-9 items-center justify-center rounded-lg border border-primary text-white duration-300 ease-linear bg-black/70 after:absolute after:left-[-1*3px] after:top-[-1*3px] after:-z-[1] after:h-[calc(100%+3px*2)] after:w-[calc(100%+3px*2)] after:rounded-lg after:bg-gradient-to-r after:from-primary after:to-secondary hover:bg-black/50 hover:after:animate-pulse"
        href="http://www.facebook.com/VRmidia"
        target="_blank"
        rel="noopener noreferrer"
      >
        <Facebook size={size} />
      </a>
      <a
        className="relative mx-1 inline-flex h-9 w-9 items-center justify-center rounded-lg border border-primary text-white duration-300 ease-linear bg-black/70 after:absolute after:left-[-1*3px] after:top-[-1*3px] after:-z-[1] after:h-[calc(100%+3px*2)] after:w-[calc(100%+3px*2)] after:rounded-lg after:bg-gradient-to-r after:from-primary after:to-secondary hover:bg-black/50 hover:after:animate-pulse"
        href="https://www.youtube.com/user/VRmidia"
        target="_blank"
        rel="noopener noreferrer"
      >
        <Youtube size={size} />
      </a>
    </motion.div>
  );
}
