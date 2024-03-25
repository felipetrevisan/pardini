"use client";

import * as React from "react";
import Image from "next/image";
import {
  AnimatePresence,
  cubicBezier,
  motion,
  useAnimation,
  useMotionValueEvent,
  useScroll,
  useTransform,
} from "framer-motion";

import { cn } from "@/lib/utils";
import * as Navbar from "@/components/ui/navbar";
import { Fragment } from "react";
import { Button } from "@/components/ui/button";
import { MdOutlineWhatsapp } from "react-icons/md";
import { Slot } from "@radix-ui/react-slot";
import Link from "next/link";
import {
  NavigationListItem,
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuIndicator,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import { useServices } from "@/hooks/useServices";
import { Dialog, DialogTrigger } from "@/components/ui/dialog";
import { ServiceDetailsDialog } from "./service-details-dialog";
import { Skeleton } from "@/components/ui/skeleton";
import { footerVariants } from "@/config/animation";
import { useSite } from "@/hooks/useSite";
import { LinkType } from "@/types/site";
import { SocialNetworks } from "./social-icons";

const Header = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
  ({ className }, ref) => {
    const { data: serviceData, isLoading } = useServices();
    const { data: siteConfigData, isLoading: isSiteConfigLoading } = useSite();

    const MotionLink = motion(Link);
    const MotionSocialNetworks = motion(SocialNetworks);

    const { scrollY } = useScroll();

    const scrollYRange = [0, 100, 100];

    const imageSizeHeight = useTransform(scrollY, scrollYRange, ["60px", "40px", "40px"]);
    const imageSizeWidth = useTransform(scrollY, scrollYRange, ["220px", "140px", "140px"]);
    const iconScale = useTransform(scrollY, scrollYRange, ["1", ".75", ".75"]);
    const fontSize = useTransform(scrollY, scrollYRange, ["3rem", "1.5rem", "1.5rem"]);
    const opacity = useTransform(scrollY, scrollYRange, [0, 1, 1]);
    const paddingHeaderX = useTransform(scrollY, scrollYRange, ["30px", "20px", "20px"]);
    const paddingHeaderY = useTransform(scrollY, scrollYRange, ["1.2rem", "1rem", "1rem"]);

    const controls = useAnimation();
    const delta = React.useRef(0);
    const lastScrollY = React.useRef(0);

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
    });

    return (
      <AnimatePresence>
        <motion.header
          className={cn(
            `max-w-screen-xl h-[var(--header-height)] max-h-[var(--header-height)] flex flex-wrap items-center justify-between mx-auto`,
            className
          )}
          ref={ref}
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
              //height: containerHeight,
              paddingLeft: paddingHeaderX,
              paddingRight: paddingHeaderX,
              paddingTop: paddingHeaderY,
              paddingBottom: paddingHeaderY,
            }}
          >
            <Fragment>
              <Navbar.Brand>
                <MotionLink
                  href="/"
                  className="relative w-full h-[60px]"
                  style={{
                    height: imageSizeHeight,
                    width: imageSizeWidth,
                  }}
                >
                  <Image
                    src="/assets/logo-pardini.png"
                    alt="Logo Pardini"
                    // width="440"
                    // height="130"
                    className="w-[240px] h-full max-w-[240px] max-h-max md:max-w-[440px] md:max-h-max"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    priority
                    fill
                  />
                </MotionLink>
              </Navbar.Brand>
              {!isSiteConfigLoading && (
                <Fragment>
                  <Navbar.Toggle icon="Menu" />
                  <Navbar.Collapse>
                    <NavigationMenu>
                      <NavigationMenuList>
                        {siteConfigData?.primaryNavigation?.items?.map(
                          ({ id, hasSubmenu, label, url, submenu }) => (
                            <Fragment key={id}>
                              {hasSubmenu ? (
                                <NavigationMenuItem>
                                  <NavigationMenuTrigger>{label}</NavigationMenuTrigger>
                                  <NavigationMenuContent>
                                    <ul className="grid gap-3 p-4 w-[300px] md:w-[400px] lg:w-[600px] lg:grid-cols-[1fr_1fr]">
                                      {submenu?.map(({ id, label, url }) => (
                                        <>
                                          {url.type === LinkType.SERVICE_DIALOG ? (
                                            <>
                                              {isLoading ? (
                                                <Fragment key={id}>
                                                  {Array.from({ length: 10 }).map((_, index) => (
                                                    <li
                                                      key={index}
                                                      className="space-y-1 rounded-md p-3"
                                                    >
                                                      <Skeleton className="h-6" />
                                                    </li>
                                                  ))}
                                                </Fragment>
                                              ) : (
                                                <Fragment>
                                                  {serviceData?.map((service) => (
                                                    <Dialog key={`submenu-${service.id}`}>
                                                      <DialogTrigger asChild>
                                                        <NavigationListItem
                                                          title={service.title}
                                                          icon={service.icon}
                                                        />
                                                      </DialogTrigger>
                                                      <ServiceDetailsDialog {...service} />
                                                    </Dialog>
                                                  ))}
                                                </Fragment>
                                              )}
                                            </>
                                          ) : (
                                            <NavigationListItem
                                              title={label}
                                              key={id}
                                              href={url?.usePath ? url?.path : url?.externalUrl}
                                            />
                                          )}
                                        </>
                                      ))}
                                    </ul>
                                  </NavigationMenuContent>
                                </NavigationMenuItem>
                              ) : (
                                <NavigationMenuItem>
                                  <Link
                                    href={url.usePath ? url.path! : url.externalUrl!}
                                    legacyBehavior
                                    passHref
                                  >
                                    <NavigationMenuLink>{label}</NavigationMenuLink>
                                  </Link>
                                </NavigationMenuItem>
                              )}
                            </Fragment>
                          )
                        )}
                      </NavigationMenuList>
                    </NavigationMenu>
                    <MotionSocialNetworks
                      size={18}
                      style={{
                        scaleX: iconScale,
                        scaleY: iconScale,
                      }}
                    />
                  </Navbar.Collapse>
                </Fragment>
              )}
            </Fragment>
          </Navbar.Root>
        </motion.header>
      </AnimatePresence>
    );
  }
);
Header.displayName = "Header";

