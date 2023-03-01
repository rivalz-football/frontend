import {
  Box,
  Button,
  Container,
  Grid,
  Tab,
  TabList,
  TabPanel,
  TabPanels,
  Tabs,
  Text,
} from "@chakra-ui/react";

import { PlayerCard } from "../../common/PlayerCard";
import { PlayerPosition } from "assets/types";

// kart secimi icin gerekli olan datalar componente aktar
import { PlayerCards } from "assets/data/playerCards";
import { useState } from "react";
import { Step } from "containers/Home";
type ChosePlayerType = {
  setStep: (step: Step) => void;
};

export const ChoosePlayers = (props: ChosePlayerType) => {
  const [count, setcount] = useState(0);
  const { setStep } = props;

  return (
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
        <Tabs variant="soft-rounded">
          <TabList
            display="flex"
            justifyContent="center"
            paddingTop="40px"
            fontSize="17px"
            lineHeight="22px"
            fontWeight="600"
            color="#FFFFFF"
            gap="161px"
          >
            {Object.values(PlayerPosition).map((location, index) => (
              <Tab key={index} _selected={{ bg: "none", color: "#EC068D" }}>
                {location}
              </Tab>
            ))}
          </TabList>
          <Box
            padding={["0", "0", "0", "40px"]}
            display="flex"
            justifyContent="space-between"
          >
            <Box>
              <Text color="#54C748">You have selected 1 Goalkeepers card</Text>
              <Text color="#D95543">
                *You should choose at least 1 Goalkeeper card
              </Text>
            </Box>
            <Button
              bg=" rgba(75, 165, 65, 0.6);"
              textTransform="uppercase"
              borderRadius="none"
              onClick={() => setStep(Step.WAITING_ROOM)}
            >
              confirm Goalkeepers cards
            </Button>
          </Box>

          <TabPanels justifyContent="center">
            <TabPanel display="flex" justifyContent="center">
              <Grid
                templateColumns={{
                  base: "repeat(2, 1fr)",
                  md: "repeat(4, 1fr)",
                }}
                gap={4}
                justifyContent="center"
                height="1334px"
                overflow="scroll"
              >
                {PlayerCards.map((player, index) => (
                  <PlayerCard
                    key={index}
                    player={player}
                    setcount={setcount}
                    count={count}
                    isSelectable={true}
                  />
                ))}
              </Grid>
            </TabPanel>
            <TabPanel>
              <Grid
                templateColumns={{
                  base: "repeat(2, 1fr)",
                  md: "repeat(4, 1fr)",
                }}
                gap={4}
                justifyContent="center"
              >
                {PlayerCards.map((player, index) => (
                  <PlayerCard
                    key={index}
                    player={player}
                    setcount={setcount}
                    count={count}
                    isSelectable={true}
                  />
                ))}
              </Grid>
            </TabPanel>
            <TabPanel>
              <Grid
                templateColumns={{
                  base: "repeat(2, 1fr)",
                  md: "repeat(4, 1fr)",
                }}
                gap={4}
                justifyContent="center"
              >
                {PlayerCards.map((player, index) => (
                  <PlayerCard
                    key={index}
                    player={player}
                    setcount={setcount}
                    count={count}
                    isSelectable={true}
                  />
                ))}
              </Grid>
            </TabPanel>
            <TabPanel>
              <Grid
                templateColumns={{
                  base: "repeat(2, 1fr)",
                  md: "repeat(4, 1fr)",
                }}
                gap={4}
                justifyContent="center"
              >
                {PlayerCards.map((player, index) => (
                  <PlayerCard
                    key={index}
                    player={player}
                    setcount={setcount}
                    count={count}
                    isSelectable={true}
                  />
                ))}
              </Grid>
            </TabPanel>
          </TabPanels>
        </Tabs>
      </Container>
    </>
  );
};
