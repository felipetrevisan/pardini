"use client";

import { icons } from "lucide-react";
import { motion } from "framer-motion";
import { useSite } from "@/hooks/useSite";
import React from "react";
import { cn } from "@/lib/utils";

type Props = React.HTMLAttributes<HTMLDivElement> & {
  size: number;
};

const SocialNetworks = React.forwardRef<HTMLDivElement, Props>(({ size, className }, ref) => {
  const { data, isLoading } = useSite();

  if (isLoading) return <></>;

  return (
    <div className={cn("hidden md:flex", className)} ref={ref}>
      {data?.socialNavigation?.items.map(({ id, icon, url, label }) => {
        const Icon = icons[icon as keyof typeof icons] ?? icons["Link"];

        return (
          <motion.a
            className="relative mx-1 inline-flex size-12 items-center justify-center rounded-full border border-secondary text-secondary duration-300 ease-linear bg-white hover:bg-secondary hover:text-secondary-foreground hover:border-white hover:after:animate-pulse"
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
});

SocialNetworks.displayName = "SocialNetworks";

export { SocialNetworks };
