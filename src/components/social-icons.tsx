"use client";

import { icons } from "lucide-react";
import { motion } from "framer-motion";
import { useSite } from "@/hooks/useSite";
import React from "react";
import Link from "next/link";
import { Button } from "./ui/button";

type Props = React.HTMLAttributes<HTMLDivElement> & {
  size: number;
};

const MotionLink = motion(Link);

const SocialNetworks = React.forwardRef<HTMLDivElement, Props>(({ size, className }, ref) => {
  const { data, isLoading } = useSite();

  if (isLoading) return <></>;

  return (
    <div className={className} ref={ref}>
      {data?.socialNavigation?.items.map(({ id, icon, url, label }) => {
        const Icon = icons[icon as keyof typeof icons] ?? icons["Link"];

        return (
          <MotionLink
            href={url}
            target="_blank"
            rel="noopener noreferrer"
            whileTap={{ scale: 0.97 }}
            key={id}
            passHref
            className="relative mx-1 inline-flex items-center justify-center"
          >
            <Button variant="secondary" size="xl" rounded="full" icon shadow hover="effect">
              <Icon size={size} />
              <span className="sr-only">{label}</span>
            </Button>
          </MotionLink>
        );
      })}
    </div>
  );
});

SocialNetworks.displayName = "SocialNetworks";

export { SocialNetworks };
