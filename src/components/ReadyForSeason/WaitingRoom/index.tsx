import {
  Box,
  Container,
  Flex,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  SimpleGrid,
  Text,
} from "@chakra-ui/react";
import Countdown, { CountdownProps } from "react-countdown";
import ArrowDownIcon from "assets/icons/arrow-down.svg";
import ArrowUpIcon from "assets/icons/arrow-up.svg";

import { Step } from "containers/Home";
import { PlayerLocations } from "assets/types";
import { PlayerCard } from "components/ReadyForSeason/PlayerCard";
// import { PlayerCards } from "assets/data/playerCards";
type WaitingRoomType = {
  setStep: (step: Step) => void;
};

const fakeUser = {
  name: "Daggex",
  playerAmount: 5,
};

export const WaitingRoom = (props: WaitingRoomType) => {
  const { setStep } = props;

  return (
    <Container
      display="flex"
      flexDirection="column"
      alignItems="center"
      maxWidth="container.md"
    >
      <Text
        fontSize="24px"
        fontWeight="600"
        color="#FFFFFF"
        textTransform="uppercase"
      >
        CONGRATS! DAGGEX
      </Text>
      <Text
        lineHeight="23px"
        color="#FFFFFF"
        textAlign="center"
        marginTop="10px"
      >
        You chose your cards. You will be able to see which footballers are on
        the cards you selected, together with all the Rivalz players, and then
        you can form your team. You can transfer any footballer you want from
        the transfer market after reveal.
      </Text>
      <Flex
        flexDirection="column"
        alignItems="flex-end"
        marginTop="23px"
        lineHeight="45px"
      >
        <Text
          fontSize="22px"
          color="#EC068D"
          textTransform="uppercase"
          fontFamily="Score Board"
        >
          REVEAL TIME
        </Text>

        <Countdown
          date={Date.now() + 1000 * 60 * 60 * 24 * 5}
          onStop={() => setStep(Step.CHOOSE_CARDS)}
          renderer={RendererCountdown}
        />
      </Flex>
      <Flex
        justifyContent={{ base: "center", md: "space-between" }}
        flexDirection={{ base: "column", md: "row" }}
        alignItems="center"
        width="100%"
        marginTop="40px"
      >
        <Text display="block" fontWeight="300">
          You have a total of {fakeUser.playerAmount} players
        </Text>
        <Menu>
          <MenuButton
            padding="10px 25px"
            transition="all 0.2s"
            borderRadius="md"
            borderWidth="1px"
            _hover={{ bg: "gray.400" }}
            _focus={{ boxShadow: "outline" }}
          >
            <Flex gap="25px" alignItems="center" justifyContent="space-between">
              <Text
                fontSize="16px"
                fontWeight="400"
                lineHeight="23px"
                color="#FFFFFF"
                textTransform="uppercase"
                opacity="0.5"
              >
                Filter
              </Text>
              <Box display="flex" flexDirection="column" gap="3px">
                <ArrowUpIcon />
                <ArrowDownIcon />
              </Box>
            </Flex>
          </MenuButton>
          <MenuList background="#1A1A1A">
            {Object.values(PlayerLocations).map((location, index) => (
              <MenuItem background="#1A1A1A" key={index}>
                {location}
              </MenuItem>
            ))}
          </MenuList>
        </Menu>
      </Flex>
      {/* Barisin bana yazdığı kart componenti */}
      {/* <SimpleGrid column={3} gap={6} marginTop="40px">
        {PlayerCards.map((player, index) => (
          <PlayerCard key={index} player={player} />
        ))}
      </SimpleGrid> */}
    </Container>
  );
};

type RendererCountdownType = {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
  completed: boolean;
};

const RendererCountdown = ({
  days,
  hours,
  minutes,
  seconds,
  completed,
}: RendererCountdownType) => {
  return (
    <Text
      display="block"
      fontSize="69px"
      fontWeight="500"
      opacity="0.9"
      textTransform="uppercase"
      fontFamily="Score Board"
    >
      {days}d {hours}h {minutes}m {seconds}s
    </Text>
  );
};
