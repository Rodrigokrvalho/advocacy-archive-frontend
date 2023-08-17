import { Box, FormLabel, Input, InputProps } from "@chakra-ui/react";
import { forwardRef } from "react";

interface Props extends InputProps {
  label: string;
  disabled?: boolean;
  ref?: any;
}

export const BaseInput = forwardRef<Props, any>(({ label, ...rest }, ref) => (
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
  </Box>
));
