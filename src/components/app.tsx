'use client';

import { Slot } from '@radix-ui/react-slot';
import {
	AnimatePresence,
	motion,
	useAnimation,
	useMotionValueEvent,
	useScroll,
	useTransform,
} from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import {
	Fragment,
	type HTMLAttributes,
	forwardRef,
	useRef,
	useState,
} from 'react';
import { MdOutlineWhatsapp } from 'react-icons/md';
import { Background, Parallax } from 'react-parallax';

import { Button } from '@/components/ui/button';
import * as Navbar from '@/components/ui/navbar';
import { useApp } from '@/hooks/use-app';
import { useDimensions } from '@/hooks/use-dimensions';
import { useServices } from '@/hooks/use-services';
import { useSite } from '@/hooks/use-site';
import { cn } from '@/lib/utils';
import * as VisuallyHidden from '@radix-ui/react-visually-hidden';
import { type VariantProps, cva } from 'class-variance-authority';
import { DesktopNavigation } from './desktop-navigation';
import { Logo } from './logo';
import { MobileNavigation } from './mobile-navigation';
import { SocialNetworks } from './social-icons';
import { Drawer, DrawerContent, DrawerTitle, DrawerTrigger } from './ui/drawer';

function Header({
	className,
	children,
	...props
}: React.ComponentProps<typeof motion.header>) {
	const { data: serviceData, isLoading } = useServices();
	const { data: siteConfigData, isLoading: isSiteConfigLoading } = useSite();
	const [currentScrollY, setCurrentScrollY] = useState(0);
	const containerRef = useRef<HTMLDivElement | null>(null);
	const { height } = useDimensions(containerRef);
	const { isMenuOpen, toggleMenu } = useApp();
	const { scrollY } = useScroll();

	const scrollYRange = [0, 100, 100];

	const logoSizeHeight = useTransform(scrollY, scrollYRange, [
		'60px',
		'56px',
		'56px',
	]);
	const logoSizeWidth = useTransform(scrollY, scrollYRange, [
		'220px',
		'174px',
		'174px',
	]);
	const iconScale = useTransform(scrollY, scrollYRange, ['1', '.75', '.75']);
	const paddingHeaderX = useTransform(scrollY, scrollYRange, [
		'30px',
		'20px',
		'20px',
	]);
	const paddingHeaderY = useTransform(scrollY, scrollYRange, [
		'1.2rem',
		'1rem',
		'1rem',
	]);

	const controls = useAnimation();
	const delta = useRef(0);
	const lastScrollY = useRef(0);

	useMotionValueEvent(scrollY, 'change', (val) => {
		const diff = Math.abs(val - lastScrollY.current);

		if (val >= lastScrollY.current) {
			delta.current = delta.current >= 10 ? 10 : delta.current + diff;
		} else {
			delta.current = delta.current <= -10 ? -10 : delta.current - diff;
		}

		if (delta.current >= 10 && val > 200) {
			controls.start('hidden');
		} else if (delta.current <= -10 || val < 200) {
			controls.start('visible');
		}

		lastScrollY.current = val;
		setCurrentScrollY(val);
	});

	return (
		<motion.header
			className={cn(
				'fixed top-0 z-100 w-full backdrop-blur-md transition-colors duration-500 bg-transparent h-20',
				{
					'bg-black/60 backdrop-blur-xl': currentScrollY > 200,
					'backdrop-blur-none': currentScrollY < 200,
				},
				className,
			)}
			{...props}
			{...(isMenuOpen && { 'data-menu-open': true })}
		>
			<Navbar.Root
				sticky
				initial="visible"
				animate={controls}
				variants={{
					visible: { top: '0px' },
					hidden: { top: '0px' },
				}}
				style={{
					paddingLeft: paddingHeaderX,
					paddingRight: paddingHeaderX,
					paddingTop: paddingHeaderY,
					paddingBottom: paddingHeaderY,
				}}
			>
				<Fragment>
					<Navbar.Brand className={cn({ hidden: isMenuOpen })}>
						<Logo height={logoSizeHeight} width={logoSizeWidth} />
					</Navbar.Brand>
					<motion.div
						animate={isMenuOpen ? 'open' : 'closed'}
						custom={height}
						ref={containerRef}
						className="flex"
					>
						{!isSiteConfigLoading && (
							<Fragment>
								<DesktopNavigation
									navigation={siteConfigData?.primaryNavigation}
									servicesData={serviceData}
									isServicesLoading={isLoading}
								/>
								<Drawer
									open={isMenuOpen}
									onClose={() => toggleMenu(0)}
									direction="right"
								>
									<DrawerTrigger
										asChild
										className={cn({
											hidden: isMenuOpen,
										})}
									>
										<Navbar.Toggle />
									</DrawerTrigger>
									<VisuallyHidden.Root>
										<DrawerTitle>Menu</DrawerTitle>
									</VisuallyHidden.Root>
									<DrawerContent className="container max-w-xl md:max-w-4xl h-[99svh]">
										<div className="flex justify-between">
											<Navbar.Brand className="mt-5">
												<Logo height={logoSizeHeight} width={logoSizeWidth} />
											</Navbar.Brand>
											<DrawerTrigger asChild>
												<Navbar.Toggle className="mt-5 bg-secondary text-muted" />
											</DrawerTrigger>
										</div>
										<MobileNavigation
											navigation={siteConfigData?.primaryNavigation}
											servicesData={serviceData}
											isServicesLoading={isLoading}
										/>
									</DrawerContent>
								</Drawer>
							</Fragment>
						)}
					</motion.div>
				</Fragment>
			</Navbar.Root>
		</motion.header>
	);
}

