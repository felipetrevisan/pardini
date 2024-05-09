"use client";

import { motion } from "framer-motion";
import * as App from "@/components/app";
import { ContactForm } from "@/components/contact-form";

export function Contact() {
  return (
    <motion.div
      layout
      className="h-full w-screen flex flex-col mb-20 space-y-20"
      data-section="contact"
    >
      <App.PageHeader>Contato</App.PageHeader>
      <div className="container flex max-w-4xl">
        <ContactForm isDrawer={false} />
      </div>
    </motion.div>
  );
}
