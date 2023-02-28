import { Box, Flex, Text } from "@chakra-ui/react";
import { ITransferHistory } from "assets/types";
import { TransferItem } from "./TransferItem";

const data: ITransferHistory[] = [
  {
    username: "tolgaand",
    playerName: "messi",
  },
  {
    username: "tolgaand",
    playerName: "messi",
  },
  {
    username: "tolgaand",
    playerName: "messi",
  },
];

export const Transfers = () => {
  return (
    <Box width="100%">
      <Text fontWeight="700" padding="0 20px 20px 20px">
        Transfers
      </Text>
      <Flex flexDirection="column" gap="5px">
        {data.map((item, index) => (
          <TransferItem item={item} key={index} />
        ))}
      </Flex>
    </Box>
  );
};
