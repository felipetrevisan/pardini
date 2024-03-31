"use client";

import { Dispatch, SetStateAction, createContext, useContext, useState } from "react";
import { Cycle, useCycle } from "framer-motion";
import { Service } from "@/types/services";

type AppContextProps = {
  isMenuOpen: boolean;
  toogleMenu: Cycle;
  serviceDetailsDialogOpen: boolean;
  setServiceDetailsDialogOpen: Dispatch<SetStateAction<boolean>>;
  selectedServiceDetails: Service | null;
  setSelectedServiceDetails: Dispatch<SetStateAction<Service | null>>;
};

const AppContext = createContext({} as AppContextProps);

export function AppProvider({ children }: { children: React.ReactNode }) {
  const [isMenuOpen, toogleMenu] = useCycle(false, true);
  const [serviceDetailsDialogOpen, setServiceDetailsDialogOpen] = useState(false);
  const [selectedServiceDetails, setSelectedServiceDetails] = useState<Service | null>(null);

  return (
    <AppContext.Provider
      value={{
        toogleMenu,
        isMenuOpen,
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
