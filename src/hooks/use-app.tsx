"use client";

import {
  createContext,
  useCallback,
  useContext,
  useState,
  Dispatch,
  SetStateAction,
  useEffect,
} from "react";
import { Cycle, useCycle } from "framer-motion";
import { Service } from "@/types/services";
import { usePathname } from "next/navigation";

type AppContextProps = {
  isMenuOpen: boolean;
  toggleMenu: Cycle;
  isServiceDetailsDialogOpen: boolean;
  setServiceDetailsDialogOpen: Dispatch<SetStateAction<boolean>>;
  selectedService: Service | null;
  setSelectedService: Dispatch<SetStateAction<Service | null>>;
  isMenuActive: (menu: string) => boolean;
  isHome: boolean;
  setActiveMenu: Dispatch<SetStateAction<string>>;
  activeMenu: string;
};

const AppContext = createContext<AppContextProps | undefined>(undefined);

export function AppProvider({ children }: { children: React.ReactNode }) {
  const currentUrl = usePathname();
  const [isMenuOpen, toggleMenu] = useCycle(false, true);
  const [isServiceDetailsDialogOpen, setServiceDetailsDialogOpen] = useState(false);
  const [selectedService, setSelectedService] = useState<Service | null>(null);
  const [activeMenu, setActiveMenu] = useState(currentUrl);

  const isHome = activeMenu === "/";
  const isMenuActive = useCallback(
    (menu: string) => {
      return currentUrl.includes(menu) && menu !== "/";
    },
    [currentUrl]
  );

  useEffect(() => {
    setActiveMenu(currentUrl);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    if (isMenuOpen) {
      toggleMenu();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [currentUrl]);

  return (
    <AppContext.Provider
      value={{
        isMenuOpen,
        toggleMenu,
        isServiceDetailsDialogOpen,
        setServiceDetailsDialogOpen,
        selectedService,
        setSelectedService,
        isHome,
        isMenuActive,
        setActiveMenu,
        activeMenu,
      }}
    >
      {children}
    </AppContext.Provider>
  );
}

export function useApp(): AppContextProps {
  const context = useContext(AppContext);
  if (!context) {
    throw new Error("useApp must be used within an AppProvider");
  }
  return context;
}
