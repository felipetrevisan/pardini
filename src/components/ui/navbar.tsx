import * as React from "react";
import { cn } from "@/lib/utils";
import { VariantProps, cva } from "class-variance-authority";
import { Slot } from "@radix-ui/react-slot";
import { HTMLMotionProps, motion } from "framer-motion";
import { ComponentProps } from "react";
import { icons } from "lucide-react";
import { useApp } from "@/hooks/useApp";

const navbarVariants = cva(
  "w-full h-auto sm:px-4 w-full bg-black/80 border-gray-200 shadow-black backdrop-blur-md p-2",
  {
    variants: {
      sticky: {
        true: "fixed z-[90] top-0 start-0",
      },
      rounded: {
        none: "rounded-none",
        full: "rounded-full",
        lg: "rounded-lg",
      },
    },
    defaultVariants: {
      sticky: false,
      rounded: "none",
    },
  }
);

export interface NavbarProps extends HTMLMotionProps<"nav">, VariantProps<typeof navbarVariants> {
  children: JSX.Element;
}

const Root = React.forwardRef<HTMLDivElement, NavbarProps>(
  ({ className, sticky, rounded, children, ...props }, ref) => {
    return (
      <motion.nav
        ref={ref}
        className={cn(navbarVariants({ sticky, rounded, className }))}
        {...props}
      >
        <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto">
          {children}
        </div>
      </motion.nav>
    );
  }
);
Root.displayName = "Navbar.Root";

export interface NavBrandProps extends React.HTMLAttributes<HTMLDivElement> {
  asChild?: boolean;
}

const Brand = React.forwardRef<HTMLDivElement, NavBrandProps>(
  ({ className, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "div";
    return <Comp className={cn("flex items-center space-x-3", className)} ref={ref} {...props} />;
  }
);
Brand.displayName = "Navbar.Brand";

const Collapse = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
  ({ className, children, ...props }, ref) => {
    const { isMenuOpen } = useApp();

    return (
      <div
        className={cn(
          "md:flex md:gap-10",
          {
            hidden: !isMenuOpen,
          },
          className
        )}
        {...props}
        ref={ref}
      >
        {children}
      </div>
    );
  }
);
Collapse.displayName = "Navbar.Collapse";

export interface NavLinkProps extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  asChild?: boolean;
  disabled?: boolean;
  active?: boolean;
}

const Link = React.forwardRef<HTMLAnchorElement, NavLinkProps>(
  ({ className, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "a";
    return (
      <li className="relative font-semibold text-white uppercase flex overflow-hidden p-4 hover:after:left-0 hover:after-right-auto hover:after:w-full after:transition-all after:absolute after:left-auto after:right-0 after:bottom-0 after:h-[0.40rem] after:w-0 after:bg-gradient-to-r after:from-primary after:to-secondary text-md md:text-md">
        <Comp
          className={cn(
            "flex py-2 pr-4 pl-3 md:p-0 items-center justify-center p-6 w-full",
            className
          )}
          ref={ref}
          {...props}
        />
      </li>
    );
  }
);
Link.displayName = "Navbar.Link";

export interface NavbarToggleProps extends ComponentProps<"button"> {
  icon: keyof typeof icons;
}

const Toggle = React.forwardRef<HTMLButtonElement, NavbarToggleProps>(
  ({ className, icon, ...props }, ref) => {
    const { toogleMenu } = useApp();

    const LucideIcon = icons[icon];

    return (
      <button
        ref={ref}
        onClick={() => toogleMenu()}
        className={cn(
          "inline-flex items-center rounded-xl p-2 text-sm text-secondary-foreground hover:bg-secondary-foreground hover:text-background focus:outline-none focus:ring-2 focus:bg-secondary-foreground focus:text-secondary md:hidden",
          className
        )}
        {...props}
      >
        <span className="sr-only">Open main menu</span>
        <LucideIcon className="size-8 shrink-0" />
      </button>
    );
  }
);
Toggle.displayName = "Navbar.Toggle";

export { Root, Brand, Collapse, Link, Toggle };
