"use client";

import { forwardRef, Fragment, HTMLAttributes, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  AnimatePresence,
  motion,
  useAnimation,
  useMotionValueEvent,
  useScroll,
  useTransform,
} from "framer-motion";
import { MdOutlineWhatsapp } from "react-icons/md";
import { Slot } from "@radix-ui/react-slot";
import { Background, Parallax } from "react-parallax";

import { cn } from "@/lib/utils";
import * as Navbar from "@/components/ui/navbar";
import { Button } from "@/components/ui/button";
import { useServices } from "@/hooks/use-services";
import { useSite } from "@/hooks/use-site";
import { SocialNetworks } from "./social-icons";
import { Logo } from "./logo";
import { useDimensions } from "@/hooks/use-dimensions";
import { useApp } from "@/hooks/use-app";
import { DesktopNavigation } from "./desktop-navigation";
import { MobileNavigation } from "./mobile-navigation";
import { Drawer, DrawerContent, DrawerTitle, DrawerTrigger } from "./ui/drawer";
import * as VisuallyHidden from "@radix-ui/react-visually-hidden";

const Header = forwardRef<HTMLDivElement, HTMLAttributes<HTMLDivElement>>(({ className }, ref) => {
  const { data: serviceData, isLoading } = useServices();
  const { data: siteConfigData, isLoading: isSiteConfigLoading } = useSite();
  const [currentScrollY, setCurrentScrollY] = useState(0);
  const containerRef = useRef<HTMLDivElement | null>(null);
  const { height } = useDimensions(containerRef);
  const { isMenuOpen, toggleMenu } = useApp();
  const { scrollY } = useScroll();

  const scrollYRange = [0, 100, 100];

  const logoSizeHeight = useTransform(scrollY, scrollYRange, ["60px", "56px", "56px"]);
  const logoSizeWidth = useTransform(scrollY, scrollYRange, ["220px", "174px", "174px"]);
  const iconScale = useTransform(scrollY, scrollYRange, ["1", ".75", ".75"]);
  const paddingHeaderX = useTransform(scrollY, scrollYRange, ["30px", "20px", "20px"]);
  const paddingHeaderY = useTransform(scrollY, scrollYRange, ["1.2rem", "1rem", "1rem"]);

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

    if (delta.current >= 10 && val > 200) {
      controls.start("hidden");
    } else if (delta.current <= -10 || val < 200) {
      controls.start("visible");
    }

    lastScrollY.current = val;
    setCurrentScrollY(val);
  });

  return (
    <AnimatePresence mode="sync">
      <motion.header
        className={cn(
          "fixed top-0 z-[100] w-full backdrop-blur-md transition-colors duration-500 bg-transparent h-20",
          {
            "bg-black/60 backdrop-blur-xl": currentScrollY > 200,
            "backdrop-blur-none": currentScrollY < 200,
          },
          className
        )}
        ref={ref}
        {...(isMenuOpen && { "data-menu-open": true })}
      >
        <Navbar.Root
          sticky
          initial="visible"
          animate={controls}
          variants={{
            visible: { top: "0px" },
            hidden: { top: "0px" },
          }}
          style={{
            paddingLeft: paddingHeaderX,
            paddingRight: paddingHeaderX,
            paddingTop: paddingHeaderY,
            paddingBottom: paddingHeaderY,
          }}
        >
          <Fragment>
            <Navbar.Brand className={cn({ hidden: isMenuOpen })}>
              <Logo height={logoSizeHeight} width={logoSizeWidth} />
            </Navbar.Brand>
            <motion.div
              animate={isMenuOpen ? "open" : "closed"}
              custom={height}
              ref={containerRef}
              className="flex"
            >
              {!isSiteConfigLoading && (
                <Fragment>
                  <DesktopNavigation
                    navigation={siteConfigData?.primaryNavigation}
                    servicesData={serviceData}
                    isServicesLoading={isLoading}
                  />
                  <Drawer open={isMenuOpen} onClose={() => toggleMenu(0)}>
                    <DrawerTrigger
                      asChild
                      className={cn({
                        hidden: isMenuOpen,
                      })}
                    >
                      <Navbar.Toggle />
                    </DrawerTrigger>
                    <VisuallyHidden.Root>
                      <DrawerTitle>Menu</DrawerTitle>
                    </VisuallyHidden.Root>
                    <DrawerContent className="container max-w-xl md:max-w-4xl h-[99svh]">
                      <div className="flex justify-between">
                        <Navbar.Brand className="mt-5">
                          <Logo height={logoSizeHeight} width={logoSizeWidth} />
                        </Navbar.Brand>
                        <DrawerTrigger asChild>
                          <Navbar.Toggle className="mt-5 bg-secondary text-muted" />
                        </DrawerTrigger>
                      </div>
                      <MobileNavigation
                        navigation={siteConfigData?.primaryNavigation}
                        servicesData={serviceData}
                        isServicesLoading={isLoading}
                      />
                    </DrawerContent>
                  </Drawer>
                </Fragment>
              )}
            </motion.div>
          </Fragment>
        </Navbar.Root>
      </motion.header>
    </AnimatePresence>
  );
});
Header.displayName = "Header";

type ContentProps = HTMLAttributes<HTMLDivElement>;

