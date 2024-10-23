"use client";

import { motion } from "framer-motion";
import { ContactForm } from "@/components/contact-form";

export function Contact() {
  return (
    <motion.div layout className="container md:max-w-screen-sm h-full flex flex-col space-y-20 bg-white">
      <div className="flex flex-col gap-10">
        <ContactForm isDrawer={false} />
      </div>
    </motion.div>
  );
}
