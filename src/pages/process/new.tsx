import { BaseButton } from "@/components/buttons/BaseButton";
import { ProcessDataForm, ProcessForm } from "@/components/forms/ProcessForm";
import { Header } from "@/layout/Header";
import { api } from "@/services/apiClient";
import { Center, Container } from "@chakra-ui/react";
import { IoMdSave } from "react-icons/io";

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