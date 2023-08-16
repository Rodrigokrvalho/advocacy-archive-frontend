import { BaseInput } from "@/components/inputs/BaseInput";
import { Button, Flex, SimpleGrid } from "@chakra-ui/react";

interface Props {
  isEditing?: boolean;
}

export function ProcessForm({
  isEditing = false,
}: Props) {

  return (
    <>
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
    </>
  );
}