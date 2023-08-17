import { Box, Center, Flex } from "@chakra-ui/react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from '@hookform/resolvers/zod';
import { BaseInput } from "@/components/inputs/BaseInput";
import { BaseButton } from "@/components/buttons/BaseButton";
import { FiFilter } from "react-icons/fi";

interface Props {
  onSubmit: (data: FilterDataForm) => void;
}

const filterDataFormSchema = z.object({
  name: z.string().optional(),
  action: z.string().optional(),
  status: z.string().optional(),
});

export type FilterDataForm = z.infer<typeof filterDataFormSchema>;

export function MainFilters({ onSubmit }: Props) {
  const {
    register,
    handleSubmit,
  } = useForm<FilterDataForm>({
    resolver: zodResolver(filterDataFormSchema)
  });

  async function handleFilterData(data: FilterDataForm) {
    console.log(data);
    onSubmit(data);
  }

  return (
    <Box
      my={10}
      onSubmit={handleSubmit(handleFilterData)}
      as="form"
    >
      <Flex
        justifyContent="space-between"
        gap={4}
        flexDirection={['column', 'column', 'row']}
      >
        <BaseInput
          label="Cliente"
          {...register('name')}
        />
        <BaseInput
          label="Ação"
          {...register('action')}
        />
        <BaseInput
          label="Andamento"
          {...register('status')}
        />
      </Flex>

      <Center>
        <BaseButton leftIcon={<FiFilter />} type="submit" >
          Filtrar
        </BaseButton>
      </Center>
    </Box >

  );
}