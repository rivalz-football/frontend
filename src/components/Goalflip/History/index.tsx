import {
  Box,
  Button,
  Flex,
  HStack,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  Text,
} from "@chakra-ui/react";
import { PlaysItem } from "./PlaysItem";

import { TeamPlayers } from "components/TeamCenter/Players/data/typeProps";
import { FilterSmallIcon } from "assets/icons";
import { PlayerPosition } from "assets/types";
import { fakePlays } from "assets/data";

export const RecentPlays = () => {
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

        <Flex direction="column" gap="11px">
          {fakePlays.map((plays, index) => (
            <PlaysItem key={index} plays={plays} />
          ))}
        </Flex>
      </Box>
    </Flex>
  );
};
