import { BaseInput } from "@/components/inputs/BaseInput";
import { Box, SimpleGrid } from "@chakra-ui/react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { ReactNode, useEffect, useState } from 'react';


interface Props {
  isEditing?: boolean;
  onSubmit: (data: ProcessDataForm) => void;
  children: ReactNode;
  initialValue?: ProcessDataForm;
}

const createProcessDataFormSchema = z.object({
  client_name: z.string().nonempty('campo obrigatório'),
  process_number: z.string().nonempty('campo obrigatório'),
  sentence_size: z.string().nonempty('campo obrigatório'),
  n_order: z.string().optional(),
  file: z.string().optional(),
  cpf: z.string().nonempty('campo obrigatório'),
  type_process: z.string().nullable().optional(),
  action: z.string().nonempty('campo obrigatório'),
  status: z.string().nonempty('campo obrigatório'),
});

export type ProcessDataForm = z.infer<typeof createProcessDataFormSchema>;

export function ProcessForm({
  isEditing = false,
  onSubmit,
  children,
  initialValue
}: Props) {

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
    setValue,
  } = useForm<ProcessDataForm>({
    resolver: zodResolver(createProcessDataFormSchema)
  });

  const [formValues, setFormValues] = useState<ProcessDataForm | undefined>(initialValue);

  useEffect(() => {
    if (!isEditing) {
      setValue('client_name', formValues?.client_name || '');
      setValue('process_number', formValues?.process_number || '');
      setValue('sentence_size', formValues?.sentence_size || '');
      setValue('n_order', formValues?.n_order || '');
      setValue('file', formValues?.file || '');
      setValue('cpf', formValues?.cpf || '');
      setValue('type_process', formValues?.type_process);
      setValue('action', formValues?.action || '');
      setValue('status', formValues?.status || '');
    }
  }, [isEditing, initialValue, formValues, setValue]);


  async function handleEditProcess(data: ProcessDataForm) {
    console.log(data);

    setFormValues(data);
    await onSubmit(data);
  }

  async function handleCreateProcess(data: ProcessDataForm) {
    console.log(data);
    await onSubmit(data);
    reset();
  }

  return (
    <Box
      as="form"
      mt={10}
      onSubmit={
        initialValue
          ? handleSubmit(handleEditProcess)
          : handleSubmit(handleCreateProcess)
      }
    >
      <SimpleGrid
        columns={[1, 1, 2]}
        spacing={4}
      >
        <BaseInput
          label="Cliente"
          disabled={!isEditing}
          {...register("client_name")}
          errorMessage={errors.client_name?.message}
        />
        <BaseInput
          label="Contra"
          disabled={!isEditing}
          errorMessage=""
        />
        <BaseInput
          label="Nº Processo"
          disabled={!isEditing}
          {...register("process_number")}
          errorMessage={errors.process_number?.message}
        />
        <BaseInput
          label="Sentença"
          disabled={!isEditing}
          {...register("sentence_size")}
          errorMessage={errors.sentence_size?.message}
        />
        <BaseInput
          label="Nº Ordem"
          disabled={!isEditing}
          {...register("n_order")}
          errorMessage={errors.n_order?.message}
        />
        <BaseInput
          label="Arquivo"
          disabled={!isEditing}
          {...register("file")}
          errorMessage={errors.file?.message}
        />
        <BaseInput
          label="CPF/CNPJ"
          disabled={!isEditing}
          {...register("cpf")}
          errorMessage={errors.cpf?.message}
        />
        <BaseInput
          label="Vara"
          disabled={!isEditing}
        />
        <BaseInput
          label="Ação"
          disabled={!isEditing}
          {...register("action")}
          errorMessage={errors.action?.message}
        />
        <BaseInput
          label="Andamento"
          disabled={!isEditing}
          {...register("status")}
          errorMessage={errors.status?.message}
        />
      </SimpleGrid>
      {children}
    </Box>
  );
}