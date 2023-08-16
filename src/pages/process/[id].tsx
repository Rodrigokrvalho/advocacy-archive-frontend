import { BaseInput } from "@/components/inputs/BaseInput";
import { ProcessForm } from "@/components/forms/ProcessForm";
import { Header } from "@/layout/Header";
import { Button, Center, Container, Flex, SimpleGrid } from "@chakra-ui/react";
import { useRouter } from "next/router";
import { useState } from "react";
import { IoMdSave, IoMdClose, IoMdCreate } from 'react-icons/io';

interface Props {

}

export default function Process({}: Props) {
  const router = useRouter();
  const [isEditing, setIsEditing] = useState(false);

  return (
    <>
      <Header />

      <main>
        <Container maxW="container.xl">
          <Flex justifyContent="flex-end" mt={20} h={5}>
            {!isEditing && (
              <Button
                leftIcon={<IoMdCreate />}
                onClick={() => setIsEditing(true)}
              >
                Editar
              </Button>
            )}
          </Flex>

          <ProcessForm isEditing={isEditing} />

          {isEditing && (
            <Center gap={20} mt={12}>
              <Button
                leftIcon={<IoMdSave />}
              >
                Salvar
              </Button>
              <Button
                leftIcon={<IoMdClose />}
                colorScheme="red"
                onClick={() => setIsEditing(false)}
              >
                Cancelar
              </Button>
            </Center>
          )
          }
        </Container>
      </main>
    </>
  );
}