function Content({
	className,
	children,
	...props
}: React.ComponentProps<typeof motion.main>) {
	return (
		<motion.main
			className={cn(
				'container max-w-8xl mx-auto px-4 sm:px-6 md:px-8',
				className,
			)}
			{...props}
		>
			{children}
		</motion.main>
	);
}

function Footer({
	className,
	children,
	...props
}: React.ComponentProps<typeof motion.footer>) {
	const MotionButton = motion(Button);

	const { data, isLoading } = useSite();

	return (
		<motion.footer
			className="container flex flex-col space-y-10 w-full select-none items-center mt-10 pb-10 lg:relative"
			{...props}
		>
			{!isLoading && data?.whatsappUrl && (
				<div className="fixed bottom-4 right-10 z-50 flex flex-row items-center gap-4">
					<Link href={data.whatsappUrl} passHref target="_blank">
						<MotionButton
							aria-label="Entre em contato por Whatsapp"
							whileHover={{ scale: 1.1 }}
							whileTap={{ scale: 1.1 }}
							theme="whatsapp"
							variant="icon"
							size="2xl"
							rounded="full"
							className="flex items-center justify-center gap-2 shadow"
						>
							<MdOutlineWhatsapp />
							<span className="sr-only">Entre em contato por Whatsapp</span>
						</MotionButton>
					</Link>
				</div>
			)}
			<div className="flex flex-col gap-10 md:gap-0 md:flex-row items-center justify-between w-full">
				<Image
					src="/assets/logo-pardini.png"
					alt="Logo Pardini"
					width="200"
					height="60"
					sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
					className="w-[200px]"
					priority
				/>
				<SocialNetworks />
				<p className="text-center text-white text-opacity-75">
					© {new Date().getFullYear()} - Todos os direitos reservados
				</p>
			</div>
		</motion.footer>
	);
}

const titleVariants = cva('font-oswald font-bold', {
	variants: {
		variant: {
			default: 'text-black',
			primary: 'text-primary',
			secondary: 'text-secondary',
			tertiary: 'text-tertiary',
			white: 'text-white',
		},
		size: {
			default: 'clamp-[text,2xl,6xl]',
			sm: 'clamp-[text,sm,lg]',
			lg: 'clamp-[text,lg,2xl]',
			xl: 'clamp-[text,xl,4xl]',
			'2xl': 'clamp-[text,2xl,8xl]',
		},
	},
	defaultVariants: {
		variant: 'default',
		size: 'default',
	},
});

