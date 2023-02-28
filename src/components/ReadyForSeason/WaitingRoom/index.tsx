import {
  Box,
  Button,
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
import { PlayerPosition } from "assets/types";
import { PlayerCards } from "assets/data/playerCards";
import { PlayerCard } from "components/common/PlayerCard";

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
      maxWidth="container.lg"
      padding="0"
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
        lineHeight={{
          base: "23px",
          md: "45px",
        }}
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
        justifyContent="space-between"
        flexDirection="row"
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
            {Object.values(PlayerPosition).map((location, index) => (
              <MenuItem background="#1A1A1A" key={index}>
                {location}
              </MenuItem>
            ))}
          </MenuList>
        </Menu>
      </Flex>

      <SimpleGrid
        templateColumns={{
          base: "repeat(2, 1fr)",
          md: "repeat(4, 1fr)",
        }}
        gap={4}
        justifyContent="center"
        marginTop="27px"
        height="762px"
        overflowY="scroll"
        padding="15px"
      >
        {PlayerCards.map((player, index) => (
          <PlayerCard key={index} player={player} isSelectable={false} />
        ))}
      </SimpleGrid>
      <Button
        display="flex"
        background="rgba(75, 165, 65, 0.89)"
        color="#FFFFFF"
        minWidth="100%"
        padding="16px 0"
        textTransform="uppercase"
        fontWeight="700"
        fontSize="19px"
        lineHeight="24px"
        marginTop="30px"
      >
        GO TO TEAM CENTER
      </Button>
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
      fontSize={{
        base: "30px",
        md: "70px",
      }}
      fontWeight="500"
      opacity="0.9"
      textTransform="uppercase"
      fontFamily="Score Board"
    >
      {days}d {hours}h {minutes}m {seconds}s
    </Text>
  );
};
