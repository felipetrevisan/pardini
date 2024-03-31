import { Button } from "@/components/ui/button";
import { DialogContent, DialogFooter, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Service, WhatsappButtonLabel } from "@/types/services";
import { PortableText } from "@portabletext/react";
import { icons } from "lucide-react";
import Link from "next/link";
import { MdOutlineWhatsapp } from "react-icons/md";
import { portableComponents } from "./ui/portable-components";

type ServiceDetailsDialogProps = Omit<Service, "_id" | "excerpt" | "type">;

export function ServiceDetailsDialog({
  title,
  icon,
  description,
  buttons,
}: ServiceDetailsDialogProps) {
  const LucideIcon = icon !== null ? icons[icon] : icons["Scale"];

  return (
    <DialogContent className="outline-none sm:max-w-[600px]">
      <DialogHeader>
        <DialogTitle>
          <div className="flex flex-row items-center gap-3">
            <LucideIcon className="bg-background text-primary-foreground p-2 size-12" /> {title}
          </div>
        </DialogTitle>
      </DialogHeader>
      {description && (
        <div className="grid gap-4 p-6">
          <PortableText value={description} components={portableComponents} />
        </div>
      )}
      <DialogFooter className="justify-between gap-2">
        {buttons.hasSeeMoreButton && buttons.linkSeeMore && (
          <Link href={buttons.linkSeeMore} passHref target="_blank">
            <Button variant="secondary" size="xl" rounded="xl" className="w-full">
              Saiba mais
            </Button>
          </Link>
        )}
        {buttons.hasWhatsappButton && buttons.linkWhatsappButton && (
          <Link href={buttons.linkWhatsappButton} passHref target="_blank">
            <Button
              variant="whatsapp"
              size="xl"
              className="flex items-center justify-center gap-2 w-full"
              rounded="xl"
            >
              <MdOutlineWhatsapp size={32} />{" "}
              {WhatsappButtonLabel[buttons.whatsappButtonLabel as keyof typeof WhatsappButtonLabel]}
            </Button>
          </Link>
        )}
      </DialogFooter>
    </DialogContent>
  );
}
