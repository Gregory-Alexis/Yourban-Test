import {
  Center,
  Table,
  TableContainer,
  Tbody,
  Td,
  Th,
  Thead,
  Tr,
} from "@chakra-ui/react";

import DeleteButton from "./DeleteButton";

const Tableau = ({ data, fetchData }) => {
  return (
    <TableContainer>
      <Table>
        <Thead>
          <Tr>
            <Th flex="1">
              <Center>Commerce</Center>
            </Th>
            <Th flex="1">
              <Center>Etablissement</Center>
            </Th>
            <Th flex="1">
              <Center>Location</Center>
            </Th>
            <Th flex="1">
              <Center>Address</Center>
            </Th>
            <Th flex="1">
              <Center>Mail</Center>
            </Th>
            <Th>
              <Center>Action </Center>
            </Th>
          </Tr>
        </Thead>
        <Tbody>
          {data.slice(0, 17).map((el) => (
            <Tr key={el.id}>
              <Td flex="1" borderRight="1px">
                {el.etablissement_type}
              </Td>
              <Td flex="1" borderRight="1px">
                {el.etablissement}
              </Td>
              <Td flex="1" borderRight="1px">
                {el.location}
              </Td>
              <Td flex="1" borderRight="1px">
                {el.address}
              </Td>
              <Td flex="1" borderRight="1px">
                {el.mail}
              </Td>

              <DeleteButton id={el.id} fetchData={fetchData} />
            </Tr>
          ))}
        </Tbody>
      </Table>
    </TableContainer>
  );
};

export default Tableau;
