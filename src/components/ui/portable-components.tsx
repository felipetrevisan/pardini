import { PortableTextComponents } from "@portabletext/react";

export const portableComponents: PortableTextComponents = {
  // types: {
  //   image: ({value}) => <img src={value.imageUrl} />,
  //   callToAction: ({value, isInline}) =>
  //     isInline ? (
  //       <a href={value.url}>{value.text}</a>
  //     ) : (
  //       <div className="callToAction">{value.text}</div>
  //     ),
  // },
  marks: {
    // link: ({children, value}) => {
    //   const rel = !value.href.startsWith('/') ? 'noreferrer noopener' : undefined
    //   return (
    //     <a href={value.href} rel={rel}>
    //       {children}
    //     </a>
    //   )
    // },
  },

  list: {
    // Ex. 1: customizing common list types
    bullet: ({ children }) => <ul className="flex flex-col list-disc gap-2 p-4">{children}</ul>,
    number: ({ children }) => <ol className="flex flex-col list-decimal gap-2 p-4">{children}</ol>,

    // Ex. 2: rendering custom lists
    checkmarks: ({ children }) => <ol className="flex flex-col text-lg gap-2 p-4">{children}</ol>,
  },
};
