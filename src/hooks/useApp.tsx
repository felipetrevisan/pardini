"use client";

import {
  Dispatch,
  SetStateAction,
  createContext,
  useCallback,
  useContext,
  useState,
} from "react";
import { Cycle, useCycle } from "framer-motion";
import { defaultSections, type Section } from "@/types/global";

type AppContextProps = {
  isMenuOpen: boolean;
  sections: Section[];
  currentSection: Section;
  isInHome: () => boolean;
  getSection: (sectionName: string) => Section;
  setCurrentSection: Dispatch<SetStateAction<Section>>;
  toogleMenu: Cycle;
};

const AppContext = createContext({} as AppContextProps);

export function AppProvider({ children }: { children: React.ReactNode }) {
  const [isMenuOpen, toogleMenu] = useCycle(false, true);
  const [sections, setSections] = useState<Section[]>(defaultSections);

  const [currentSection, setCurrentSection] = useState<Section>(() => {
    return defaultSections.find((section) => section?.path === "/")!;
  });

  const isInHome = useCallback(
    () => currentSection.path === "/",
    [currentSection]
  );

  const getSection = useCallback(
    (sectionPath: string) => {
      let path = sectionPath || "/";

      return sections.find((section) => section?.path === path)!;
    },
    [sections]
  );

  return (
    <AppContext.Provider
      value={{
        toogleMenu,
        isMenuOpen,
        sections,
        currentSection,
        isInHome,
        getSection,
        setCurrentSection,
      }}
    >
      {children}
    </AppContext.Provider>
  );
}

export function useApp(): AppContextProps {
  return useContext(AppContext);
}
