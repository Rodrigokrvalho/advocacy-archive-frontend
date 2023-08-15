import { Button, Drawer, DrawerBody, DrawerCloseButton, DrawerContent, DrawerFooter, DrawerHeader, DrawerOverlay, Heading, VStack } from "@chakra-ui/react";
import Link from "next/link";

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

            <Link href={'/'}>
              <Button
                variant="unstyled"
                colorScheme="primary"
                type="button"
                w="full"
                px={4}
                textAlign="start"
                _hover={{
                  bg: 'primary.50',
                }}
              >
                Home
              </Button>
            </Link>
            <Link href={'/users'}>

              <Button
                variant="unstyled"
                colorScheme="primary"
                type="button"
                w="full"
                px={4}
                textAlign="start"
                _hover={{
                  bg: 'primary.50',
                }}
              >
                Usuários
              </Button>
            </Link>
          </VStack>
        </DrawerBody>

        <DrawerFooter>
          [empresa.com.br]
        </DrawerFooter>
      </DrawerContent>
    </Drawer>
  );
}