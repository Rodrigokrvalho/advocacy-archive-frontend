import { BaseButton } from "@/components/buttons/BaseButton";
import { ProcessForm } from "@/components/forms/ProcessForm";
import { Header } from "@/layout/Header";
import { Center, Container } from "@chakra-ui/react";
import { IoMdSave } from "react-icons/io";

interface Props {

}

export default function NewProcess({}: Props) {

  return (
    <>
      <Header />
      <Container maxW="container.xl" mt={20}>
        <ProcessForm isEditing={true} />

        <Center mt={10}>

          <BaseButton
            leftIcon={<IoMdSave />}
          >
            Salvar
          </BaseButton>
        </Center>
      </Container>
    </>
  );
}