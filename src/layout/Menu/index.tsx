import { MenuLink } from "@/components/buttons/MenuLink";
import { Button, Drawer, DrawerBody, DrawerCloseButton, DrawerContent, DrawerFooter, DrawerHeader, DrawerOverlay, Heading, VStack } from "@chakra-ui/react";
import Link from "next/link";
import { IoMdHome, IoMdPerson } from "react-icons/io";

interface Props {
  isOpen: boolean;
  onClose: () => void;
  btnRef: any;
}

export function Menu({ btnRef, isOpen, onClose }: Props) {

  return (
    <Drawer
      isOpen={isOpen}
      placement='left'
      onClose={onClose}
      finalFocusRef={btnRef}
    >
      <DrawerOverlay />
      <DrawerContent>
        <DrawerCloseButton />
        <DrawerHeader mt={10}>
          <Heading size="md">Olá [Nome]</Heading>
        </DrawerHeader>

        <DrawerBody>
          <VStack align="stretch">
            <MenuLink
              href="/home"
              leftIcon={<IoMdHome />}
            >
              Home
            </MenuLink>

            <MenuLink
              href="/home"
              leftIcon={<IoMdPerson />}
            >
              Usuários
            </MenuLink>
          </VStack>
        </DrawerBody>

        <DrawerFooter>
          [empresa.com.br]
        </DrawerFooter>
      </DrawerContent>
    </Drawer>
  );
}