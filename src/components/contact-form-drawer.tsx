import { zodResolver } from "@hookform/resolvers/zod";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { AlertCircle, Badge, Loader2 } from "lucide-react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { DrawerContent, DrawerFooter, DrawerHeader, DrawerTitle } from "@/components/ui/drawer";
import { DialogTrigger } from "./ui/dialog";
import { Textarea } from "./ui/textarea";

const contactFormSchema = z.object({
  name: z
    .string({
      required_error: "The name is required.",
    })
    .min(1),
  email: z
    .string({
      required_error: "The name is required.",
    })
    .email(),
  subject: z
    .string({
      required_error: "The subject is required.",
    })
    .min(1),
  message: z
    .string({
      required_error: "The message is required.",
    })
    .min(1),
});

type ContactFormSchema = z.infer<typeof contactFormSchema>;

interface CreateContactFormDialogProps {
  onRequestClose: () => void;
}

export function ContactFormDrawer({ onRequestClose }: CreateContactFormDialogProps) {
  //const { toast } = useToast()
  const queryClient = useQueryClient();

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

  // const { mutateAsync: createTag } = useMutation({
  //   mutationFn: async (tag: string) => {
  //     await api.tags.post({ tag })
  //   },
  //   onSuccess() {
  //     queryClient.invalidateQueries({
  //       queryKey: ['tags'],
  //       exact: true,
  //     })
  //   },
  // })

  async function handleSendForm({ name }: ContactFormSchema) {
    // try {
    //   await createTag(tag)
    //   reset()
    //   onRequestClose()
    // } catch (err) {
    //   toast({
    //     title: 'Uh oh! Something went wrong.',
    //     description: `An error ocurred while trying to create the tag. Maybe you're trying to create a duplicated tag.`,
    //     variant: 'destructive',
    //   })
    // }
  }

  return (
    <DrawerContent className="container max-w-3xl">
      <DrawerHeader>
        <DrawerTitle>Como podemos te ajudar?</DrawerTitle>
      </DrawerHeader>

      <form onSubmit={handleSubmit(handleSendForm)} className="w-full">
        <div className="grid gap-4 py-4">
          <div className="grid grid-cols-2 items-baseline gap-4">
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
                  <p className="text-sm font-medium text-red-500 dark:text-red-400">
                    {errors.name.message}
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
                  {...register("email")}
                />
                {errors.email && (
                  <p className="text-sm font-medium text-red-500 dark:text-red-400">
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
                  <p className="text-sm font-medium text-red-500 dark:text-red-400">
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
                  disabled={isSubmitting}
                  {...register("message")}
                />
                {errors.message && (
                  <p className="text-sm font-medium text-red-500 dark:text-red-400">
                    {errors.message.message}
                  </p>
                )}
              </div>
            </div>
          </div>
        </div>
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
      </form>
    </DrawerContent>
  );
}
