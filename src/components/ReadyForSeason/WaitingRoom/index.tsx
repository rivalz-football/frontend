import {
  Box,
  Container,
  Flex,
  Menu,
  MenuButton,
  MenuDivider,
  MenuIcon,
  MenuItem,
  MenuList,
  Stack,
  Text,
} from "@chakra-ui/react";
import Countdown from "react-countdown";
import ArrowDownIcon from "assets/icons/arrow-down.svg";
import ArrowUpIcon from "assets/icons/arrow-up.svg";

import { Step } from "containers/Home";
import { PlayerLocations } from "assets/types";
type WaitingRoomType = {
  setStep: (step: Step) => void;
};

export const WaitingRoom = (props: WaitingRoomType) => {
  const { setStep } = props;
  /* fake user */
  const fakeUser = {
    name: "Daggex",
    playerAmount: 5,
  };
  /**/
  return (
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
        CONGRATS! DAGGEX
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
        You chose your cards. You will be able to see which footballers are on
        the cards you selected, together with all the Rivalz players, and then
        you can form your team. You can transfer any footballer you want from
        the transfer market after reveal.
      </Text>
      <Flex
        flexDirection="column"
        alignItems="flex-end"
        maxWidth="fit-content"
        marginTop="23px"
      >
        <Text
          display="block"
          fontSize="22px"
          fontWeight="400"
          lineHeight="23px"
          color="#EC068D"
          textTransform="uppercase"
          fontFamily="Score Board"
        >
          REVEAL TIME
        </Text>
        <Text
          display="block"
          fontSize="69px"
          fontWeight="500"
          lineHeight="58px"
          color="#FFFFFF"
          opacity="0.9"
          textTransform="uppercase"
          fontFamily="Score Board"
        >
          <Countdown
            date={Date.now() + 10111000}
            onStop={() => setStep(Step.CHOOSE_CARDS)}
          />
        </Text>
      </Flex>
      <Flex
        justifyContent={{ base: "center", md: "space-between" }}
        flexDirection={{ base: "column", md: "row" }}
        alignItems="center"
        width="100%"
        marginTop="40px"
      >
        <Text
          display="block"
          fontSize="16px"
          lineHeight="23px"
          fontWeight="300"
          color="#FFFFFFF"
        >
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
            <MenuItem background="#1A1A1A" color={"#FFFFFF"}>
              {PlayerLocations.GOALKEEPER}
            </MenuItem>
            <MenuItem background="#1A1A1A" color={"#FFFFFF"}>
              {PlayerLocations.DEFENDER}
            </MenuItem>
            <MenuItem background="#1A1A1A" color={"#FFFFFF"}>
              {PlayerLocations.MIDFIELDER}
            </MenuItem>
            <MenuItem background="#1A1A1A" color={"#FFFFFF"}>
              {PlayerLocations.FORWARD}
            </MenuItem>
          </MenuList>
        </Menu>
      </Flex>
    </Container>
  );
};
