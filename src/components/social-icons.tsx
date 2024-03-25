"use client";

import { icons } from "lucide-react";
import { motion } from "framer-motion";
import { useSite } from "@/hooks/useSite";
import React from "react";

type Props = React.HTMLAttributes<HTMLDivElement> & {
  size: number;
};

export const SocialNetworks = React.forwardRef<HTMLDivElement, Props>(
  ({ size, className }, ref) => {
    const { data, isLoading } = useSite();

    if (isLoading) return <></>;

    return (
      <div className={className} ref={ref}>
        {data?.socialNavigation?.items.map(({ id, icon, url, label }) => {
          const Icon = icons[icon as keyof typeof icons] ?? icons["Link"];

          return (
            <motion.a
              className="relative mx-1 inline-flex size-12 items-center justify-center rounded-full border border-primary text-secondary duration-300 ease-linear bg-white after:absolute after:left-[-1*3px] after:top-[-1*3px] after:-z-[1] after:h-[calc(100%+3px*2)] after:w-[calc(100%+3px*2)] after:rounded-full after:bg-gradient-to-r after:from-primary after:to-secondary hover:after:animate-pulse"
              href={url}
              target="_blank"
              rel="noopener noreferrer"
              whileTap={{ scale: 0.97 }}
              key={id}
            >
              <Icon size={size} />
              <span className="sr-only">{label}</span>
            </motion.a>
          );
        })}
      </div>
    );
  }
);
