import Link from "next/link";
import { Button } from "@/components/ui/button";
import * as App from "@/components/app";
import { getPageBySlug } from "@/server/get-page";
import { notFound } from "next/navigation";
import { YouTubeEmbed } from "@next/third-parties/google";
import { urlForImage } from "@/sanity/lib/utils";
import FacebookPixel from "@/components/facebook-pixel";
import { env } from "@/config/env";

import "./styles.scss";

export default async function Page({ params }: { params: Promise<{ slug: string }> }) {
  const [slug] = (await params).slug;

  const { id, title, background, video, button, hasButton } =
    await getPageBySlug(slug);

  if (!id) {
    notFound();
  }

  return (
    <main
      className="relative h-screen w-screen flex items-center flex-col justify-center before:absolute before:w-screen before:h-screen before:z-0 before:bg-black/80 before:backdrop-blur-sm"
      style={{
        backgroundImage: `url("${!background ? "/assets/bg-page-title.jpg" : urlForImage(background.asset).url()}")`,
      }}
    >
      <div className="after:absolute after:-z-[1] after:top-[calc(-1*var(--borderWidth))] after:left-[calc(-1*var(--borderWidth))] after:size-[calc(100%+var(--borderWidth)*2)] after:bg-gradient-to-t after:from-primary after:via-pink-500 after:to-secondary after:animate-border after:bg-[300%_300%] gradient-border relative flex flex-col items-center justify-center bg-white m-10 p-12 gap-2 md:max-w-4xl w-[80vw] max-h-[680px] h-full space-y-8">
        <App.Title className="text-xl md:text-2xl lg:text-3xl">{title}</App.Title>
        <div className="aspect-video !w-full overflow-hidden rounded-2xl">
          <YouTubeEmbed videoid={new URL(video!).pathname.split("/")[2] ?? ""} />
        </div>
        <div className="flex justify-center items-center flex-col gap-2">
          <h4 className="font-bold text-secondary text-md uppercase drop-shadow-text shadow-secondary/20">
            Ficou com dúvidas?
          </h4>
          {hasButton && (
            <Link href={new URL(button?.link ?? "/").href} passHref target="_blank">
              <Button variant="whatsapp" size="2xl" rounded="2xl" hover="effect">
                {button?.label}
              </Button>
            </Link>
          )}
        </div>
      </div>
      <FacebookPixel id={env.NEXT_PUBLIC_FACEBOOK_PIXEL_ID_FAMILY_PAGE} />
    </main>
  );
}
