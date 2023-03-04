import { Button, Flex, Text } from "@chakra-ui/react";
import { Area } from "./Area";
import { FootballAreaBg } from "assets/images";

export const FootballArea = () => {
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
      <Button
        padding="8px 18px"
        textTransform="uppercase"
        fontWeight="700"
        fontSize="13px"
        lineHeight="17px"
        background="#1B7AB8"
        border="1px solid rgba(255, 255, 255, 0.09)"
        borderRadius=" 4px"
        position="absolute"
        right="30px"
        top="0px"
      >
        SHARE YOUR TEAM
      </Button>
    </Flex>
  );
};