const Content = ({ className, children }: ContentProps) => {
  return (
    <AnimatePresence mode="sync">
      <motion.main className={cn("container max-w-8xl mx-auto px-4 sm:px-6 md:px-8", className)}>
        {children}
      </motion.main>
    </AnimatePresence>
  );
};
Content.displayName = "Content";

const Footer = forwardRef<HTMLDivElement, HTMLAttributes<HTMLDivElement>>((_, ref) => {
  const MotionButton = motion(Button);

  const { data, isLoading } = useSite();

  return (
    <AnimatePresence mode="sync">
      <motion.footer
        className="container flex flex-col space-y-10 w-full select-none items-center pb-10 lg:relative"
        ref={ref}
      >
        {!isLoading && data?.whatsappUrl && (
          <div className="fixed bottom-4 right-10 z-50 flex flex-row items-center gap-4">
            <Link href={data.whatsappUrl} passHref target="_blank">
              <MotionButton
                aria-label="Entre em contato por Whatsapp"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 1.1 }}
                variant="whatsapp"
                size="2xl"
                icon
                rounded="full"
                className="flex items-center justify-center gap-2 shadow"
              >
                <MdOutlineWhatsapp size={32} />
                <span className="sr-only">Entre em contato por Whatsapp</span>
              </MotionButton>
            </Link>
          </div>
        )}
        <div className="flex flex-col gap-10 md:gap-0 md:flex-row items-center justify-between w-full">
          <Image
            src="/assets/logo-pardini.png"
            alt="Logo Pardini"
            width="200"
            height="60"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            className="w-[200px]"
            priority
          />
          <SocialNetworks size={24} />
          <p className="text-center text-white text-opacity-75">
            © {new Date().getFullYear()} - Todos os direitos reservados
          </p>
        </div>
      </motion.footer>
    </AnimatePresence>
  );
});
Footer.displayName = "Footer";

export interface TitleProps extends HTMLAttributes<HTMLHeadingElement> {
  asChild?: boolean;
}

const Title = forwardRef<HTMLHeadingElement, TitleProps>(
  ({ className, children, asChild, ...props }, ref) => {
    const Comp = asChild ? Slot : "div";

    return (
      <Comp className="flex gap-1 items-center" {...props} ref={ref}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="26"
          height="7"
          viewBox="0 0 26 7"
          fill="none"
        >
          <path
            d="M26 0.999776C26 1.55218 25.2166 2 24.2493 2H7.74961C7.26654 2 6.82911 1.88808 6.51229 1.70704C6.19573 1.52628 6 1.27626 6 1.00007C5.99974 0.447599 6.78343 -0.000149254 7.75053 3.73222e-08H24.2506C25.2171 0.000124446 25.9998 0.447599 26 0.999776Z"
            className="fill-secondary"
          />
          <path
            d="M20 5.99978C20 6.55218 19.2166 7 18.2493 7H1.74961C1.26654 7 0.829108 6.88808 0.512287 6.70704C0.195727 6.52628 6.53032e-08 6.27626 6.53032e-08 6.00007C-0.000261194 5.4476 0.783431 4.99985 1.75053 5H18.2506C19.2171 5.00012 19.9998 5.4476 20 5.99978Z"
            className="fill-secondary"
          />
        </svg>
        <h2
          className={cn(
            "font-bold text-secondary text-xl md:text-2xl uppercase drop-shadow-text shadow-secondary/20",
            className
          )}
        >
          {children}
        </h2>
      </Comp>
    );
  }
);
Title.displayName = "Title";

const Subtitle = forwardRef<HTMLHeadingElement, TitleProps>(
  ({ className, asChild, ...props }, ref) => {
    const Comp = asChild ? Slot : "h3";

    return (
      <Comp
        className={cn("ms-7 text-xl md:text-2xl font-semibold", className)}
        {...props}
        ref={ref}
      />
    );
  }
);
Subtitle.displayName = "Subtitle";

export interface PageHeaderProps extends HTMLAttributes<HTMLDivElement> {
  background?: string;
}

const PageHeader = forwardRef<HTMLDivElement, PageHeaderProps>(
  ({ className, background, children, ...props }, ref) => {
    return (
      <Parallax strength={500} blur={{ min: -1, max: 3 }} className="w-screen">
        <Background>
          <div
            className={cn(`w-screen h-screen bg-cover bg-center`)}
            style={{
              backgroundImage: `url("${!background ? "/assets/bg-page-title.jpg" : background!}")`,
            }}
          />
        </Background>
        <div
          className={cn(
            "overflow-hidden relative w-full h-[500px] md:h-[590px] flex items-center after:absolute after:z-[3] after:bg-gradient-to-b after:from-transparent after:via-secondary after:to-secondary after:w-full after:h-40 after:-bottom-20 before:absolute before:z-[2] before:bg-gradient-to-r before:from-black/90 before:via-secondary/40 before:to-black/40 before:w-full before:h-full",
            className
          )}
          {...props}
          ref={ref}
        >
          <div className="max-w-8xl relative p-4 mx-auto w-full z-[4] flex justify-center items-center -translate-y-12">
            <h1
              className={cn(
                "font-bold text-white text-4xl clamp-[xl-6cqw-6xl] uppercase lg:normal-case line-clamp-4 p-10",
                className
              )}
            >
              {children}
            </h1>
          </div>
        </div>
      </Parallax>
    );
  }
);
PageHeader.displayName = "PageHeader";

export { Header, Content, Footer, Title, Subtitle, PageHeader };
