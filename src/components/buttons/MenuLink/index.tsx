import { Button, ButtonProps } from "@chakra-ui/react";
import Link from "next/link";
import { ReactNode } from "react";

interface Props extends ButtonProps {
  children: ReactNode;
  href: string;
}

export function MenuLink({ href, children, ...rest }: Props) {

  return (
    <Link href={href} passHref>
      <Button
        {...rest}
        variant="unstyled"
        colorScheme="primary"
        type="button"
        w="full"
        px={4}
        textAlign="start"
        _hover={{
          bg: 'primary.50',
        }}
      >
        {children}
      </Button>
    </Link>
  );
}