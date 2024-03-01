"use client";

import { useCallback } from "react";
import clsx from "clsx";
import { motion } from "framer-motion";
import type { MenuTypes, Section } from "@/types";
import { useApp } from "@/hooks/useApp";
import { menuMobileVariants } from "@/config/animation";
import { Item } from "../Item";

interface Props {
  isOpen: boolean;
  sections: Section[];
  current: Section;
  className?: string;
  type: MenuTypes;
}

export function Menu({
  isOpen = false,
  sections,
  current,
  type,
  className = "",
}: Props) {
  const { toogleMenu } = useApp();

  const classes = clsx(className, "flex flex-col justify-center");

  const onMenuClick = useCallback((active: boolean) => {
    if (active) return;

    toogleMenu();
  }, [toogleMenu]);

  return (
    <motion.div
      className={classes}
      data-open={isOpen}
      variants={menuMobileVariants}
      initial="closed"
      animate="open"
      exit="closed"
      custom={isOpen}
    >
      <nav className="flex items-center justify-between px-2 py-4">
        <ul className="divide-x-1 flex flex-row gap-3 p-4 lg:mx-auto lg:flex-row lg:p-0">
          {sections.map((section) => {
            const isActive = current.path === section?.path;

            return (
              <Item
                key={section.name.toLocaleLowerCase()}
                active={isActive}
                href={section.path}
                label={section.label}
                type={type}
                onClick={() => onMenuClick(isActive)}
              />
            );
          })}
        </ul>
      </nav>
    </motion.div>
  );
}
