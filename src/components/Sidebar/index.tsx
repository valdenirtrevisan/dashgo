import { Box, Drawer, DrawerCloseButton, DrawerContent, DrawerOverlay, DrawerHeader, DrawerBody, useBreakpointValue } from '@chakra-ui/react'
import { useSidebarDrawer } from '../../contexts/SidebarDrawerContext';

import SidebarNav from './SidebarNav'

export default function Sidebar() {
  const isDrawerSidebar = useBreakpointValue({
    base: true, lg: false
  });
  const { isOpen, onClose } = useSidebarDrawer();

  if (isDrawerSidebar) {
    return (
      <Drawer isOpen={isOpen} placement="left" onClose={onClose} >
        <DrawerOverlay>
          <DrawerContent bg="gray.800" p="4">
            <DrawerCloseButton mt="6" />
            <DrawerHeader>Navegação</DrawerHeader>
            <DrawerBody>
              <SidebarNav />
            </DrawerBody>
          </DrawerContent>
        </DrawerOverlay>
      </Drawer>
    )
  }

  return (
    <Box as="aside" w="64" mr="8">
      <SidebarNav />
    </Box>
  )
}
