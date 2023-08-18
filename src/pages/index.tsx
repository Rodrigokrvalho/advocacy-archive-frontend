import { BaseButton } from "@/components/buttons/BaseButton";
import { BaseInput } from "@/components/inputs/BaseInput";
import { AuthContext } from "@/contexts/AuthContext";
import { Box, Container, Flex } from "@chakra-ui/react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useContext } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";

const loginFormSchema = z.object({
  email: z
    .string()
    .trim()
    .email('O campo deve ser um email válido'),

  password: z
    .string()
    .min(5, 'A senha deve ter pelo menos 6 caracteres'),
});

export type LoginDataForm = z.infer<typeof loginFormSchema>;

export default function Login() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginDataForm>({
    resolver: zodResolver(loginFormSchema)
  });


  const { signIn } = useContext(AuthContext);


  async function handleLogin(data: LoginDataForm) {
    signIn(data);
  }

  return (
    <>
      <Container maxW="container.xl">
        <Flex
          justifyContent="center"
          alignItems="center"
          height="90vh"
          w={["100%", "100%", "40%"]}
          flexDirection="column"
          m="auto"
          gap={5}
        >
          <Box
            w="full"
            as="form"
            onSubmit={handleSubmit(handleLogin)}
          >
            <BaseInput
              label="email"
              {...register('email')}
            />
            <BaseInput
              label="senha"
              {...register('password')}
            />
            <BaseButton type="submit">Entrar</BaseButton>
          </Box>

        </Flex>


      </Container>
    </>
  );
}