import * as React from 'react';
import { icons } from 'lucide-react';
import { ChevronDownIcon } from '@radix-ui/react-icons';
import * as NavigationMenuPrimitive from '@radix-ui/react-navigation-menu';
import { cva } from 'class-variance-authority';

import { cn } from '@/lib/utils';

const NavigationMenu = React.forwardRef<
	React.ElementRef<typeof NavigationMenuPrimitive.Root>,
	React.ComponentPropsWithoutRef<typeof NavigationMenuPrimitive.Root>
>(({ className, children, ...props }, ref) => (
	<NavigationMenuPrimitive.Root
		ref={ref}
		className={cn(
			'relative z-10 flex max-w-max flex-1 items-center justify-center',
			className,
		)}
		{...props}
	>
		{children}
		<NavigationMenuViewport />
	</NavigationMenuPrimitive.Root>
));
NavigationMenu.displayName = NavigationMenuPrimitive.Root.displayName;

const NavigationMenuList = React.forwardRef<
	React.ElementRef<typeof NavigationMenuPrimitive.List>,
	React.ComponentPropsWithoutRef<typeof NavigationMenuPrimitive.List>
>(({ className, ...props }, ref) => (
	<NavigationMenuPrimitive.List
		ref={ref}
		className={cn(
			'group flex flex-1 flex-wrap list-none items-center justify-center space-x-1 lg:gap-5 data-[orientation=vertical]:flex-col data-[orientation=vertical]:justify-start',
			className,
		)}
		{...props}
	/>
));
NavigationMenuList.displayName = NavigationMenuPrimitive.List.displayName;

const NavigationMenuItem = React.forwardRef<
	React.ElementRef<typeof NavigationMenuPrimitive.Item>,
	React.ComponentPropsWithoutRef<typeof NavigationMenuPrimitive.Item>
>(({ className, ...props }, ref) => (
	<NavigationMenuPrimitive.Item
		ref={ref}
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
));
NavigationMenuItem.displayName = NavigationMenuPrimitive.Item.displayName;

const navigationMenuTriggerStyle = cva(
	'group inline-flex w-max items-center justify-center rounded-md font-bold lg:font-semibold text-secondary lg:text-accent text-xl md:text-3xl lg:text-base cursor-pointer uppercase transition-colors focus:outline-none disabled:pointer-events-none disabled:opacity-50',
);

const NavigationMenuTrigger = React.forwardRef<
	React.ElementRef<typeof NavigationMenuPrimitive.Trigger>,
	React.ComponentPropsWithoutRef<typeof NavigationMenuPrimitive.Trigger>
>(({ className, children, ...props }, ref) => (
	<NavigationMenuPrimitive.Trigger
		ref={ref}
		className={cn(navigationMenuTriggerStyle(), 'group', className)}
		{...props}
	>
		{children}{' '}
		<ChevronDownIcon
			className="relative top-[1px] ml-1 size-5 transition duration-300 group-data-[state=open]:rotate-180"
			aria-hidden="true"
		/>
	</NavigationMenuPrimitive.Trigger>
));
NavigationMenuTrigger.displayName = NavigationMenuPrimitive.Trigger.displayName;

const NavigationMenuContent = React.forwardRef<
	React.ElementRef<typeof NavigationMenuPrimitive.Content>,
	React.ComponentPropsWithoutRef<typeof NavigationMenuPrimitive.Content>
>(({ className, ...props }, ref) => (
	<NavigationMenuPrimitive.Content
		ref={ref}
		className={cn(
			'left-0 top-0 w-full data-[motion^=from-]:animate-in data-[motion^=to-]:animate-out data-[motion^=from-]:fade-in data-[motion^=to-]:fade-out data-[motion=from-end]:slide-in-from-right-52 data-[motion=from-start]:slide-in-from-left-52 data-[motion=to-end]:slide-out-to-right-52 data-[motion=to-start]:slide-out-to-left-52 md:absolute md:w-auto',
			className,
		)}
		{...props}
	/>
));
NavigationMenuContent.displayName = NavigationMenuPrimitive.Content.displayName;

