import { Box, FormLabel, Input, InputProps, Text } from "@chakra-ui/react";
import { forwardRef } from "react";

interface Props extends InputProps {
  label: string;
  disabled?: boolean;
  errorMessage?: string;
}

export const BaseInput = forwardRef<Props, any>(({ label, errorMessage = '', ...rest }, ref) => (
  <Box w="full">
    <FormLabel htmlFor={rest.name}>{label}</FormLabel>
    <Input
      {...rest}
      ref={ref}
      borderColor="primary.100"
      _disabled={{
        border: '0',
        bg: 'gray.50'
      }}
    />
    <Text h={2} color="red.500">{errorMessage}</Text>
  </Box>
));
