import React from 'react';

import {
  Table,
  Thead,
  Tr,
  Th,
  Td,
  Tbody,
  TableCaption,
} from '@chakra-ui/react';

const AppTable = ({ header, data, caption }) => {
  return (
    <Table variant="striped" fontSize={['2rem']}>
      <TableCaption fontFamily="Vazir" fontSize={['2rem']} overflowX="auto">
        {caption}
      </TableCaption>
      <Thead>
        <Tr>
          {header.map(item => (
            <Th fontSize={['2rem']} fontWeight="bold" fontFamily="Vazir">
              {item}
            </Th>
          ))}
        </Tr>
      </Thead>
      <Tbody>
        {data.map(row => {
          return (
            <Tr>
              <Td>{row.title}</Td>
              <Td>{row.end_date.toPersianDigits()}</Td>
            </Tr>
          );
        })}
      </Tbody>
    </Table>
  );
};

export default AppTable;
