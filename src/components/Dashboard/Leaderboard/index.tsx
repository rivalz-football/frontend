import { Box, Flex, Text } from "@chakra-ui/react";
import { leaderboard } from "assets/data";
import { LeaderboardListItem } from "./ListItem";

export const LeaderboardList = () => {
  return (
    <Box
      maxWidth={{
        base: "100%",
        md: "35%",
      }}
      minWidth="300px"
      width="100%"
      background="rgba(217, 217, 217, 0.02)"
      border="1px solid rgba(255, 255, 255, 0.02)"
      borderRadius="4px"
    >
      <Flex justifyContent="space-between" width="100%" padding="25px">
        <Text fontWeight="600">Leaderboard</Text>
        <Text textTransform="uppercase">Point</Text>
      </Flex>
      <Flex direction="column" gap="10px">
        {leaderboard.others.map((user, index) => (
          <LeaderboardListItem user={user} key={index} />
        ))}
      </Flex>

      <Text padding="25px" fontSize="17px" fontWeight="500">
        Your Season Stats
      </Text>

      <LeaderboardListItem user={leaderboard.me} />

      <Text textTransform="uppercase" padding="25px" textAlign="center">
        Show More
      </Text>
    </Box>
  );
};
