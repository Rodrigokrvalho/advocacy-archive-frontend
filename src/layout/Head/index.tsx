import { Box, Button, Container, Flex, Slider, Text, useDisclosure } from "@chakra-ui/react";
import { FiMenu } from "react-icons/fi";
import { Menu } from "../Menu";

import { useRef } from "react";

interface Props {

}

export function Head({}: Props) {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = useRef<HTMLInputElement>(null);

  return (
    <>
      <Flex
        justifyContent="space-between"
        alignItems="center"
        bg="primary.500"
        h="3.5rem"
        position="sticky"
        top={0}
        left={0}
        w="full"
        zIndex={10}
      >
        <Button
          leftIcon={<FiMenu size={28} color="white" />}
          variant="ghost"
          onClick={onOpen}
          _hover={{}}
          ml={5}
        />
        <Text color="gray.200" pr={10}>
          Nome do usuário
        </Text>
      </Flex>

      <Menu btnRef={btnRef} isOpen={isOpen} onClose={onClose} />
    </>
  );
}