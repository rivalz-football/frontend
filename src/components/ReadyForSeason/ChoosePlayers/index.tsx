import {
  Container,
  Tab,
  TabList,
  TabPanel,
  TabPanels,
  Tabs,
  Text,
} from "@chakra-ui/react";

export const ChoosePlayers = () => (
  <>
    <Container
      display="flex"
      flexDirection="column"
      alignItems="center"
      maxWidth="container.md"
      padding="10px"
    >
      <Text
        fontSize="24px"
        fontWeight="600"
        lineHeight="23px"
        color="#FFFFFF"
        textTransform="uppercase"
      >
        Choose your own player cards
      </Text>
      <Text
        fontSize="16px"
        fontWeight="400"
        lineHeight="23px"
        color="#FFFFFF"
        textAlign="center"
        marginTop="14px"
        maxWidth="839px"
      >
        Choose your footballer cards and create your team.
        <br /> Note that there is a minimum number of players you must select
        from each region
      </Text>
      <Tabs>
        <TabList
          fontSize="17px"
          lineHeight="22px"
          fontWeight="600"
          color="#FFFFFF"
        >
          <Tab>Goalkeepers</Tab>
          <Tab>Defenders</Tab>
          <Tab>Midfielders</Tab>
          <Tab>Forwards</Tab>
        </TabList>

        <TabPanels>
          <TabPanel>
            <p>Goalkeepers</p>
          </TabPanel>
          <TabPanel>
            <p>Defenders!</p>
          </TabPanel>
          <TabPanel>
            <p>Midfielders!</p>
          </TabPanel>
          <TabPanel>
            <p>Forwads!</p>
          </TabPanel>
        </TabPanels>
      </Tabs>
    </Container>
  </>
);
