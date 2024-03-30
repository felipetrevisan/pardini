import { zodResolver } from "@hookform/resolvers/zod";
import { InfoIcon, Loader2 } from "lucide-react";
import { useForm } from "react-hook-form";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { DrawerContent, DrawerFooter, DrawerHeader, DrawerTitle } from "@/components/ui/drawer";
import { DialogTrigger } from "./ui/dialog";
import { Textarea } from "./ui/textarea";
import { ContactFormSchema, contactFormSchema } from "@/types/contact";
import { sendEmail } from "@/server/send-email";
import { useToast } from "./ui/use-toast";
import { ContactForm } from "./contact-form";

export function ContactFormDrawer() {
  return (
    <DrawerContent className="container max-w-3xl">
      <DrawerHeader>
        <DrawerTitle>Como podemos te ajudar?</DrawerTitle>
      </DrawerHeader>

      <ContactForm isDrawer />
    </DrawerContent>
  );
}
