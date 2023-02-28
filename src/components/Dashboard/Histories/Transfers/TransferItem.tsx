import { Flex, Text } from "@chakra-ui/react";
import { ITransferHistory } from "assets/types";

type TransferItemProps = {
  item: ITransferHistory;
};

export const TransferItem = (props: TransferItemProps) => {
  const { item } = props;
  return (
    <Flex
      background="rgba(8, 8, 8, 0.3)"
      fontWeight="500"
      fontSize="14px"
      padding="15px 20px"
      gap="20px"
      justifyContent="space-between"
    >
      <Flex>
        <Text fontWeight="700">{item.username}</Text>
        &nbsp;bought&nbsp;
        <Text fontWeight="700" color="rgba(236, 6, 141, 0.8)">
          {item.playerName}
        </Text>
        &nbsp;from the market.
      </Flex>
      <Text fontWeight="600" fontSize="14px">
        3.2 $SOL
      </Text>
    </Flex>
  );
};
