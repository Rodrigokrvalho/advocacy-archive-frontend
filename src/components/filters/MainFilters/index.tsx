import { Box, Button, Center, Flex, FormLabel, Input } from "@chakra-ui/react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from '@hookform/resolvers/zod';
import { BaseInput } from "@/components/BaseInput";

const filterDataFormSchema = z.object({
  name: z.string().optional(),
  action: z.string().optional(),
  status: z.string().optional(),
});

type FilterDataForm = z.infer<typeof filterDataFormSchema>;

export function MainFilters() {
  const {
    register,
    handleSubmit,
  } = useForm<FilterDataForm>({
    resolver: zodResolver(filterDataFormSchema)
  });

  async function handleFilterData(data: FilterDataForm) {
    console.log(data);
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
        <Button
          type="submit"
          my={4}
          _active={{
            transform: "scale(0.95)"
          }}
        >
          Filtrar
        </Button>
      </Center>
    </Box >

  );
}