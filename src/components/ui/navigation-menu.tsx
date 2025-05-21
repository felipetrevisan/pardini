import * as NavigationMenuPrimitive from '@radix-ui/react-navigation-menu';
import { ChevronDownIcon, icons } from 'lucide-react';
import type * as React from 'react';

import { cn } from '@/lib/utils';

function NavigationMenu({
	className,
	children,
	viewport = true,
	...props
}: React.ComponentProps<typeof NavigationMenuPrimitive.Root> & {
	viewport?: boolean;
}) {
	return (
		<NavigationMenuPrimitive.Root
			data-slot="navigation-menu"
			data-viewport={viewport}
			className={cn(
				'group/navigation-menu relative flex max-w-max flex-1 items-center justify-center',
				className,
			)}
			{...props}
		>
			{children}
			{viewport && <NavigationMenuViewport />}
		</NavigationMenuPrimitive.Root>
	);
}

function NavigationMenuList({
	className,
	...props
}: React.ComponentProps<typeof NavigationMenuPrimitive.List>) {
	return (
		<NavigationMenuPrimitive.List
			data-slot="navigation-menu-list"
			className={cn(
				'group flex flex-1 list-none items-center justify-center gap-1 space-x-1 lg:gap-5 data-[orientation=vertical]:flex-col data-[orientation=vertical]:justify-start',
				className,
			)}
			{...props}
		/>
	);
}

function NavigationMenuItem({
	className,
	...props
}: React.ComponentProps<typeof NavigationMenuPrimitive.Item>) {
	return (
		<NavigationMenuPrimitive.Item
			data-slot="navigation-menu-item"
			className={cn(
				'relative font-bold lg:font-semibold text-secondary lg:text-accent uppercase block p-4 text-xl md:text-3xl lg:text-base transition-all cursor-pointer',
				'lg:before:transition-[all_0.35s_ease] lg:before:size-5 lg:before:absolute lg:before:opacity-0 lg:before:left-0 lg:before:top-0 lg:before:border-l-2 lg:before:border-t-2 lg:before:border-l-primary lg:before:border-t-primary lg:before:translate-x-12 lg:before:translate-y-12',
				'lg:after:transition-[all_0.35s_ease] lg:after:size-5 lg:after:absolute lg:after:opacity-0 lg:before:right-0 lg:before:bottom-0 lg:after:border-r-2 lg:after:border-b-2 lg:after:border-r-secondary lg:after:border-b-secondary lg:after:-translate-x-12 lg:after:-translate-y-12',
				'lg:hover:before:translate-x-0 lg:hover:before:translate-y-0 lg:hover:before:opacity-100 lg:hover:after:-translate-x-[0.188rem] lg:hover:after:translate-y-full lg:hover:after:opacity-100',
				'lg:has-[>[data-active]]:pointer-events-none lg:has-[>[data-active]]:before:translate-x-0 lg:has-[>[data-active]]:before:translate-y-0 lg:has-[>[data-active]]:before:opacity-100 lg:has-[>[data-active]]:after:-translate-x-[0.188rem] lg:has-[>[data-active]]:after:translate-y-full lg:has-[>[data-active]]:after:opacity-100',
				'has-[>[data-active]]:before:block has-[>[data-active]]:before:absolute has-[>[data-active]]:before:-inset-1 has-[>[data-active]]:before:-skew-y-3 has-[>[data-active]]:before:bg-secondary has-[>[data-active]]:before:text-accent',
				'lg:has-[>[data-active]]:before:flex lg:has-[>[data-active]]:before:inset-0 lg:has-[>[data-active]]:before:skew-x-0 lg:has-[>[data-active]]:before:bg-transparent',
				'hover:has-[>[data-active]]:before:block hover:has-[>[data-active]]:before:absolute hover:has-[>[data-active]]:before:-inset-1 hover:has-[>[data-active]]:before:-skew-y-3 hover:has-[>[data-active]]:before:bg-secondary hover:has-[>[data-active]]:before:text-accent',
				className,
			)}
			{...props}
		/>
	);
}

function NavigationMenuTrigger({
	className,
	children,
	...props
}: React.ComponentProps<typeof NavigationMenuPrimitive.Trigger>) {
	return (
		<NavigationMenuPrimitive.Trigger
			data-slot="navigation-menu-trigger"
			className={cn(
				'group inline-flex w-max items-center justify-center rounded-md font-bold lg:font-semibold text-secondary lg:text-accent text-xl md:text-3xl lg:text-base cursor-pointer uppercase transition-colors focus:outline-none disabled:pointer-events-none disabled:opacity-50 group',
				className,
			)}
			{...props}
		>
			{children}{' '}
			<ChevronDownIcon
				className="relative top-[1px] ml-1 size-3 transition duration-300 group-data-[state=open]:rotate-180"
				aria-hidden="true"
			/>
		</NavigationMenuPrimitive.Trigger>
	);
}

