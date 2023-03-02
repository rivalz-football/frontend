import { Box, Flex, Text } from "@chakra-ui/react";
import { Area } from "./Area";

export const FootballArea = () => {
  return (
    <Flex direction="column" justifyContent="center" alignItems="center">
      <Text
        fontWeight="600"
        fontSize="68px"
        letterSpacing="0.6em"
        color="rgba(255, 255, 255, 0.03)"
        textAlign="center"
        lineHeight="0.8em"
        textTransform="uppercase"
      >
        Rivalz
      </Text>

      <Area />
    </Flex>
  );
};
