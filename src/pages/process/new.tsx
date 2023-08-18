import { BaseButton } from "@/components/buttons/BaseButton";
import { ProcessDataForm, ProcessForm } from "@/components/forms/ProcessForm";
import { signOut } from "@/contexts/AuthContext";
import { Header } from "@/layout/Header";
import { setupAPIClient } from "@/services/api";
import { api } from "@/services/apiClient";
import { Center, Container } from "@chakra-ui/react";
import { GetServerSideProps } from "next";
import { IoMdSave } from "react-icons/io";

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  const apiClient = setupAPIClient(ctx);

  const isAuthenticated = await apiClient.get('/auth/me')
    .then(response => response.status === 200)
    .catch(() => false);

  console.log({ isAuthenticated });


  if (!isAuthenticated) {
    return {
      redirect: {
        destination: '/',
        permanent: false
      }
    };
  }

  return {
    props: {}
  };
};

export default function NewProcess() {

  async function handleCreateProcess(data: ProcessDataForm) {
    await api.post('v1/new-process', data);
  }

  return (
    <>
      <Header />
      <Container maxW="container.xl" mt={20}>
        <ProcessForm
          isEditing={true}
          onSubmit={handleCreateProcess}
        >
          <Center mt={10}>
            <BaseButton
              type="submit"
              leftIcon={<IoMdSave />}
            >
              Salvar
            </BaseButton>
          </Center>
        </ProcessForm>

      </Container>
    </>
  );
}