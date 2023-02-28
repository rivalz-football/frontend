import { Flex } from "@chakra-ui/react";
import { Activity } from "./Activity";
import { Transfers } from "./Transfers";

export const Histories = () => {
  return (
    <Flex
      background="rgba(217, 217, 217, 0.01)"
      border="1px solid rgba(255, 255, 255, 0.02)"
      borderRadius="4px"
      justifyContent="space-between"
      padding="20px 0 20px 0"
      direction={{
        base: "column",
        md: "row",
      }}
      gap={{
        base: "20px",
        md: "0",
      }}
    >
      <Transfers />
      <Activity />
    </Flex>
  );
};
