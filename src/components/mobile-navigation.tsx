'use client';

import * as React from 'react';
import { motion } from 'framer-motion';
import { Fragment } from 'react';
import Link from 'next/link';
import {
	NavigationListItem,
	NavigationMenu,
	NavigationMenuContent,
	NavigationMenuItem,
	NavigationMenuLink,
	NavigationMenuList,
	NavigationMenuTrigger,
} from '@/components/ui/navigation-menu';
import { Dialog, DialogTrigger } from '@/components/ui/dialog';
import { ServiceDetailsDialog } from './service-details-dialog';
import { Skeleton } from '@/components/ui/skeleton';
import { LinkType, Navigation } from '@/types/site';
import { Service } from '@/types/services';
import { cn } from '@/lib/utils';
import { menuItemVariants } from '@/config/animation';
import { useApp } from '@/hooks/use-app';

type NavigationProps = {
	navigation?: Navigation;
	servicesData?: Service[];
	isServicesLoading?: boolean;
};

const MenuItemMotion = motion(NavigationMenuItem);

export const MobileNavigation = ({
	navigation,
	servicesData,
	isServicesLoading,
}: NavigationProps) => {
	const { isMenuActive, toggleMenu } = useApp();

	return (
		<NavigationMenu className="flex mx-auto lg:hidden" orientation="vertical">
			<NavigationMenuList>
				{navigation?.items?.map(
					({ id, hasSubmenu, label, url, submenu, columns }) => (
						<Fragment key={`frag-${id}`}>
							{hasSubmenu ? (
								<MenuItemMotion
									variants={menuItemVariants}
									whileHover={{ scale: 1.1 }}
									whileTap={{ scale: 0.95 }}
								>
									<NavigationMenuTrigger>{label}</NavigationMenuTrigger>
									<NavigationMenuContent>
										<ul
											className={cn('flex flex-col gap-3 p-4 w-full', {
												'md:grid md:grid-cols-1 md:w-[400px] lg:w-[600px]':
													columns === 1,
												'md:grid md:grid-cols-2 md:w-[400px] lg:w-[600px]':
													columns === 2,
												'md:grid md:grid-cols-3 md:w-[400px] lg:w-[600px]':
													columns === 3,
											})}
										>
											{submenu?.map(({ id: submenuId, label, url }) => (
												<Fragment key={`frag-${submenuId}`}>
													{url.type === LinkType.SERVICE_DIALOG ? (
														<Fragment>
															{isServicesLoading ? (
																<Fragment>
																	{Array.from({ length: 10 }).map(
																		(_, index) => (
																			<li
																				key={index}
																				className="space-y-1 rounded-md p-3"
																			>
																				<Skeleton className="h-6" />
																			</li>
																		),
																	)}
																</Fragment>
															) : (
																<Fragment>
																	{servicesData?.map((service) => (
																		<Dialog key={`submenu-${service.id}`}>
																			<DialogTrigger asChild>
																				<NavigationListItem
																					title={service.title}
																					icon={service.icon}
																				/>
																			</DialogTrigger>
																			<ServiceDetailsDialog {...service} />
																		</Dialog>
																	))}
																</Fragment>
															)}
														</Fragment>
													) : (
														<NavigationListItem
															title={label}
															key={submenuId}
															href={url?.usePath ? url?.path : url?.externalUrl}
														/>
													)}
												</Fragment>
											))}
										</ul>
									</NavigationMenuContent>
								</MenuItemMotion>
							) : (
								<MenuItemMotion
									variants={menuItemVariants}
									whileHover={{ scale: 1.1 }}
									whileTap={{ scale: 0.95 }}
								>
									<Link
										href={url.usePath ? url.path! : url.externalUrl!}
										target={
											!url.usePath && url.externalUrl ? '_blank' : undefined
										}
										legacyBehavior
										passHref
									>
										<NavigationMenuLink
											active={(url.usePath && isMenuActive(url.path!)) || false}
											className="data-[active]:text-accent relative"
										>
											{label}
										</NavigationMenuLink>
									</Link>
								</MenuItemMotion>
							)}
						</Fragment>
					),
				)}
			</NavigationMenuList>
		</NavigationMenu>
	);
};
