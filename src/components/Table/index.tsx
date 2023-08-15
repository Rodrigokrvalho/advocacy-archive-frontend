import { TableContainer, Tbody, Td, Th, Thead, Tr } from '@chakra-ui/react';
import { ReactNode } from 'react';

interface TableData {
  id: string;
  client: string;
  n_process: string;
  sentence: string;
  n_order: string;
  location: string;
  cpf_cnpj: string;
  vara: string;
  action: string;
  status: string;
}

interface Props {
  headers: Record<string, TableData>[];
  data: TableData[];
  children?: ReactNode;
}

export function Table({ data, headers, children }: Props) {

  return (
    <TableContainer>
      <Thead>
        <Tr>
          {headers.map((header) => (
            <Th key={header}>{header}</Th>
          ))}
        </Tr>
      </Thead>

      <Tbody>
        {data.map((item) => (
          <Tr key={item.id}>
            <Td>{item.}</Td>
          </Tr>
        ))}
        {children}
      </Tbody>
    </TableContainer>
  );
}