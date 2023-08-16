import { BaseInput } from "@/components/BaseInput";
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
          {!isEditing && (
            <Flex justifyContent="flex-end" mt={20}>
              <Button
                leftIcon={<IoMdCreate />}
                onClick={() => setIsEditing(true)}
              >
                Editar
              </Button>
            </Flex>
          )}

          <SimpleGrid
            columns={[1, 1, 2]}
            spacing={4}
            mt={10}
          >
            <BaseInput
              label="Cliente"
              disabled={!isEditing}
            />
            <BaseInput
              label="Contra"
              disabled={!isEditing}
            />
            <BaseInput
              label="Nº Processo"
              disabled={!isEditing}
            />
            <BaseInput
              label="Sentença"
              disabled={!isEditing}
            />
            <BaseInput
              label="Nº Ordem"
              disabled={!isEditing}
            />
            <BaseInput
              label="Arquivo"
              disabled={!isEditing}
            />
            <BaseInput
              label="CPF/CNPJ"
              disabled={!isEditing}
            />
            <BaseInput
              label="Vara"
              disabled={!isEditing}
            />
            <BaseInput
              label="Ação"
              disabled={!isEditing}
            />
            <BaseInput
              label="Andamento"
              disabled={!isEditing}
            />
          </SimpleGrid>
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