"use client";

import { motion } from "framer-motion";

export function TransitionEffect() {
  return (
    <>
      <motion.div
        className="bg-[#12c2e9]/60 fixed bottom-0 right-full top-0 z-30 h-screen w-screen"
        initial={{ x: "100%", width: "100%" }}
        animate={{ x: "0%", width: "0%" }}
        exit={{ x: ["0%", "100%"], width: ["0%", "100%"] }}
        transition={{ duration: 0.8, ease: "easeInOut" }}
      />
      <motion.div
        className="bg-[#c471ed]/60 fixed bottom-0 right-full top-0 z-20 h-screen w-screen"
        initial={{ x: "100%", width: "100%" }}
        animate={{ x: "0%", width: "0%" }}
        exit={{ x: ["0%", "100%"], width: ["0%", "100%"] }}
        transition={{ delay: 0.2, duration: 0.8, ease: "easeInOut" }}
      />
      <motion.div
        className="bg-[#f64f59]/60 fixed bottom-0 right-full top-0 z-10 h-screen w-screen "
        initial={{ x: "100%", width: "100%" }}
        animate={{ x: "0%", width: "0%" }}
        exit={{ x: ["0%", "100%"], width: ["0%", "100%"] }}
        transition={{ delay: 0.4, duration: 0.8, ease: "easeInOut" }}
      />
    </>
  );
}
