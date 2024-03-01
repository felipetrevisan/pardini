import { Variants } from "framer-motion";

export const galleryVariants = {
  enter: (direction: number) => {
    return {
      x: direction > 0 ? 1000 : -1000,
      opacity: 0,
    };
  },
  center: {
    x: 0,
    opacity: 1,
  },
  exit: (direction: number) => {
    return {
      x: direction < 0 ? 1000 : -1000,
      opacity: 0,
    };
  },
};

export const headerVariants: Variants = {
  hide: {
    opacity: 0,
    y: -10,
  },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      delayChildren: 1,
      duration: 2,
    },
  },
};

export const footerVariants: Variants = headerVariants;

export const menuMobileVariants: Variants = {
  closed: {
    transition: {
      staggerChildren: 0.2,
      staggerDirection: -1,
    },
    visibility: "hidden",
    opacity: 0,
  },
  open: {
    transition: {
      staggerChildren: 0.2,
      staggerDirection: 1,
    },
    visibility: "visible",
    opacity: 1,
  },
};

export const headerItemsVariants: Variants = {
  enter: {
    transition: {
      delay: 0.8,
      ease: "easeInOut",
    },
    opacity: 0,
    marginTop: -10,
  },
  move: {
    transition: {
      delay: 0.8,
      duration: 0.8,
      ease: "easeInOut",
    },
    opacity: 1,
    marginTop: 0,
  },
  exit: {
    transition: {
      ease: "easeInOut",
    },
    marginTop: [-10, 0],
    opacity: [0, 1],
  },
};

export const headerLogoVariants: Variants = {
  enter: {
    transition: {
      ease: "easeInOut",
    },
    opacity: 0,
    marginTop: -10,
    position: "relative",
  },
  move: {
    transition: {
      delay: 0.8,
      duration: 0.8,
      ease: "easeInOut",
    },
    opacity: 1,
    marginTop: 0,
  },
  exit: {
    transition: {
      ease: "easeInOut",
    },
    marginTop: [-10, 0],
    opacity: [0, 1],
  },
};

export const slideUpVariants: Variants = {
  initial: {
    opacity: 0,
    y: 50,
    transition: {
      staggerChildren: 0.2,
      staggerDirection: -1,
    },
  },
  animate: {
    opacity: 1,
    y: 0,
    transition: {
      delay: 0.5,
      duration: 1,
    },
  },
};

export const opacityVariants: Variants = {
  inital: {
    opacity: 0,
  },
  animate: {
    opacity: 1,
    transition: {
      duration: 3,
    },
  },
};