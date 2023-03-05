import { Flex, Text } from "@chakra-ui/react";
import { FootballArea } from "components/TeamCenter/FootballArea";
import { Players } from "components/TeamCenter/Players";
import { DashboardLayout } from "layouts/Dashboard";

export const TeamCenterContainer = () => {
  return (
    <DashboardLayout>
      <Text fontWeight="600" fontSize="28px" textTransform="uppercase">
        Team Center
      </Text>
      <Text fontWeight="500">
        You can include and remove your players in your weekly team
      </Text>

      <Flex
        marginTop="30px"
        justifyContent="space-between"
        direction={{ base: "column", md: "row" }}
      >
        <Flex width="100%">
          <FootballArea />
        </Flex>

        <Players />
      </Flex>
    </DashboardLayout>
  );
};
