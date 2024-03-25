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
import { Service } from "@/types/services";

type AppContextProps = {
  isMenuOpen: boolean;
  sections: Section[];
  currentSection: Section;
  getSection: (sectionName: string) => Section;
  setCurrentSection: Dispatch<SetStateAction<Section>>;
  toogleMenu: Cycle;
  serviceDetailsDialogOpen: boolean;
  setServiceDetailsDialogOpen: Dispatch<SetStateAction<boolean>>;
  selectedServiceDetails: Service | null;
  setSelectedServiceDetails: Dispatch<SetStateAction<Service | null>>;
};

const AppContext = createContext({} as AppContextProps);

export function AppProvider({ children }: { children: React.ReactNode }) {
  const [isMenuOpen, toogleMenu] = useCycle(false, true);
  const [serviceDetailsDialogOpen, setServiceDetailsDialogOpen] =
    useState(false);
  const [selectedServiceDetails, setSelectedServiceDetails] =
    useState<Service | null>(null);

  const [sections, setSections] = useState<Section[]>(defaultSections);

  const [currentSection, setCurrentSection] = useState<Section>(() => {
    return defaultSections.find((section) => section?.path === "/")!;
  });

  const isInHome = useCallback(
    () => currentSection.path === "/",
    [currentSection],
  );

  const getSection = useCallback(
    (sectionPath: string) => {
      let path = sectionPath || "/";

      return sections.find((section) => section?.path === path)!;
    },
    [sections],
  );

  return (
    <AppContext.Provider
      value={{
        toogleMenu,
        isMenuOpen,
        sections,
        currentSection,
        getSection,
        setCurrentSection,
        serviceDetailsDialogOpen,
        setServiceDetailsDialogOpen,
        selectedServiceDetails,
        setSelectedServiceDetails,
      }}
    >
      {children}
    </AppContext.Provider>
  );
}

export function useApp(): AppContextProps {
  return useContext(AppContext);
}
