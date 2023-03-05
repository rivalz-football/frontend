import { Box, Button, Flex, Spinner, Text } from "@chakra-ui/react";
import { ITransaction, TransactionStatus, TransactionType } from "assets/types";
import { useMeTransactions } from "hooks/useUser";
import { TransactionHistoryItem } from "./HistoryItem";

const data: ITransaction[] = [
  {
    amount: 2.5,
    type: TransactionType.DEPOSIT,
    status: TransactionStatus.CONFIRMED,
    signature: "0x123",
    createdAt: Date.now(),
  },
  {
    amount: 2.5,
    type: TransactionType.DEPOSIT,
    status: TransactionStatus.CONFIRMED,
    signature: "0x123",
    createdAt: Date.now(),
  },
  {
    amount: 2.5,
    type: TransactionType.DEPOSIT,
    status: TransactionStatus.CONFIRMED,
    signature: "0x123",
    createdAt: Date.now(),
  },
  {
    amount: 2.5,
    type: TransactionType.DEPOSIT,
    status: TransactionStatus.CONFIRMED,
    signature: "0x123",
    createdAt: Date.now(),
  },
  {
    amount: 2.5,
    type: TransactionType.DEPOSIT,
    status: TransactionStatus.CONFIRMED,
    signature: "0x123",
    createdAt: Date.now(),
  },
  {
    amount: 2.5,
    type: TransactionType.DEPOSIT,
    status: TransactionStatus.CONFIRMED,
    signature: "0x123",
    createdAt: Date.now(),
  },
];

export const TransactionHistory = () => {
  const { isLoading, data: transactions } = useMeTransactions();
  return (
    <Box marginTop="15px">
      <Flex alignItems="center" justifyContent="space-between">
        <Text fontWeight="500" fontSize="18px" textTransform="uppercase">
          Transaction History
        </Text>

        <Button
          background="rgba(9, 9, 11, 0.6)"
          border="1px solid rgba(255, 255, 255, 0.05)"
          fontSize="11px"
          letterSpacing="0.15em"
          textTransform="uppercase"
        >
          See All
        </Button>
      </Flex>
      {isLoading && <Spinner />}
      {!isLoading && (
        <Flex
          marginTop="15px"
          flexDirection="column"
          gap="5px"
          maxHeight="250px"
          overflow="auto"
        >
          {transactions.map((item: ITransaction, index: number) => (
            <TransactionHistoryItem key={index} transaction={item} />
          ))}
        </Flex>
      )}
    </Box>
  );
};
