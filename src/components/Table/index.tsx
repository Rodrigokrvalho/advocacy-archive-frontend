import { TableContainer, Tbody, Td, Th, Thead, Tr, Table as ChakraTable } from '@chakra-ui/react';
import { ReactNode } from 'react';

interface Headers {
  key: string;
  value: string;
}

interface Props {
  headers: Headers[];
  data: Record<string, number | string>[];
  onClickRow?: (id: number | string) => void;
  children?: ReactNode;
}

export function Table({ data, headers, children, onClickRow = () => {} }: Props) {

  return (
    <TableContainer>
      <ChakraTable variant="simple">
        <Thead>
          <Tr>
            {headers.map((header) => (
              <Th fontSize="sm" key={header.key}>{header.value}</Th>
            ))}
          </Tr>
        </Thead>

        <Tbody>
          {data.map((data) => (
            <Tr
              key={data.id}
              cursor="pointer"
              onClick={() => onClickRow(data.id)}
              _hover={{
                bg: 'primary.100',
              }}
            >
              {headers.map((header) => (
                <Td key={header.key + data.id}>
                  {data[header.key]}
                </Td>
              ))}
              {children}
            </Tr>
          ))}
        </Tbody>
      </ChakraTable>
    </TableContainer>
  );
}