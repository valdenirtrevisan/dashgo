import { useDisclosure, UseDisclosureReturn } from '@chakra-ui/react';
import { useRouter } from 'next/dist/client/router';
import { useEffect, useContext, createContext, ReactNode } from 'react';

interface SidebarDrawerProviderProps {
  children: ReactNode;
}

const sidebarDrawerContext = createContext({} as UseDisclosureReturn);

export function SidebarDrawerProvider({
  children,
}: SidebarDrawerProviderProps): JSX.Element {
  const disclosure = useDisclosure();
  const router = useRouter();

  useEffect(() => {
    disclosure.onClose();
  }, [router.asPath]);

  return (
    <sidebarDrawerContext.Provider value={disclosure}>
      {children}
    </sidebarDrawerContext.Provider>
  );
}

export const useSidebarDrawer = (): UseDisclosureReturn =>
  useContext(sidebarDrawerContext);
