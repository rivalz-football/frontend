import { Box, Button, Flex, Text, Grid } from "@chakra-ui/react";
import { useState } from "react";

export const BetSection = () => {
  const [corner, setCorner] = useState(0);
  const [bet, setBet] = useState(0);
  return (
    <Flex flexDirection="column" gap="10px" width="fit-content">
      <Flex gap="10px">
        {[0, 1].map((item) => (
          <Box
            textTransform="uppercase"
            fontFamily="Score Board"
            lineHeight="22px"
            fontSize="19px"
            color={corner === item ? "#EC068D" : "#FFFFFF"}
            padding="15px 50px"
            background="rgba(0, 0, 0, 0.12)"
            borderRadius="4px"
            border={
              corner === item
                ? "1px dashed #EC068D"
                : "1px dashed rgba(255, 255, 255, 0.07)"
            }
            cursor="pointer"
            userSelect="none"
            transition="all 0.3s ease"
            onClick={() => setCorner(item)}
            key={item}
          >
            Left Corner
          </Box>
        ))}
      </Flex>
      <Flex gap="10px">
        {[0.1, 0.5, 1, 3].map((item) => (
          <Text
            padding="17px 20px"
            fontSize="16px"
            lineHeight="18px"
            fontFamily="Score Board"
            color={bet === item ? "#EC068D" : "#FFFFFF"}
            background="rgba(0, 0, 0, 0.12)"
            borderRadius="4px"
            border={
              bet === item
                ? "1px dashed #EC068D"
                : "1px dashed rgba(255, 255, 255, 0.07)"
            }
            textTransform={"uppercase"}
            width="100%"
            textAlign="center"
            transition="all 0.3s ease"
            onClick={() => setBet(item)}
            key={item}
          >
            {item}
          </Text>
        ))}
      </Flex>
      <Button
        background="#21CD44"
        fontFamily="Score Board"
        fontSize="22px"
        lineHeight="25px"
        textTransform="uppercase"
      >
        shoot!
      </Button>
    </Flex>
  );
};