function NavigationMenuContent({
	className,
	...props
}: React.ComponentProps<typeof NavigationMenuPrimitive.Content>) {
	return (
		<NavigationMenuPrimitive.Content
			data-slot="navigation-menu-content"
			className={cn(
				'data-[motion^=from-]:animate-in data-[motion^=to-]:animate-out data-[motion^=from-]:fade-in data-[motion^=to-]:fade-out data-[motion=from-end]:slide-in-from-right-52 data-[motion=from-start]:slide-in-from-left-52 data-[motion=to-end]:slide-out-to-right-52 data-[motion=to-start]:slide-out-to-left-52 top-0 left-0 w-full p-2 pr-2.5 md:absolute md:w-auto',
				'group-data-[viewport=false]/navigation-menu:bg-popover group-data-[viewport=false]/navigation-menu:text-popover-foreground group-data-[viewport=false]/navigation-menu:data-[state=open]:animate-in group-data-[viewport=false]/navigation-menu:data-[state=closed]:animate-out group-data-[viewport=false]/navigation-menu:data-[state=closed]:zoom-out-95 group-data-[viewport=false]/navigation-menu:data-[state=open]:zoom-in-95 group-data-[viewport=false]/navigation-menu:data-[state=open]:fade-in-0 group-data-[viewport=false]/navigation-menu:data-[state=closed]:fade-out-0 group-data-[viewport=false]/navigation-menu:top-full group-data-[viewport=false]/navigation-menu:mt-1.5 group-data-[viewport=false]/navigation-menu:overflow-hidden group-data-[viewport=false]/navigation-menu:rounded-md group-data-[viewport=false]/navigation-menu:border group-data-[viewport=false]/navigation-menu:shadow group-data-[viewport=false]/navigation-menu:duration-200 **:data-[slot=navigation-menu-link]:focus:ring-0 **:data-[slot=navigation-menu-link]:focus:outline-none',
				className,
			)}
			{...props}
		/>
	);
}

function NavigationMenuViewport({
	className,
	...props
}: React.ComponentProps<typeof NavigationMenuPrimitive.Viewport>) {
	return (
		<div
			className={cn(
				'absolute w-[65vw] md:w-auto top-0 left-[50%] -translate-x-[50%] md:translate-x-0 md:right-0 md:top-full md:left-0 flex justify-center isolate',
			)}
		>
			<NavigationMenuPrimitive.Viewport
				data-slot="navigation-menu-viewport"
				className={cn(
					'origin-top-center bg-popover text-popover-foreground data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-90 relative mt-1.5 h-[var(--radix-navigation-menu-viewport-height)] w-full overflow-hidden rounded-md backdrop-blur-lg md:border-4 md:border-secondary md:shadow md:w-[var(--radix-navigation-menu-viewport-width)]',
					className,
				)}
				{...props}
			/>
		</div>
	);
}

function NavigationMenuLink({
	className,
	...props
}: React.ComponentProps<typeof NavigationMenuPrimitive.Link>) {
	return (
		<NavigationMenuPrimitive.Link
			data-slot="navigation-menu-link"
			className={cn(className)}
			{...props}
		/>
	);
}

function NavigationMenuIndicator({
	className,
	...props
}: React.ComponentProps<typeof NavigationMenuPrimitive.Indicator>) {
	return (
		<NavigationMenuPrimitive.Indicator
			data-slot="navigation-menu-indicator"
			className={cn(
				'data-[state=visible]:animate-in data-[state=hidden]:animate-out data-[state=hidden]:fade-out data-[state=visible]:fade-in top-full z-[1] flex h-1.5 items-end justify-center overflow-hidden',
				className,
			)}
			{...props}
		>
			<div className="bg-border relative top-[60%] h-2 w-2 rotate-45 rounded-tl-sm shadow-md" />
		</NavigationMenuPrimitive.Indicator>
	);
}

function NavigationListItem({
	className,
	title,
	icon,
	children,
	...props
}: React.ComponentProps<'a'> & {
	icon?: keyof typeof icons | null;
}) {
	const LucideIcon = icon ? icons[icon] : null;

	return (
		<li className="cursor-pointer">
			<a
				className={cn(
					'block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-secondary hover:text-secondary-foreground focus:bg-secondary focus:text-secondary-foreground',
					className,
				)}
				{...props}
			>
				<div className="flex flex-row items-center gap-2">
					{LucideIcon && (
						<LucideIcon className="size-6 hidden md:inline-flex" />
					)}
					<div className="text-md font-medium leading-none">{title}</div>
				</div>
				{children && (
					<p className="line-clamp-1 text-sm leading-snug">{children}</p>
				)}
			</a>
		</li>
	);
}

export {
	NavigationMenu,
	NavigationMenuList,
	NavigationMenuItem,
	NavigationMenuContent,
	NavigationMenuTrigger,
	NavigationMenuLink,
	NavigationMenuIndicator,
	NavigationMenuViewport,
	NavigationListItem,
};
