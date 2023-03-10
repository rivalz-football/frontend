import { Flex, Text } from "@chakra-ui/react";
import { PlaysPropsType } from "assets/types";

export const PlaysItem = (props: PlaysPropsType) => {
  const { plays } = props;
  return (
    <Flex
      background="#111111"
      padding="14px 20px"
      justifyContent="space-between"
      gap="20px"
    >
      <Flex flexDirection="column" gap="3px">
        <Text
          fontWeight="400"
          letterSpacing="0.02em"
          lineHeight="17px"
          fontSize="13px"
        >
          <strong>{plays.username}</strong> shot into the {plays.cornerSide}{" "}
          {plays.position === plays.cornerSide
            ? `but goalkeeper 
                does not allow the goal.`
            : `and scored.`}
        </Text>
        <Text fontSize="10px" lineHeight="13px" opacity="0.33">
          {plays.time}m ago
        </Text>
      </Flex>
      <Text
        display="block"
        padding="8px 0"
        color={plays.position === plays.cornerSide ? "#21CD44" : "#AA2D1C"}
        fontWeight={700}
        textTransform="uppercase"
        minWidth="fit-content"
      >
        {plays.position === plays.cornerSide ? "+ 1 Sol" : "- 2 sol"}
      </Text>
    </Flex>
  );
};
