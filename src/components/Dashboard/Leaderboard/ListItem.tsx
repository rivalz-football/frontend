import { Flex, Text } from "@chakra-ui/react";
import { ILeaderboardUser, LeaderboardUserColor } from "assets/types";

type LeaderboardListItemProps = {
  user: ILeaderboardUser;
};

export const LeaderboardListItem = (props: LeaderboardListItemProps) => {
  const { user } = props;

  return (
    <Flex
      position="relative"
      justifyContent="space-between"
      alignItems="center"
      width="100%"
      padding="15px 25px"
      _after={{
        content: '""',
        position: "absolute",
        width: "2px",
        height: "100%",
        left: 0,
        background: LeaderboardUserColor[user.rank] || "#6A6C69",
      }}
      background="rgba(8, 8, 8, 0.3)"
    >
      <Flex gap="25px">
        <Text fontWeight="700" fontSize="15px">
          {user.rank}
        </Text>
        <Text fontWeight="500" fontSize="15px">
          {user.name}
        </Text>
      </Flex>
      <Text textTransform="uppercase" fontSize="15px" fontWeight="500">
        {user.point}
      </Text>
    </Flex>
  );
};
