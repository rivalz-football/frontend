import { Flex, Text } from "@chakra-ui/react";
import { IActivityHistory } from "assets/types";

type ActivityItemProps = {
  item: IActivityHistory;
};

export const ActivityItem = (props: ActivityItemProps) => {
  const { item } = props;
  return (
    <Flex
      background="rgba(8, 8, 8, 0.3)"
      fontWeight="500"
      fontSize="14px"
      padding="15px 20px"
      gap="20px"
      width="100%"
      justifyContent="space-between"
    >
      <Flex>
        <Text fontWeight="700">{item.username}</Text>
        &nbsp;won&nbsp;
        <Text fontWeight="700" color={item.playerColor}>
          {item.playerName}
        </Text>
        &nbsp;from the&nbsp;{item.box}.
      </Flex>
      <Text fontWeight="600" fontSize="14px">
        3.2 $SOL
      </Text>
    </Flex>
  );
};
