import {
  Box,
  Button,
  Container,
  Flex,
  Grid,
  Spinner,
  Tabs,
  Text,
} from "@chakra-ui/react";

import { PlayerCard } from "../../common/PlayerCard";
import { IPlayer, PlayerPosition, PlayerPositionContext } from "assets/types";

import { useEffect, useState } from "react";
import { Step } from "containers/Home";
import { usePlayers, useSubmitPlayers } from "hooks/useGame";
import { useUserAuth } from "contexts/UserAuthContext";

type ChoosePlayersProps = {
  setStep: (step: Step) => void;
};

export const ChoosePlayers = (props: ChoosePlayersProps) => {
  const { setStep } = props;
  const { status } = useUserAuth();
  const [selectedIds, setSelectedIds] = useState<string[]>([]);
  const submitPlayers = useSubmitPlayers();

  const [selectedPosition, setSelectedPosition] = useState(
    PlayerPosition.GOALKEEPER
  );

  const { data: players, isLoading } = usePlayers(
    PlayerPositionContext[selectedPosition].shortText
  );

  useEffect(() => {
    if (!status || !status.playersConfig) return;

    const completedPositions = Object.entries(status.playersConfig)
      .filter(([key, config]) => config.isSelectCompleted)
      .map(([key]) => key as PlayerPosition);

    const nextPosition = Object.values(PlayerPosition).find(
      (pos) => !completedPositions.includes(pos)
    );

    if (nextPosition) setSelectedPosition(nextPosition);
  }, [status]);

  useEffect(() => {
    setSelectedIds([]);
  }, [selectedPosition]);

  const isSelected = (key: string) => {
    return selectedIds.includes(key);
  };

  const isSelectCompleted = () => {
    if (!status || !status.playersConfig) return false;

    const { count = 0, playersToSelect } =
      status.playersConfig[selectedPosition] || {};
    return selectedIds.length + count < playersToSelect;
  };

  const toggleSelect = (id: string) => {
    if (isLoading) return;

    let newSelectedIds = isSelected(id)
      ? selectedIds.filter((selectedId) => selectedId !== id)
      : [...selectedIds, id];

    if (isSelectCompleted()) setSelectedIds(newSelectedIds);
    else if (newSelectedIds.length > selectedIds.length) {
      // Add the selected card as the last card in the list and remove the first card
      newSelectedIds = [...selectedIds.slice(1), id];
      setSelectedIds(newSelectedIds);
    } else {
      // Maximum number of players for this position has already been selected
      // Do nothing or show an error message to the user
    }

    // Add the selected card as the last card in the list
    const lastIndex = newSelectedIds.length - 1;
    const lastSelectedId = newSelectedIds[lastIndex];
    setSelectedIds((prevSelectedIds) => [
      ...prevSelectedIds.filter((selectedId) => selectedId !== id),
      lastSelectedId,
    ]);
  };

  const onSubmit = async () => {
    if (
      isLoading ||
      !status ||
      !status.playersConfig ||
      submitPlayers.isLoading
    ) {
      return;
    }

    const { count = 0, playersToSelect } =
      status.playersConfig[selectedPosition] || {};
    const isSelectCompleted = selectedIds.length + count >= playersToSelect;

    if (isSelectCompleted) await submitPlayers.mutateAsync(selectedIds);
  };

  return (
    <>
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
          textTransform="uppercase"
        >
          Choose your own player cards
        </Text>
        <Text
          fontSize="16px"
          lineHeight="23px"
          textAlign="center"
          marginTop="14px"
        >
          Choose your footballer cards and create your team.
          <br /> Note that there is a minimum number of players you must select
          from each region
        </Text>
        <Flex
          background="rgba(0, 0, 0, 0.07)"
          border="1px solid rgba(255, 255, 255, 0.02)"
          width="100%"
          justifyContent="space-between"
          marginTop="40px"
          padding="15px 50px"
        >
          {Object.values(PlayerPosition).map((position, index) => (
            <Button
              key={index}
              display="flex"
              bg="none"
              onClick={() => setSelectedPosition(position)}
              opacity={selectedPosition === position ? 1 : 0.15}
              color={selectedPosition === position ? "#EC068D" : ""}
              _hover={{ bg: "none", color: "#EC068D", opacity: 1 }}
              textTransform="uppercase"
            >
              {position}
            </Button>
          ))}
        </Flex>

        <Box width="100%" marginTop="25px">
          {isLoading && <Spinner my="40px" />}

          {!isLoading && (
            <>
              <Flex width="100%">
                <Box>
                  <Text color="#54C748" fontWeight="500" fontSize="15px">
                    You have selected {selectedIds.length} {selectedPosition}{" "}
                    card
                  </Text>
                  <Text color="rgba(217, 85, 67, 0.6)" fontSize="15px">
                    *You should choose at least{" "}
                    {status &&
                      status.playersConfig &&
                      status.playersConfig[selectedPosition]
                        ?.playersToSelect}{" "}
                    {selectedPosition} card
                  </Text>
                </Box>
                <Button
                  background="rgba(75, 165, 65, 0.6)"
                  _hover={{
                    background: "rgba(75, 165, 65, 1)",
                  }}
                  textTransform="uppercase"
                  borderRadius="none"
                  marginLeft="auto"
                  fontWeight="700"
                  isLoading={isLoading || submitPlayers.isLoading}
                  onClick={onSubmit}
                >
                  Confirm {selectedPosition} Cards
                </Button>
              </Flex>

              <Grid
                templateColumns={{
                  base: "repeat(2, 1fr)",
                  md: "repeat(auto-fill, minmax(235px, 1fr))",
                }}
                gap="20px"
                marginTop="25px"
              >
                {players.map((player: IPlayer) => (
                  <PlayerCard
                    key={player._id}
                    player={player}
                    selected={isSelected(player._id)}
                    onClick={() => toggleSelect(player._id)}
                  />
                ))}
              </Grid>
            </>
          )}
        </Box>
      </Container>
    </>
  );
};