function Title({
	className,
	variant,
	size,
	asChild = false,
	children,
	...props
}: React.ComponentProps<'h1'> &
	VariantProps<typeof titleVariants> & {
		asChild?: boolean;
	}) {
	const Comp = asChild ? Slot : 'h1';

	return (
		<div className={cn('flex gap-1 items-center', className)} {...props}>
			{/* biome-ignore lint/a11y/noSvgWithoutTitle: <explanation> */}
			<svg
				xmlns="http://www.w3.org/2000/svg"
				width="26"
				height="7"
				viewBox="0 0 26 7"
				fill="none"
			>
				<path
					d="M26 0.999776C26 1.55218 25.2166 2 24.2493 2H7.74961C7.26654 2 6.82911 1.88808 6.51229 1.70704C6.19573 1.52628 6 1.27626 6 1.00007C5.99974 0.447599 6.78343 -0.000149254 7.75053 3.73222e-08H24.2506C25.2171 0.000124446 25.9998 0.447599 26 0.999776Z"
					className="fill-secondary"
				/>
				<path
					d="M20 5.99978C20 6.55218 19.2166 7 18.2493 7H1.74961C1.26654 7 0.829108 6.88808 0.512287 6.70704C0.195727 6.52628 6.53032e-08 6.27626 6.53032e-08 6.00007C-0.000261194 5.4476 0.783431 4.99985 1.75053 5H18.2506C19.2171 5.00012 19.9998 5.4476 20 5.99978Z"
					className="fill-secondary"
				/>
			</svg>
			<Comp
				className={cn(
					'font-bold uppercase drop-shadow-text shadow-secondary/20',
					titleVariants({ variant, size }),
					className,
				)}
			>
				{children}
			</Comp>
		</div>
	);
}

function Subtitle({
	className,
	variant,
	size,
	asChild = false,
	children,
	...props
}: React.ComponentProps<'h3'> &
	VariantProps<typeof titleVariants> & {
		asChild?: boolean;
	}) {
	const Comp = asChild ? Slot : 'h3';

	return (
		<Comp
			className={cn(
				titleVariants({ variant, size }),
				className,
				'ms-7 font-semibold',
				// 'clamp-[lg-6cqw-2xl] text-x font-oswald font-light text-center text-primary-foreground text-wrap',
			)}
			{...props}
		>
			{children}
		</Comp>
	);
}

function PageHeader({
	className,
	children,
	background,
	...props
}: React.ComponentProps<'div'> & {
	background?: string;
}) {
	return (
		<Parallax strength={500} blur={{ min: -1, max: 3 }} className="w-screen">
			<Background>
				<div
					className="w-screen h-screen bg-cover bg-center"
					style={{
						backgroundImage: `url("${
							!background ? '/assets/bg-page-title.png' : background
						}")`,
					}}
				/>
			</Background>
			<div
				className={cn(
					'overflow-hidden relative w-full h-[500px] md:h-[590px] flex items-center after:absolute after:z-3 after:bg-linear-to-b after:from-transparent after:to-background after:w-full after:h-56 after:-bottom-10 before:absolute before:z-2 before:top-0 before:bg-linear-to-b before:from-black/60 before:to-transparent before:w-full before:h-full',
					className,
				)}
				{...props}
			>
				<div className="max-w-8xl relative p-4 mx-auto w-full z-4 flex justify-center items-center -translate-y-12">
					<h1
						className={cn(
							'font-bold text-white clamp-[text,2xl,6xl] uppercase lg:normal-case line-clamp-4 p-10',
							className,
						)}
					>
						{children}
					</h1>
				</div>
			</div>
		</Parallax>
	);
}

export { Header, Content, Footer, Title, Subtitle, PageHeader };
