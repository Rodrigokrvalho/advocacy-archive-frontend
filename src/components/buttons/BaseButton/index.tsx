import { Button, ButtonProps } from "@chakra-ui/react";
import { ReactNode } from "react";

interface Props extends ButtonProps {
  children: ReactNode;
}

export function BaseButton({ children, ...rest }: Props) {

  return (
    <Button
      {...rest}
      my={4}
      _active={{
        transform: "scale(0.95)"
      }}
    >
      {children}
    </Button>
  );
}