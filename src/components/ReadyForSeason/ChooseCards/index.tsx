import {
  Box,
  Button,
  Container,
  Flex,
  SimpleGrid,
  Stack,
  Text,
} from "@chakra-ui/react";
import { CardItem } from "./CardItem";
import { cards } from "assets/data/cards";
import { Step } from "containers/Home";
type ChoseCardType = {
  setStep: (step: Step) => void;
};

export const ChooseCards = (props: ChoseCardType) => {
  const { setStep } = props;

  return (
    <Container
      display="flex"
      flexDirection="column"
      alignItems="center"
      maxWidth="container.lg"
      padding="10px"
    >
      <Text
        fontSize="24px"
        fontWeight="600"
        lineHeight="23px"
        color="#FFFFFF"
        textTransform="uppercase"
      >
        RivalZ Cards
      </Text>
      <Text
        fontSize="16px"
        fontWeight="400"
        lineHeight="23px"
        color="#FFFFFF"
        textAlign="center"
        marginTop="14px"
        maxWidth="895px"
      >
        Below is a list of Rivalz cards you own.
        <br /> Each card gives you the right to purchase a football player
        before the season starts.
        <br /> Players you acquire using these cards will be free of charge.You
        can purchase more football players for your team by using multiple
        cards.
      </Text>
      <SimpleGrid
        gap="35px"
        marginTop="35px"
        templateColumns="repeat(auto-fill, minmax(220px, 1fr))"
        width="100%"
      >
        {cards.map((card, index) => (
          <CardItem key={index} card={card} />
        ))}
      </SimpleGrid>
      <Flex
        justifyContent="space-between"
        marginTop="35px"
        width="100%"
        flexDirection={{ base: "column", md: "row" }}
        gap="10px"
      >
        <Box
          fontSize="16px"
          fontWeight="400"
          lineHeight="20px"
          color="#FFFFFF"
          maxWidth="390px"
        >
          You have selected
          <Text color="#FF5ABB" display="inline-block">
            3 Rivalz Cards
          </Text>{" "}
          in total. Rivalz cards will give you the right to choose{" "}
          <Text color="#FF5ABB" display="inline-block">
            18 player cards.
          </Text>
        </Box>
        <Button
          padding="13px 40px"
          background="rgba(75, 165, 65, 0.89)"
          borderRadius="4px"
          onClick={() => setStep(Step.WAITING_ROOM)}
        >
          <Text
            fontSize="16px"
            fontWeight="700"
            lineHeight="20px"
            color="#FFFFFF"
            textTransform="uppercase"
            display="inline"
          >
            STAKE ALL CARDS & CONTINUE
          </Text>
        </Button>
      </Flex>
    </Container>
  );
};
