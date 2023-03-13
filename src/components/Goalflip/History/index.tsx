import {
  Box,
  Button,
  Flex,
  HStack,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  Spinner,
  Text,
} from "@chakra-ui/react";

import { useGameHistory } from "hooks/useGoalFlip";
import { PublicKey } from "@solana/web3.js";
import { GameMatch } from "framework/GoalFlipClient";
import { HistoryItem } from "./HistoryItem";

type RecentPlaysProps = {
  game: string;
};

export const RecentPlays = (props: RecentPlaysProps) => {
  const { game } = props;

  const { data: history, isLoading } = useGameHistory(new PublicKey(game));

  return (
    <Flex minWidth="fit-content">
      <Box
        maxHeight="742px"
        width="7px"
        bg="#040404"
        clipPath="polygon(10px 0, 100% 0, 100% 100%, 0 100%, 0 10px, 10px 0)"
      ></Box>
      <Box
        maxHeight="600px"
        border="1px solid #000000;"
        bg="#0C0B0B"
        maxWidth="449px"
        padding="22px 26px"
        justifyContent="space-between"
        overflow="auto"
      >
        <Flex justifyContent="space-between" width="100%">
          <Text
            fontSize="22px"
            fontWeight="500"
            marginBottom="22px"
            textTransform="uppercase"
          >
            Recent Plays
          </Text>
        </Flex>

        {isLoading && <Spinner />}

        {!isLoading && (
          <Flex direction="column" gap="10px">
            {history?.map((item: GameMatch) => (
              <HistoryItem key={item.address} {...item} />
            ))}
          </Flex>
        )}
      </Box>
    </Flex>
  );
};