const Content = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
  ({ className, children }, ref) => {
    const { scrollYProgress } = useScroll();
    const scaleAnim = useTransform(scrollYProgress, [0, 0.5, 1], [0, 0, 1], {
      ease: cubicBezier(0.17, 0.67, 0.83, 0.67),
    });
    const opacityAnim = useTransform(scrollYProgress, [0, 0.2, 1], [0, 0.2, 1], {
      ease: cubicBezier(0.17, 0.67, 0.83, 0.67),
    });
    const backToTop = () => {
      window.scrollTo({ top: 0, behavior: "smooth" });
    };

    const MotionButton = motion(Button);

    const classes = cn(
      "relative z-30 h-full flex portrait:md:items-center lg:items-center flex-col justify-center",
      className
    );

    return (
      <motion.main className={classes} ref={ref}>
        {children}
        <div className="fixed bottom-10 right-10 z-50 flex gap-4">
          {/* <motion.div
            style={{
              opacity: opacityAnim,
              scale: scaleAnim,
            }}
          >
            <Button color="primary" size="icon" onClick={backToTop}>
              <FaArrowAltCircleUp size={20} />
            </Button>
          </motion.div> */}
          <div>
            <MotionButton
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 1.1 }}
              variant="whatsapp"
              size="xl"
              className="flex items-center justify-center gap-2 shadow"
              rounded="xl"
            >
              <MdOutlineWhatsapp size={32} /> Entre em contato
            </MotionButton>
          </div>
        </div>
      </motion.main>
    );
  }
);
Content.displayName = "Content";

const Footer = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
  ({ className, children }, ref) => {
    const { scrollYProgress } = useScroll();
    const scaleAnim = useTransform(scrollYProgress, [0, 0.5, 1], [0, 0, 1], {
      ease: cubicBezier(0.17, 0.67, 0.83, 0.67),
    });
    const opacityAnim = useTransform(scrollYProgress, [0, 0.2, 1], [0, 0.2, 1], {
      ease: cubicBezier(0.17, 0.67, 0.83, 0.67),
    });
    const backToTop = () => {
      window.scrollTo({ top: 0, behavior: "smooth" });
    };

    const MotionButton = motion(Button);

    return (
      <motion.footer
        className="container flex flex-col space-y-10 w-full select-none items-center px-5 py-4 md:px-12 lg:px-12"
        initial="hide"
        whileInView="show"
        exit="hide"
        variants={footerVariants}
      >
        <div className="flex flex-row items-center justify-between w-full">
          <Image
            src="/assets/logo-pardini.png"
            alt="Logo Pardini"
            width="140"
            height="40"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            priority
          />
          <SocialNetworks size={18} />
        </div>
        <p className="m-0 text-center text-white text-opacity-75">
          © {new Date().getFullYear()} - Todos os direitos reservados
        </p>
      </motion.footer>
    );
  }
);
Footer.displayName = "Footer";

export interface TitleProps extends React.HTMLAttributes<HTMLHeadingElement> {
  asChild?: boolean;
}

const Title = React.forwardRef<HTMLHeadingElement, TitleProps>(
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

const Subtitle = React.forwardRef<HTMLHeadingElement, TitleProps>(
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

export interface PageHeaderProps extends React.HTMLAttributes<HTMLDivElement> {
  background?: string;
}

const PageHeader = React.forwardRef<HTMLDivElement, PageHeaderProps>(
  ({ className, background, children, ...props }, ref) => {
    return (
      <div
        className={cn(
          "overflow-hidden shadow-lg rounded-bl-3xl rounded-br-3xl relative w-full h-[180px] md:h-[200px] flex items-end before:absolute before:z-[2] before:bg-gradient-to-r before:from-black/90 before:via-secondary/40 before:to-black/40 before:w-full before:h-full",
          className
        )}
        {...props}
        ref={ref}
      >
        <Image
          className="h-auto w-full z-[1] object-cover"
          alt=""
          src={!background ? "/assets/bg-page-title.jpg" : background}
          sizes="100vw"
          fill
          priority
        />
        <div
          className="
            relative p-4 mx-auto w-full lg:py-8 lg:pr-16 lg:pl-8 z-[3]"
        >
          <h1
            className={cn(
              "font-bold text-white text-2xl lg:text-4xl uppercase drop-shadow-text shadow-black",
              className
            )}
          >
            {children}
          </h1>
        </div>
      </div>
      // </div>
    );
  }
);
PageHeader.displayName = "PageHeader";

export { Header, Content, Footer, Title, Subtitle, PageHeader };
