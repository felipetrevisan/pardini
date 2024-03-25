export enum MenuTypes {
  "drawer",
  "top",
}

export enum Sections {
  "home",
  "about",
  "services",
  "testimonials",
  "contact",
}

export type Section = {
  name: keyof typeof Sections;
  label: string;
  path: string;
  hasSubmenu?: boolean;
};

export type SectionsKey = keyof typeof Sections;

export const defaultSections: Section[] = [
  {
    name: "home",
    label: "Home",
    path: "/",
  },
  {
    name: "about",
    label: "Quem Somos",
    path: "/about",
  },
  {
    name: "services",
    label: "Serviços",
    path: "/services",
    hasSubmenu: true,
  },
  {
    name: "testimonials",
    label: "Depoimentos",
    path: "/testimonials",
  },
  {
    name: "contact",
    label: "Contato",
    path: "/contact",
  },
] satisfies Section[];

export enum ContentArea {
  "header" = "header",
  "footer" = "footer",
}
