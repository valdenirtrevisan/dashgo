import { useDisclosure, UseDisclosureReturn } from "@chakra-ui/react";
import { useRouter } from "next/dist/client/router";
import { useEffect } from "react";
import { useContext } from "react";
import { createContext, ReactNode } from "react";

interface SidebarDrawerProviderProps {
  children: ReactNode;
}

const sidebarDrawerContext = createContext({} as UseDisclosureReturn);

export function SidebarDrawerProvider({ children }: SidebarDrawerProviderProps) {
  const disclosure = useDisclosure();
  const router = useRouter();

  useEffect(() => {
    disclosure.onClose();
  }, [router.asPath])


  return (
    <sidebarDrawerContext.Provider value={disclosure}>
      {children}
    </sidebarDrawerContext.Provider>
  )
}

export const useSidebarDrawer = () => useContext(sidebarDrawerContext);