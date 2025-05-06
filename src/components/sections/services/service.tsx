'use client';

import { Fragment } from 'react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import {
	Carousel,
	CarouselContent,
	CarouselItem,
	CarouselPrevious,
	CarouselNext,
} from '@/components/ui/carousel';
import { Item } from './item';
import { useServices } from '@/hooks/use-services';
import { ServiceSkeleton } from './skeleton';
import { ServiceType } from '@/types/services';

export function ServicesItems() {
	const { data, isLoading } = useServices();

	return (
		<Tabs defaultValue="dont-have-citizenship">
			<TabsList className="grid w-full grid-cols-1 md:grid-cols-2">
				<TabsTrigger value="dont-have-citizenship">
					Ainda não tenho cidadania
				</TabsTrigger>
				<TabsTrigger value="already-have-citizenship">
					Já tenho cidadania
				</TabsTrigger>
			</TabsList>
			<TabsContent value="dont-have-citizenship" className="w-full">
				<Carousel>
					<CarouselContent>
						{isLoading ? (
							<Fragment>
								{Array.from({ length: 4 }).map((_, index) => (
									<CarouselItem
										className="basis-full md:basis-1/2 lg:basis-1/3 xl:basis-1/4"
										key={index}
									>
										<ServiceSkeleton key={index} />
									</CarouselItem>
								))}
							</Fragment>
						) : (
							<Fragment>
								{data
									?.filter((service) => service.type === ServiceType.NOT_HAVING)
									.map((service) => (
										<CarouselItem
											className="basis-full md:basis-1/2 lg:basis-1/3 xl:basis-1/4"
											key={service.id}
										>
											<Item {...service}>
												<p className="line-clamp-4">{service.excerpt}</p>
											</Item>
										</CarouselItem>
									))}
							</Fragment>
						)}
					</CarouselContent>
					<div className="relative flex justify-end mt-4 gap-4">
						<CarouselPrevious className="relative top-0 left-0 translate-y-0" />
						<CarouselNext className="relative top-0 right-0 translate-y-0" />
					</div>
				</Carousel>
			</TabsContent>
			<TabsContent value="already-have-citizenship" className="w-full">
				<Carousel>
					<CarouselContent>
						{isLoading ? (
							<Fragment>
								{Array.from({ length: 4 }).map((_, index) => (
									<CarouselItem
										className="basis-full md:basis-1/2 lg:basis-1/3 xl:basis-1/4"
										key={index}
									>
										<ServiceSkeleton key={index} />
									</CarouselItem>
								))}
							</Fragment>
						) : (
							<Fragment>
								{data
									?.filter((service) => service.type === ServiceType.HAVING)
									.map((service) => (
										<CarouselItem
											className="basis-full md:basis-1/2 lg:basis-1/3 xl:basis-1/4"
											key={service.id}
										>
											<Item {...service}>
												<p className="line-clamp-4">{service.excerpt}</p>
											</Item>
										</CarouselItem>
									))}
							</Fragment>
						)}
					</CarouselContent>
					<div className="relative flex justify-end mt-4 gap-4">
						<CarouselPrevious className="relative top-0 left-0 translate-y-0" />
						<CarouselNext className="relative top-0 right-0 translate-y-0" />
					</div>
				</Carousel>
			</TabsContent>
		</Tabs>
	);
}
