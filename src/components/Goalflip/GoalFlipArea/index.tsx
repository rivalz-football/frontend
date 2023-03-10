import { Button, Flex, Text } from "@chakra-ui/react";
import { FootballAreaBg } from "assets/images";
import { Area } from "./Area";
import { PenaltyBallIcon, PenaltyStartingPointIcon } from "assets/icons";

export const GoalFlipArea = () => {
  return (
    <Flex
      maxHeight="642px"
      direction="column"
      justifyContent="center"
      alignItems="center"
      position="relative"
      background={`url(${FootballAreaBg.src})`}
      backgroundSize="cover"
      width="100%"
    >
      <Area />
      <PenaltyStartingPointIcon
        style={{
          position: "absolute",
          bottom: "30px",
        }}
      />
      <PenaltyBallIcon
        style={{
          position: "absolute",
          bottom: "33px",
        }}
      />
    </Flex>
  );
};
