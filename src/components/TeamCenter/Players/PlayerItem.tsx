import { Box, Button, Flex, HStack, Icon, Text } from "@chakra-ui/react";
import { OutlineDots } from "assets/icons";

import { MyTeamTypes } from "./data/typeProps";

type MyTeamsProps = {
  player: MyTeamTypes;
};

export const PlayerItem = (props: MyTeamsProps) => {
  const { player } = props;
  return (
    <Flex
      position="relative"
      justifyContent="space-between"
      alignItems="center"
      width="100%"
      padding="9px 19px"
      _after={{
        content: '""',
        position: "absolute",
        width: "4px",
        height: "100%",
        left: 0,
        background: "#319044",
      }}
      background="#111111"
    >
      <Flex gap="25px">
        <img
          height="40px"
          width="40px"
          style={{ borderRadius: "4px" }}
          src={player.image}
          alt="player"
        />
        <Box>
          <Text fontSize="16px" fontWeight="700">
            {player.name}
          </Text>
          <Text fontSize="12px" color="rgba(255, 255, 255, 0.4);">
            {player.position}
          </Text>
        </Box>
      </Flex>
      <Flex gap="14px">
        {" "}
        <Button
          width="67px"
          height="31px"
          textTransform="uppercase"
          bg="rgba(236, 6, 141, 0.43)"
          border="1px solid rgba(255, 255, 255, 0.02);"
        >
          Select
        </Button>
        <HStack bg="#111111" width="3px">
          <OutlineDots />
        </HStack>
      </Flex>
    </Flex>
  );
};
