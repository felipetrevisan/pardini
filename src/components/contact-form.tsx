import { zodResolver } from "@hookform/resolvers/zod";
import { InfoIcon, Loader2 } from "lucide-react";
import { MdEmail } from "react-icons/md";
import { useForm } from "react-hook-form";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "./ui/textarea";
import { ContactFormSchema, contactFormSchema } from "@/types/contact";
import { sendEmail } from "@/server/send-email";
import { useToast } from "@/hooks/use-toast";
import { DrawerFooter } from "./ui/drawer";
import { DialogTrigger } from "./ui/dialog";

export function ContactForm({ isDrawer = false }: { isDrawer: boolean }) {
  const { toast } = useToast();

  const {
    register,
    handleSubmit,
    formState: { isSubmitting, errors },
    reset,
  } = useForm<ContactFormSchema>({
    resolver: zodResolver(contactFormSchema),
    defaultValues: {
      name: "",
      email: "",
      subject: "",
      message: "",
    },
  });

  async function handleSendForm(formData: ContactFormSchema) {
    const { data, error } = await sendEmail(formData);

    if (error) {
      toast({
        title: "Não foi possível enviar a mensagem",
        variant: "destructive",
      });

      return false;
    }

    if (data?.id) {
      toast({
        title: "Mensagem enviada com sucesso",
        variant: "success",
      });
      reset();
    }
  }

  return (
    <form
      onSubmit={handleSubmit(handleSendForm)}
      className="w-full grid justify-normal md:justify-center"
    >
      <div className="grid gap-4 py-4">
        <div className="grid grid-cols-1 md:grid-cols-2 items-baseline gap-4">
          <div>
            <Label htmlFor="name" className="text-right">
              Nome
            </Label>
            <div className="col-span-3 space-y-4">
              <Input
                id="name"
                placeholder="Seu nome"
                disabled={isSubmitting}
                {...register("name")}
              />
              {errors.name && (
                <p className="flex items-center gap-1 text-sm font-medium text-secondary">
                  <InfoIcon /> {errors.name.message}
                </p>
              )}
            </div>
          </div>
          <div>
            <Label htmlFor="email" className="text-right">
              Endereço de e-mail
            </Label>
            <div className="col-span-3 space-y-4">
              <Input
                id="email"
                placeholder="E-mail"
                disabled={isSubmitting}
                icon={MdEmail}
                {...register("email")}
              />
              {errors.email && (
                <p className="flex items-center gap-1 text-sm font-medium text-secondary">
                  <InfoIcon />
                  {errors.email.message}
                </p>
              )}
            </div>
          </div>
        </div>
        <div className="grid grid-cols-1 items-baseline gap-4">
          <div>
            <Label htmlFor="subject" className="text-right">
              Assunto
            </Label>
            <div className="col-span-2 space-y-4">
              <Input
                id="subject"
                placeholder="Assunto"
                disabled={isSubmitting}
                {...register("subject")}
              />
              {errors.subject && (
                <p className="flex items-center gap-1 text-sm font-medium text-secondary">
                  <InfoIcon />
                  {errors.subject.message}
                </p>
              )}
            </div>
          </div>
        </div>
        <div className="grid grid-cols-1 items-baseline gap-4">
          <div>
            <Label htmlFor="subject" className="text-right">
              Mensagem
            </Label>
            <div className="col-span-2 space-y-4">
              <Textarea
                id="message"
                placeholder="Mensagem"
                rows={4}
                disabled={isSubmitting}
                {...register("message")}
              />
              {errors.message && (
                <p className="flex items-center gap-1 text-sm font-medium text-secondary">
                  <InfoIcon />
                  {errors.message.message}
                </p>
              )}
            </div>
          </div>
        </div>
      </div>
      {isDrawer && (
        <DrawerFooter>
          <DialogTrigger asChild>
            <Button type="button" variant="ghost" size="xl" rounded="full">
              Cancelar
            </Button>
          </DialogTrigger>
          <Button
            variant="secondary"
            size="xl"
            type="submit"
            rounded="full"
            disabled={isSubmitting}
          >
            {isSubmitting ? <Loader2 className="mr-2 h-4 w-4 animate-spin" /> : "Enviar"}
          </Button>
        </DrawerFooter>
      )}
      {!isDrawer && (
        <div className="flex flex-row md:justify-end">
          <Button
            variant="secondary"
            size="xl"
            type="submit"
            rounded="full"
            disabled={isSubmitting}
            shadow
            className="md:w-[200px] w-full"
          >
            {isSubmitting ? <Loader2 className="mr-2 h-4 w-4 animate-spin" /> : "Enviar"}
          </Button>
        </div>
      )}
    </form>
  );
}
