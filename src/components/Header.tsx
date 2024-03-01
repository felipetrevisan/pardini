"use client";

import { useLayoutEffect } from "react";
import { Oswald } from "next/font/google";
import Link from "next/link";
import Image from "next/image";
import {
  AnimatePresence,
  motion,
  useAnimation,
  useMotionValueEvent,
  useScroll,
  useTransform,
} from "framer-motion";

import { useApp } from "@/hooks/useApp";
import useKeyPress from "@/hooks/useKeyPress";
import { headerItemsVariants, headerVariants } from "@/config/animation";
import { Menu } from "./Menu";
import { cn } from "@/lib/utils";
import * as Navbar from "./ui/navbar";
import { SocialNetworks } from "./SocialNetworks";
import { ContentArea } from "@/types";
import { useRef } from "react";

const oswald = Oswald({ subsets: ["latin"] });

const MotionImage = motion(Image);

export function Header() {
  const { toogleMenu, isMenuOpen, isInHome } = useApp();
  const escPressed: boolean = useKeyPress("Escape");
  const { scrollY } = useScroll();

  // const background = useTransform(
  //   scrollY,
  //   [0, 2000],
  //   ["transparent", "hsla(var(--background))"],
  // );

  const scrollYRange = [0, 100, 100];

  // const containerHeight = useTransform(scrollY, scrollYRange, [
  //   "auto",
  //   "60px",
  //   "60px",
  // ]);
  const imageSizeHeight = useTransform(scrollY, scrollYRange, [
    "60px",
    "50px",
    "50px",
  ]);
  const imageSizeWidth = useTransform(scrollY, scrollYRange, [
    "220px",
    "160px",
    "160px",
  ]);
  const fontSize = useTransform(scrollY, scrollYRange, [
    "3rem",
    "1.5rem",
    "1.5rem",
  ]);
  const opacity = useTransform(scrollY, scrollYRange, [0, 1, 1]);
  const paddingHeaderX = useTransform(scrollY, scrollYRange, [
    "30px",
    "20px",
    "20px",
  ]);
  const paddingHeaderY = useTransform(scrollY, scrollYRange, [
    "1.5rem",
    "1.2rem",
    "1.2rem",
  ]);

  // uncomment to check values
  // scrollY.onChange((val) => console.log(`useViewportScroll.y: ${val}`));

  const controls = useAnimation();
  const delta = useRef(0);
  const lastScrollY = useRef(0);

  useMotionValueEvent(scrollY, "change", (val) => {
    const diff = Math.abs(val - lastScrollY.current);
    if (val >= lastScrollY.current) {
      delta.current = delta.current >= 10 ? 10 : delta.current + diff;
    } else {
      delta.current = delta.current <= -10 ? -10 : delta.current - diff;
    }

    // console.log(`val: ${val}`);
    // console.log(`delta: ${delta.current}`);
    // console.log(`lastScrollY: ${lastScrollY.current}`);

    if (delta.current >= 10 && val > 200) {
      controls.start("hidden");
    } else if (delta.current <= -10 || val < 200) {
      controls.start("visible");
    }
    lastScrollY.current = val;
  });

  useLayoutEffect(() => {
    if (escPressed) {
      toogleMenu();
    }
  }, [escPressed, toogleMenu]);

  const classes = cn(
    `max-w-screen-xl h-[100px] max-h-[100px] flex flex-wrap items-center justify-between mx-auto`,
  );

  return (
    <AnimatePresence>
      <motion.header className={classes}>
        <Navbar.Root
          sticky
          // className="backdrop-blur-none"
          initial="visible"
          animate={controls}
          variants={{
            visible: { top: "0px" },
            hidden: { top: "0px" },
          }}
          style={{
            //height: containerHeight,
            paddingLeft: paddingHeaderX,
            paddingRight: paddingHeaderX,
            paddingTop: paddingHeaderY,
            paddingBottom: paddingHeaderY,
          }}
        >
          <>
            <Navbar.Brand className="relative">
              <Link href={"/"}>
                <MotionImage
                  src="/assets/logo-pardini.png"
                  alt=""
                  width="200"
                  height="40"
                  style={{
                    height: imageSizeHeight,
                    width: imageSizeWidth,
                  }}
                />
              </Link>
            </Navbar.Brand>
            <Navbar.Toggle icon="Menu" />
            <Navbar.Collapse>
              <Menu />
            </Navbar.Collapse>
          </>
        </Navbar.Root>
      </motion.header>
      {/* <header>
        <nav className="fixed w-full z-[90] top-0 start-0 bg-background border-gray-200 shadow-black backdrop-blur-md">
          <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
            <Link
              href={"/"}
              className="flex items-center space-x-3 rtl:space-x-reverse"
            >
              <Image
                src="/assets/logo-pardini.png"
                alt=""
                width={200}
                height={40}
              />
            </Link>
            <div className="flex md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
              <button
                data-collapse-toggle="menu"
                type="button"
                className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200"
                aria-controls="menu"
                aria-expanded="false"
              >
                <span className="sr-only">Open main menu</span>
                <svg
                  className="w-5 h-5"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 17 14"
                >
                  <path
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M1 1h15M1 7h15M1 13h15"
                  />
                </svg>
              </button>
            </div>
            <div
              className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1"
              id="menu"
            >
              <Menu />
            </div>
          </div>
        </nav>
      </header> */}
      {/* <motion.header
        className={classes}
        initial="hide"
        whileInView="show"
        exit="hide"
        variants={headerVariants}
      >
        <div className="container flex w-full flex-col items-center justify-between">
          <motion.nav className="flex w-full items-center justify-between">
            <motion.div className="logo">
              <Link
                href={"/"}
                className={`${oswald.className} text-2xl md:text-3xl lg:text-4xl`}
              >
                <Image
                  src="/assets/logo-pardini.png"
                  alt=""
                  width={200}
                  height={40}
                />
              </Link>
            </motion.div>
            <motion.button
              type="button"
              className={`flex flex-col items-center justify-center lg:hidden`}
              aria-controls="mobile-menu"
              aria-expanded="false"
              onClick={toogleMenu as any}
              variants={headerItemsVariants}
              initial="enter"
              animate="move"
              exit="exit"
            >
              <span className="sr-only">Open main menu</span>
              <span
                className={`block h-0.5 w-6 rounded-sm bg-white transition-all duration-300 ease-out ${
                  isMenuOpen
                    ? "z-[1046] translate-y-1 rotate-45"
                    : "-translate-y-0.5"
                }`}
              ></span>
              <span
                className={`my-0.5 block h-0.5 w-6 rounded-sm bg-white transition-all duration-300 ease-out ${
                  isMenuOpen ? "z-[1046] opacity-0" : "opacity-100"
                }`}
              ></span>
              <span
                className={`block h-0.5 w-6 rounded-sm bg-white transition-all duration-300 ease-out ${
                  isMenuOpen
                    ? "z-[1046] -translate-y-1 -rotate-45"
                    : "translate-y-0.5"
                }`}
              ></span>
            </motion.button>
            <motion.div
              className="hidden items-center justify-center lg:flex"
              variants={headerItemsVariants}
              initial="enter"
              animate="move"
              exit="exit"
            >
              <Menu isOpen={false} />
            </motion.div>
            <motion.div
              className="hidden flex-wrap items-center justify-center lg:mt-2 lg:flex"
              variants={headerItemsVariants}
              initial="enter"
              animate="move"
              exit="exit"
            >
              <SocialNetworks location={ContentArea.header} size={18} />
            </motion.div>
          </motion.nav>
          {isMenuOpen && (
            <motion.nav
              initial={{ height: 0 }}
              animate={{
                height: 70,
              }}
              exit={{
                height: 0,
                transition: { delay: 0.7, duration: 0.3 },
              }}
            >
              <Menu isOpen={isMenuOpen} />
            </motion.nav>
          )}
        </div>
      </motion.header> */}
    </AnimatePresence>
  );
}
