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
import { PlayerItem } from "./PlayerItem";

import { TeamPlayers } from "./data/typeProps";
import { FilterSmallIcon } from "assets/icons";
import { PlayerPosition } from "assets/types";

export const Players = () => {
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
            Player
          </Text>
          <Menu>
            <MenuButton
              as={Button}
              padding="4px 28px"
              bg="rgba(0, 0, 0, 0.3)"
              border="1px solid rgba(24, 23, 23, 0.4);"
              borderRadius="7px"
              gap="20px"
              rightIcon={<FilterSmallIcon />}
            >
              <Text fontSize="14px" opacity="0.5">
                ALL
              </Text>
            </MenuButton>
            <MenuList padding="4px 28px" bg="#111111">
              {Object.values(PlayerPosition).map((position, index) => (
                <MenuItem bg="#111111" key={index}>
                  {position}
                </MenuItem>
              ))}
            </MenuList>
          </Menu>
        </Flex>

        <Flex direction="column" gap="11px">
          {TeamPlayers.map((player, index) => (
            <PlayerItem key={index} player={player} />
          ))}
        </Flex>
      </Box>
    </Flex>
  );
};
