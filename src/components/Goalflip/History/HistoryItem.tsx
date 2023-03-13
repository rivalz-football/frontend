import { Flex, Text } from "@chakra-ui/react";
import { GameMatch } from "framework/GoalFlipClient";
import { sanitizeWalletAddress } from "plugins/sanitize-user";

import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";

dayjs.extend(relativeTime);

export const HistoryItem = (props: GameMatch) => {
  const {
    address,
    player,
    won,
    createdAt,
    playerCorner,
    wonAmount,
    betAmount,
    commissionAmount,
  } = props;

  return (
    <Flex
      background="#111111"
      padding="14px 20px"
      justifyContent="space-between"
      gap="20px"
    >
      <Flex flexDirection="column" gap="3px">
        <Text
          fontWeight="400"
          letterSpacing="0.02em"
          lineHeight="17px"
          fontSize="13px"
        >
          <strong>{sanitizeWalletAddress(player)}</strong> shot into the{" "}
          {playerCorner}
          {!won
            ? `but goalkeeper 
                does not allow the goal.`
            : `and scored.`}
        </Text>
        <Text fontSize="10px" lineHeight="13px" opacity="0.33">
          {dayjs(createdAt * 1000).fromNow()}
        </Text>
      </Flex>
      <Text
        display="block"
        padding="8px 0"
        color={won ? "#21CD44" : "#AA2D1C"}
        fontWeight={700}
        textTransform="uppercase"
        minWidth="fit-content"
      >
        {won ? wonAmount : betAmount + commissionAmount}
      </Text>
    </Flex>
  );
};
