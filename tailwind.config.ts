import type { Config } from 'tailwindcss';
// import type { PluginCreator } from "tailwindcss/types/config";

// const clampPlugin: PluginCreator = ({ matchUtilities, theme }) =>
//   matchUtilities(
//     {
//       clamp(value: string) {
//         // load font sizes from theme
//         const sizes = theme("fontSize") as Record<string, [string, string]>;

//         // parse the value passed in from class name
//         const split = value.split("-").map((v) => (sizes[v] ? sizes[v][0] : v));

//         // return a clamped font-size
//         return {
//           fontSize: `clamp(${split[0]}, ${split[1]}, ${split[2]})`,
//         };
//       },
//     },
//     { values: theme("fontSize") as Record<string, string> } // Tipagem opcional para matchUtilities
//   );

// const backgroundPlugin: PluginCreator = ({ addUtilities }) => {
//   const newBackgroundUtilities = {
//     ".bg-repeat-no-repeat": {
//       "background-repeat": "repeat, no-repeat",
//     },
//     ".bg-position-y-center-center": {
//       "background-position-y": "center, center",
//     },
//   };

//   addUtilities(newBackgroundUtilities);
// };

export default {
	//   darkMode: "media",
	content: [
		'./pages/**/*.{ts,tsx}',
		'./components/**/*.{ts,tsx}',
		'./app/**/*.{ts,tsx}',
		'./src/**/*.{ts,tsx}',
	],
	theme: {},
	plugin: {},
	//   prefix: "",
	//   theme: {
	//     container: {
	//       center: true,
	//       padding: "2rem",
	//       screens: {
	//         "2xl": "1536px",
	//         "8xl": "90rem",
	//       },
	//     },
	//     extend: {
	//       maxWidth: {
	//         "8xl": "100rem",
	//       },
	//       colors: {
	//         border: "hsl(var(--border))",
	//         input: "hsl(var(--input))",
	//         ring: "hsl(var(--ring))",
	//         background: "hsl(var(--background))",
	//         foreground: "hsl(var(--foreground))",
	//         header: "hsl(var(--header))",
	//         primary: {
	//           DEFAULT: "hsl(var(--primary))",
	//           foreground: "hsl(var(--primary-foreground))",
	//         },
	//         secondary: {
	//           DEFAULT: "hsl(var(--secondary))",
	//           foreground: "hsl(var(--secondary-foreground))",
	//         },
	//         tertiary: {
	//           DEFAULT: "hsl(var(--tertiary))",
	//           foreground: "hsl(var(--tertiary-foreground))",
	//         },
	//         destructive: {
	//           DEFAULT: "hsl(var(--destructive))",
	//           foreground: "hsl(var(--destructive-foreground))",
	//         },
	//         success: {
	//           DEFAULT: "hsl(var(--success))",
	//           foreground: "hsl(var(--success-foreground))",
	//         },
	//         tabs: {
	//           DEFAULT: "hsl(var(--tabs))",
	//           foreground: "hsl(var(--tabs-foreground))",
	//         },
	//         muted: {
	//           DEFAULT: "hsl(var(--muted))",
	//           foreground: "hsl(var(--muted-foreground))",
	//         },
	//         accent: {
	//           DEFAULT: "hsl(var(--accent))",
	//           foreground: "hsl(var(--accent-foreground))",
	//         },
	//         popover: {
	//           DEFAULT: "hsl(var(--popover))",
	//           foreground: "hsl(var(--popover-foreground))",
	//         },
	//         card: {
	//           DEFAULT: "hsl(var(--card))",
	//           foreground: "hsl(var(--card-foreground))",
	//         },
	//       },
	//       borderRadius: {
	//         lg: "var(--radius)",
	//         md: "calc(var(--radius) - 2px)",
	//         sm: "calc(var(--radius) - 4px)",
	//       },
	//       backgroundImage: {
	//         faq: 'url("/assets/bg-vacation.jpg")',
	//         "faq-blend": 'url("/assets/bg-vacation.jpg"), url("/assets/passport.png")',
	//         "page-header": 'url("/assets/bg-page-title.jpg")',
	//         pattern: 'url("/assets/bg-pattern.png")',
	//         family: 'url("/assets/bg-family.webp")',
	//       },
	//       backgroundPosition: {
	//         "multiply-center": "center, center",
	//       },
	//       keyframes: {
	//         "border-gradient": {
	//           "0%, 100%": { "background-position": "0% 50%" },
	//           "50%": { "background-position": "100% 50%" },
	//         },
	//         "accordion-down": {
	//           from: { height: "0" },
	//           to: { height: "var(--radix-accordion-content-height)" },
	//         },
	//         "accordion-up": {
	//           from: { height: "var(--radix-accordion-content-height)" },
	//           to: { height: "0" },
	//         },
	//       },
	//       animation: {
	//         "accordion-down": "accordion-down 0.2s ease-out",
	//         "accordion-up": "accordion-up 0.2s ease-out",
	//         "border-gradient": "border-gradient 3s ease alternate infinite;",
	//       },
	//       dropShadow: {
	//         text: "0px 1px 2px var(--tw-shadow-color)",
	//       },
	//       zIndex: {
	//         backdrop: "100",
	//       },
	//     },
	//   },
	//   plugins: [require("tailwindcss-animate"), clampPlugin, backgroundPlugin],
};
