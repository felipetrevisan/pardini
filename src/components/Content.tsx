"use client";

import { Fragment, ReactNode } from "react";
import { cubicBezier, motion, useScroll, useTransform } from "framer-motion";
import clsx from "clsx";
import { AiOutlineWhatsApp } from "react-icons/ai";
import { FaArrowAltCircleUp } from "react-icons/fa";
import { useApp } from "@/hooks/useApp";
import { Button } from "./ui/button";
// import { FabButton } from "./ButtonOld/Fab";

export function Content({ children }: { children: ReactNode }) {
  const { isInHome } = useApp();
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

  const classes = clsx(
    "relative z-30 h-full flex portrait:md:items-center lg:items-center flex-col justify-center",
    {
      "py-0": isInHome(),
      "sm:landscape:my-0 lg:landscape:mt-32 lg:landscape:mb-24 py-10 portrait:my-16 xl:landscape:mt-32 xl:landscape:mb-24 xl:py-0 portrait:lg:h-[calc(100vh-23vh)] 2xl:h-[calc(100vh-23vh)]":
        !isInHome(),
    },
  );

  return (
    <>
      <motion.main className={classes}>
        {children}
        <motion.div className="fixed bottom-10 right-10 z-50 flex gap-4">
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
          <motion.div
            style={{
              opacity: opacityAnim,
            }}
          >
            <Button variant="default" color="primary" size="xl" className="!bg-[#2ecb71] flex items-center justify-center gap-2" rounded="full">
              <AiOutlineWhatsApp size={24} /> Entre em contato
            </Button>
          </motion.div>
        </motion.div>
      </motion.main>
      {!isInHome() && (
        <Fragment>
          <motion.div className="pointer-events-none fixed right-0 top-14 z-10 h-[400px] w-[400px] rounded-full bg-purple-500 opacity-50 blur-[100px] md:lg:w-[500px] md:lg:h-[500px]"></motion.div>
          <motion.div className="pointer-events-none fixed bottom-14 left-0 z-10 h-[400px] w-[400px] rounded-full bg-pink-900 opacity-50 blur-[100px] md:lg:w-[500px] md:lg:h-[500px]"></motion.div>
        </Fragment>
      )}
    </>
  );
}
