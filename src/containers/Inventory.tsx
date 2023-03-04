import { Box, Flex, Text } from "@chakra-ui/react";
import { Inventory } from "components/Inventory";

import { DashboardLayout } from "layouts/Dashboard";

export const InventoryContainer = () => {
  return (
    <DashboardLayout>
      <Text
        // linheight 44
        lineHeight="44px"
        fontWeight="600"
        fontSize="28px"
        textTransform="uppercase"
      >
        Inventory
      </Text>
      <Text fontWeight="500" lineHeight="23px" fontSize="16px">
        You can include and remove your players in your weekly team
      </Text>
      <Inventory />
    </DashboardLayout>
  );
};
