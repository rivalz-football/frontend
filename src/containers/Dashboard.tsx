import { Flex } from "@chakra-ui/react";
import { Banners } from "components/Dashboard/Banners";
import { Histories } from "components/Dashboard/Histories";
import { LeaderboardList } from "components/Dashboard/Leaderboard";
import { TopPlayersOfWeek } from "components/Dashboard/TopPlayersOfWeek";
import { DashboardLayout } from "layouts/Dashboard";

export const DashboardContainer = () => {
  return (
    <DashboardLayout>
      {/* Banners Area */}
      <Banners />
      <Flex
        direction={{
          base: "column",
          md: "row",
        }}
        gap="30px"
        marginTop="30px"
        alignItems="flex-start"
      >
        {/* Leaderboard Area */}
        <LeaderboardList />
        <Flex flexDir="column" gap="20px" width="100%">
          {/* Top Players of the Week Area */}
          <TopPlayersOfWeek />

          {/* Histories Area */}
          <Histories />
        </Flex>
      </Flex>
    </DashboardLayout>
  );
};
