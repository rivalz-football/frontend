import { Box, Button, Divider, Flex, Text } from "@chakra-ui/react";
import { IPlayerOfWeek } from "assets/types";
import { PlayerOfWeek } from "./PlayerOfWeek";

const player1: IPlayerOfWeek = {
  name: "Kevin",
  lastName: "De Bruyne",
  position: "CAM",
  score: 9.8,
  image: "https://i.imgur.com/IWMlMym.png",
};

const player2: IPlayerOfWeek = {
  name: "Darwin",
  lastName: "Núñez",
  position: "FW",
  score: 9.8,
  image: "https://i.imgur.com/pRsyQS1.png",
};

export const TopPlayersOfWeek = () => {
  return (
    <Box
      background="rgba(217, 217, 217, 0.01)"
      border="1px solid rgba(255, 255, 255, 0.02)"
      borderRadius="4px"
      padding="25px 0 0 0"
      width="100%"
      textAlign="center"
    >
      <Text fontWeight="600">Top Players of the Week</Text>

      <Flex
        marginTop="10px"
        alignItems="stretch"
        justifyContent="center"
        position="relative"
        gap="20px"
      >
        <PlayerOfWeek player={player1} />
        <Box
          width="1px"
          background="linear-gradient(270deg, rgba(255, 255, 255, 0) 0%, rgba(255, 255, 255, 0.13) 52.6%, rgba(255, 255, 255, 0) 100%)"
        />
        <PlayerOfWeek player={player2} isReverse />
      </Flex>
      <Button
        width="100%"
        background="rgba(217, 217, 217, 0.01)"
        textTransform="uppercase"
        height="50px"
        _hover={{
          background: "rgba(217, 217, 217, 0.01)",
        }}
        fontWeight="500"
        marginTop="10px"
      >
        Show More
      </Button>
    </Box>
  );
};
