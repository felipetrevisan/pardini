"use client";

import { motion } from "framer-motion";
import Image from "next/image";
// import { SocialNetworks } from "./SocialNetworks";

export function Footer() {
  return (
    <motion.footer
      className="container flex flex-row w-full select-none items-center justify-between px-5 py-4 md:px-12 lg:px-12"
      // initial="hide"
      // whileInView="show"
      // exit="hide"
      // variants={footerVariants}
    >
      <div className="flex flex-row items-center justify-center">
        <div className="flex flex-col">
          <Image
            src="/assets/logo-pardini.png"
            alt=""
            width="200"
            height="40"
          />
        </div>
        {/* <SocialNetworks
          location={ContentArea.footer}
          size={18}
          className="z-[100] flex 2xl:invisible"
        /> */}
        <p className="m-0 text-center text-white text-opacity-75">
          © {new Date().getFullYear()} - Todos os direitos reservados
        </p>
      </div>
    </motion.footer>
  );
}
