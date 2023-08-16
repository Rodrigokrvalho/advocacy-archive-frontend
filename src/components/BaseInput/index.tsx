import { Box, FormLabel, Input, InputProps } from "@chakra-ui/react";

interface Props extends InputProps {
  label: string;
  disabled?: boolean;
}

export function BaseInput({ label, ...rest }: Props) {

  return (
    <Box w="full">
      <FormLabel htmlFor={rest.name}>{label}</FormLabel>
      <Input
        {...rest}
        _disabled={{
          border: '0',
          bg: 'gray.50'
        }}
      />
    </Box>
  );
}