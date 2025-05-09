'use client';

import { ContactFormDrawer } from '@/components/contact-form-drawer';
import { Button } from '@/components/ui/button';
import { Drawer, DrawerTrigger } from '@/components/ui/drawer';
import { slideUpVariants } from '@/config/animation';
import { urlForImage } from '@/sanity/lib/utils';
import type { Featured } from '@/types/site';
import { motion } from 'framer-motion';
import { MailIcon } from 'lucide-react';
import Image from 'next/image';
import { Autoplay } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

export function Home({ images }: { images: Featured[] }) {
	return (
		<motion.div layout className="w-screen" data-section="home">
			<div className="aspect-[11/15] md:aspect-[10/7] lg:aspect-[7/4] xl:aspect-[12/4] flex items-center justify-start space-y-1 relative bg-white shadow-xl">
				<Swiper
					slidesPerView={1}
					loop={true}
					autoplay={{
						delay: 5000,
						disableOnInteraction: true,
					}}
					modules={[Autoplay]}
					className="w-full h-full"
				>
					{images?.map(({ id, title, subtitle, image }) => (
						<SwiperSlide
							key={id}
							className="relative after:absolute after:z-[3] after:bg-gradient-to-b after:from-transparent after:to-background after:w-full after:h-56 after:-bottom-10 before:absolute before:z-[2] before:top-0 before:bg-gradient-to-b before:from-black/60 before:to-transparent before:w-full before:h-[100px] bg-primary"
						>
							{image && (
								<Image
									className="h-auto w-full z-[1]"
									alt=""
									src={urlForImage(image.asset).url()}
									sizes="100vw"
									fill
									placeholder="blur"
									blurDataURL={image.metadata.lqip}
								/>
							)}
							<div className="container w-full h-full flex flex-row items-center px-10 md:px-20">
								<motion.div
									className="flex flex-col items-center md:items-start justify-start md:justify-center space-y-6 z-30"
									variants={slideUpVariants}
									initial="initial"
									animate="animate"
								>
									<motion.h2 className="text-4xl text-secondary-foreground md:text-5xl font-bold text-center md:text-start drop-shadow-text shadow-black">
										{title}
									</motion.h2>
									<motion.h3 className="text-2xl font-medium text-secondary-foreground md:text-3xl text-center md:text-start drop-shadow-text shadow-black max-w-2xl">
										{subtitle}
									</motion.h3>
									<Drawer>
										<DrawerTrigger asChild>
											<Button
												variant="secondary"
												size="xl"
												rounded="full"
												hover="effect"
												shadow
												className="flex items-center justify-center gap-2"
											>
												<MailIcon fontSize={10} />
												Entre em contato
											</Button>
										</DrawerTrigger>
										<ContactFormDrawer />
									</Drawer>
								</motion.div>
							</div>
						</SwiperSlide>
					))}
				</Swiper>
			</div>
		</motion.div>
	);
}
