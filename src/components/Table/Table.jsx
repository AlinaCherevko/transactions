import {
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  TableContainer,
  Td,
} from "@chakra-ui/react";
import PropTypes from "prop-types";
import { deleteTransactionById } from "../../servises/servises";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { BasicModal } from "../../components";

export const TableElement = ({ data }) => {
  const queryClient = useQueryClient();

  const { mutate } = useMutation({
    mutationFn: deleteTransactionById,
    onSuccess: () =>
      queryClient.invalidateQueries({ queryKey: ["transactions"] }),
  });

  return (
    <TableContainer>
      <Table variant="simple">
        <Thead>
          <Tr>
            <Th>Id</Th>
            <Th>Status</Th>
            <Th>Type</Th>
            <Th>Client Name</Th>
            <Th>Amount</Th>
            <Th>Action</Th>
          </Tr>
        </Thead>
        <Tbody>
          {data &&
            data.length > 0 &&
            data.map((transaction) => (
              <Tr key={transaction.TransactionId}>
                <Td>{transaction.TransactionId}</Td>
                <Td>{transaction.Status}</Td>
                <Td>{transaction.Type}</Td>
                <Td>{transaction.ClientName}</Td>
                <Td>{transaction.Amount}</Td>
                <Td style={{ display: "flex", gap: "10px" }}>
                  <BasicModal
                    title="Edit"
                    id={transaction.TransactionId}
                    status={transaction.Status}
                  />
                  <BasicModal
                    title="Delete"
                    deleteOneTransaction={() =>
                      mutate(transaction.TransactionId)
                    }
                  />
                </Td>
              </Tr>
            ))}
        </Tbody>
      </Table>
    </TableContainer>
  );
};

TableElement.propTypes = {
  data: PropTypes.array,
};
