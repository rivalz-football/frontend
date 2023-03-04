import {
  Box,
  Button,
  Flex,
  SimpleGrid,
  Tab,
  TabList,
  TabPanel,
  TabPanels,
  Tabs,
} from "@chakra-ui/react";
import { PlayerCard } from "components/common/PlayerCard";
import { IPlayer } from "assets/types";
import { useMePlayers } from "hooks/useUser";

type CustomTabProps = {
  children: React.ReactNode;
};

const CustomTab = (props: CustomTabProps) => {
  return (
    <Tab
      _selected={{ color: "#EC068D" }}
      fontSize="17px"
      padding="20px 100px"
      background="rgba(0, 0, 0, 0.07)"
      lineHeight="20px"
      {...props}
    />
  );
};

export const Inventory = () => {
  const { data: players, isLoading } = useMePlayers();

  return (
    <Box>
      <Tabs variant="none" _selected={{ color: "#EC068D" }}>
        <TabList>
          <CustomTab>My Team</CustomTab>
          <CustomTab>Footboller info</CustomTab>
        </TabList>
        <TabPanels>
          <TabPanel>
            <SimpleGrid
              alignItems="center"
              templateColumns={{
                base: "repeat(2, 1fr)",
                md: "repeat(auto-fill, minmax(235px, 1fr))",
              }}
              width="100%"
              gap="20px"
              marginTop="25px"
            >
              {!isLoading &&
                players?.map((player: IPlayer, index: number) => (
                  <PlayerCard key={index} player={player} selected={false} />
                ))}
            </SimpleGrid>
          </TabPanel>
        </TabPanels>
      </Tabs>
    </Box>
  );
};
