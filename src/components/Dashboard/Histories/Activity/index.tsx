import { Box, Flex, Text } from "@chakra-ui/react";
import { IActivityHistory } from "assets/types";
import { ActivityItem } from "./ActivityItem";

const data: IActivityHistory[] = [
  {
    username: "cihan",
    box: "golden",
    playerName: "M.Rashford",
    playerColor: "rgba(246, 225, 32, 0.8)",
  },
  {
    username: "bonkaksu",
    box: "golden",
    playerName: "A. Ayew",
    playerColor: "rgba(217, 85, 67, 0.8)",
  },
  {
    username: "fazil",
    box: "golden",
    playerName: "L. Messi",
    playerColor: "rgba(246, 225, 32, 0.8)",
  },
];

export const Activity = () => {
  return (
    <Box width="100%">
      <Text fontWeight="700" padding="0 20px 20px 20px">
        Activity
      </Text>
      <Flex flexDirection="column" gap="5px" alignItems="flex-start">
        {data.map((item, index) => (
          <ActivityItem item={item} key={index} />
        ))}
      </Flex>
    </Box>
  );
};
