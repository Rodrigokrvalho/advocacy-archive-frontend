import { BaseInput } from "@/components/inputs/BaseInput";
import { ProcessDataForm, ProcessForm } from "@/components/forms/ProcessForm";
import { Header } from "@/layout/Header";
import { Button, Center, Container, Flex, SimpleGrid } from "@chakra-ui/react";
import { useState } from "react";
import { IoMdSave, IoMdClose, IoMdCreate } from 'react-icons/io';
import { GetServerSideProps } from "next";
import { setupAPIClient } from "@/services/api";
import { api } from "@/services/apiClient";
import { Process } from "@/dtos/process";
import { BaseButton } from "@/components/buttons/BaseButton";

interface Props {
  process: Process;
}

export const getServerSideProps: GetServerSideProps<Props> = async (ctx) => {
  const apiClient = setupAPIClient(ctx);

  const isAuthenticated = await apiClient.get('/auth/me')
    .then(response => response.status === 200)
    .catch(() => false);

  if (!isAuthenticated) {
    return {
      redirect: {
        destination: '/',
        permanent: false
      }
    };
  }

  const process = await apiClient.get(`/v1/find/${ctx.params?.id}`)
    .then(response => response.data)
    .catch(() => null);

  return {
    props: { process: process }
  };

};

export default function Process({ process }: Props) {
  const [isEditing, setIsEditing] = useState(false);

  async function handleEditProcess(data: ProcessDataForm) {
    await api.put(`/v1/process/${process.id}/edit`, data)
      .then(() => {
        setIsEditing(false);
      });
  }

  return (
    <>
      <Header />

      <main>
        <Container maxW="container.xl">
          <Flex justifyContent="flex-end" mt={20} h={5}>
            {!isEditing && (
              <BaseButton
                leftIcon={<IoMdCreate />}
                onClick={() => setIsEditing(true)}
              >
                Editar
              </BaseButton>
            )}
          </Flex>

          <ProcessForm
            isEditing={isEditing}
            onSubmit={handleEditProcess}
            initialValue={process}
          >
            {isEditing && (
              <Center gap={20} mt={12}>
                <BaseButton
                  leftIcon={<IoMdSave />}
                  type="submit"
                >
                  Salvar
                </BaseButton>
                <BaseButton
                  leftIcon={<IoMdClose />}
                  type="button"
                  colorScheme="red"
                  onClick={() => setIsEditing(false)}
                >
                  Cancelar
                </BaseButton>
              </Center>
            )
            }
          </ProcessForm>
        </Container>
      </main>
    </>
  );
}