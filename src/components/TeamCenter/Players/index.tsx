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
import { PlayerLocations } from "assets/types";

export const Players = () => {
  return (
    <Flex width="460px">
      <Box
        height="100%"
        width="7px"
        bg="#040404"
        clipPath="polygon(10px 0, 100% 0, 100% 100%, 0 100%, 0 10px, 10px 0)"
      ></Box>
      <Box
        width="100%"
        maxHeight="600px"
        maxWidth="449px"
        padding="22px 26px"
        border="1px solid #000000;"
        bg="#0C0B0B"
        overflow="auto"
      >
        <Flex justifyContent="space-between">
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
              {Object.values(PlayerLocations).map((location, index) => (
                <MenuItem bg="#111111" key={index}>
                  {location}
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
