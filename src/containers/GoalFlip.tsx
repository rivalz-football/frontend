import { Flex, Text } from "@chakra-ui/react";
import {} from "components/TeamCenter/FootballArea";
import { RecentPlays } from "components/Goalflip/History";
import { DashboardLayout } from "layouts/Dashboard";
import { GoalFlipArea } from "components/Goalflip/GoalFlipArea";
import { BetSection } from "components/Goalflip/BetSection";

export const GoalFlipContainer = () => {
  return (
    <DashboardLayout>
      <Text fontWeight="600" fontSize="28px" textTransform="uppercase">
        Goal Flip
      </Text>
      <Text fontWeight="500">
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry.
      </Text>

      <Flex
        marginTop="30px"
        justifyContent="space-between"
        direction={{ sm: "column", md: "row" }}
      >
        <Flex
          width="100%"
          position="relative"
          justifyContent="center"
          flexDirection="column"
          alignItems="center"
          gap="27px"
        >
          <GoalFlipArea />
          <BetSection />
        </Flex>

        <RecentPlays />
      </Flex>
    </DashboardLayout>
  );
};
