import {
  Box,
  Button,
  Container,
  Flex,
  SimpleGrid,
  Spinner,
  Stack,
  Text,
} from "@chakra-ui/react";
import { CardItem } from "./CardItem";
// import { cards } from "assets/data/cards";
import { Step } from "containers/Home";
import { usePlayerCards } from "hooks/useGame";
import { Spin } from "components/common/Spinner";
import { IPlayerCard } from "assets/types";
import { useEffect, useState } from "react";
type ChoseCardType = {
  setStep: (step: Step) => void;
};

export const ChooseCards = (props: ChoseCardType) => {
  const { setStep } = props;
  const { data: cards, isLoading } = usePlayerCards();
  let [fakeCards, setFakeCards] = useState<IPlayerCard[]>([]);
  const [activeUniqueCardCount, setActiveUniqueCardCount] = useState(0);
  const [sumChoicePlayerCount, setSumChoicePlayerCount] = useState(0);

  useEffect(() => {
    if (!cards || isLoading) return;

    const updatedFakeCards = cards.map((card: IPlayerCard) => ({
      ...card,
      currentCount: Math.floor(Math.random() * 5),
    }));

    setFakeCards(updatedFakeCards);

    const uniqueCards = updatedFakeCards.filter(
      (card: IPlayerCard) => card.currentCount && card.currentCount > 0
    );

    const activeUniqueCardCount = uniqueCards.length;

    setActiveUniqueCardCount(activeUniqueCardCount);
  }, [cards]);

  useEffect(() => {
    const uniqueCards = fakeCards.filter(
      (card: IPlayerCard) => card.currentCount && card.currentCount > 0
    );

    const activeUniqueCardCount = uniqueCards.length;

    setActiveUniqueCardCount(activeUniqueCardCount);
  }, [fakeCards]);

  useEffect(() => {
    const sumChoicePlayerCount = fakeCards.reduce(
      (acc: number, card: IPlayerCard) =>
        acc + card.choiceCount * (card.currentCount || 0),
      0
    );

    setSumChoicePlayerCount(sumChoicePlayerCount);
  }, [fakeCards]);

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
      {isLoading && <Spinner my="60px" />}
      {!isLoading && fakeCards && (
        <SimpleGrid
          gap="35px"
          marginTop="35px"
          templateColumns="repeat(auto-fill, minmax(220px, 1fr))"
          width="100%"
        >
          {fakeCards.map((card: IPlayerCard) => (
            <CardItem key={card._id} card={card} />
          ))}
        </SimpleGrid>
      )}

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
          You have selected{" "}
          <Text color="#FF5ABB" display="inline-block">
            {activeUniqueCardCount} Rivalz Cards
          </Text>{" "}
          in total. Rivalz cards will give you the right to choose{" "}
          <Text color="#FF5ABB" display="inline-block">
            {sumChoicePlayerCount} player cards.
          </Text>
        </Box>
        <Button
          padding="13px 40px"
          background="rgba(75, 165, 65, 0.89)"
          borderRadius="4px"
          onClick={() => setStep(Step.CHOOSE_PLAYERS)}
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