const NavigationMenuLink = React.forwardRef<
	React.ElementRef<typeof NavigationMenuPrimitive.Link>,
	React.ComponentPropsWithoutRef<typeof NavigationMenuPrimitive.Link>
>(({ className, ...props }, ref) => (
	<NavigationMenuPrimitive.Link
		ref={ref}
		className={cn(className)}
		{...props}
	></NavigationMenuPrimitive.Link>
));

NavigationMenuLink.displayName = NavigationMenuPrimitive.Link.displayName;

const NavigationMenuViewport = React.forwardRef<
	React.ElementRef<typeof NavigationMenuPrimitive.Viewport>,
	React.ComponentPropsWithoutRef<typeof NavigationMenuPrimitive.Viewport>
>(({ className, ...props }, ref) => (
	<div
		className={cn(
			'absolute w-[65vw] md:w-auto top-0 left-[50%] -translate-x-[50%] md:translate-x-0 md:right-0 md:top-full md:left-0 flex justify-center',
		)}
	>
		<NavigationMenuPrimitive.Viewport
			className={cn(
				'origin-top-center relative mt-16 lg:m-0 h-[74svh] overflow-y-scroll lg:overflow-hidden lg:h-[var(--radix-navigation-menu-viewport-height)] w-full rounded-md backdrop-blur-lg md:border-4 md:border-secondary bg-muted/80 md:bg-muted text-secondary font-bold shadow-black data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-90 md:w-[var(--radix-navigation-menu-viewport-width)]',
				className,
			)}
			ref={ref}
			{...props}
		/>
	</div>
));
NavigationMenuViewport.displayName =
	NavigationMenuPrimitive.Viewport.displayName;

const NavigationMenuIndicator = React.forwardRef<
	React.ElementRef<typeof NavigationMenuPrimitive.Indicator>,
	React.ComponentPropsWithoutRef<typeof NavigationMenuPrimitive.Indicator>
>(({ className, ...props }, ref) => (
	<NavigationMenuPrimitive.Indicator
		ref={ref}
		className={cn(
			'top-full z-[1] flex h-1.5 items-end justify-center overflow-hidden data-[state=visible]:animate-in data-[state=hidden]:animate-out data-[state=hidden]:fade-out data-[state=visible]:fade-in',
			className,
		)}
		{...props}
	>
		<div className="relative top-[60%] h-2 w-2 rotate-45 rounded-tl-sm bg-border shadow-md" />
	</NavigationMenuPrimitive.Indicator>
));
NavigationMenuIndicator.displayName =
	NavigationMenuPrimitive.Indicator.displayName;

export interface NavigationListItemProps
	extends React.AnchorHTMLAttributes<HTMLAnchorElement>,
		React.ComponentPropsWithoutRef<'a'> {
	icon?: keyof typeof icons | null;
}

const NavigationListItem = React.forwardRef<
	HTMLAnchorElement,
	NavigationListItemProps
>(({ className, title, icon, children, ...props }, ref) => {
	const LucideIcon = icon ? icons[icon] : null;

	return (
		<li className="cursor-pointer">
			<a
				className={cn(
					'block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-secondary hover:text-secondary-foreground focus:bg-secondary focus:text-secondary-foreground',
					className,
				)}
				ref={ref}
				{...props}
			>
				<div className="flex flex-row items-center gap-2">
					{LucideIcon && (
						<LucideIcon className="size-6 hidden md:inline-flex" />
					)}
					<div className="text-lg md:text-md font-medium leading-none">
						{title}
					</div>
				</div>
				{children && (
					<p className="line-clamp-1 text-sm leading-snug">{children}</p>
				)}
			</a>
		</li>
	);
});

NavigationListItem.displayName = 'NavigationListItem';

export {
	navigationMenuTriggerStyle,
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
