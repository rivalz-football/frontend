import { Button, Flex, Text } from "@chakra-ui/react";
import { RecentPlays } from "components/Goalflip/History";
import { DashboardLayout } from "layouts/Dashboard";
import { useGoalFlipClient } from "framework/GoalFlipContext";
import { useGameHistory, usePlay } from "hooks/useGoalFlip";
import { Corner, Position } from "framework/GoalFlipClient";
import { GoalFlipArea } from "components/Goalflip/GoalFlipArea";
import {
  SelectBetInput,
  SelectCornerInput,
} from "components/Goalflip/BetSection";
import { useEffect, useState } from "react";
import { LAMPORTS_PER_SOL, PublicKey } from "@solana/web3.js";
import { useAnchorWallet } from "@solana/wallet-adapter-react";
import { useQueryClient } from "react-query";

export type AnimationProps = {
  isPlaying: boolean;
  won?: boolean;
  ballPosition?: Corner;
  goalKeeperPosition?: Corner;
  amount?: number;
};

export const GoalFlipContainer = () => {
  const { client } = useGoalFlipClient();
  const [corner, setCorner] = useState(Corner.Left);
  const [bet, setBet] = useState(0.1);

  const [animation, setAnimation] = useState<AnimationProps>({
    isPlaying: false,
  });
  const { programInformation } = useGoalFlipClient();
  const play = usePlay();

  const onSubmit = async () => {
    if (!programInformation || !corner || !bet) return;

    await play.mutateAsync({
      corner,
      position: Position.Forward,
      betAmount: bet,
      game: programInformation?.footballAccountAddress,
      admin: programInformation?.adminAccountAddress,
    });
  };

  const queryClient = useQueryClient();

  useEffect(() => {
    const listener = client?.program.addEventListener(
      "ResultGameMatchEvent",
      (event) => {
        const {
          game,
          player,
          won,
          playerCorner,
          wonAmount,
          betAmount,
          commissionAmount,
        } = event;

        queryClient.invalidateQueries(["GAME_HISTORY", game.toString()]);

        if (player.toBase58() !== client.provider.publicKey.toBase58()) return;

        setAnimation({
          isPlaying: true,
          won,
          ballPosition: corner,
          goalKeeperPosition: won
            ? corner
            : playerCorner?.left
            ? Corner.Right
            : Corner.Left,
          amount:
            (won
              ? wonAmount.toNumber()
              : betAmount.toNumber() + commissionAmount.toNumber()) /
            LAMPORTS_PER_SOL,
        });
        queryClient.invalidateQueries(["ME_SOLANA_BALANCE"]);
      }
    );

    return () => {
      if (listener !== undefined) {
        client?.program.removeEventListener(listener);
      }
    };
  }, [client?.program, queryClient]);

  return (
    <DashboardLayout>
      <Text fontWeight="600" fontSize="28px" textTransform="uppercase">
        Goal Flip
      </Text>
      <Text fontWeight="500">
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry.
      </Text>

      <Flex
        marginTop="30px"
        justifyContent="space-between"
        direction={{ sm: "column", md: "row" }}
      >
        <Flex
          width="100%"
          position="relative"
          justifyContent="center"
          flexDirection="column"
          alignItems="center"
          gap="25px"
        >
          <GoalFlipArea animation={animation} setAnimation={setAnimation} />
          <Flex
            flexDirection="column"
            gap="10px"
            minWidth={{
              sm: "100%",
              md: "430px",
            }}
          >
            <SelectCornerInput corner={corner} setCorner={setCorner} />
            <SelectBetInput bet={bet} setBet={setBet} />

            <Button
              background="#21CD44"
              fontFamily="Score Board"
              fontSize="22px"
              textTransform="uppercase"
              _hover={{
                background: "#21CD44",
              }}
              isLoading={play.isLoading}
              onClick={onSubmit}
            >
              shoot!
            </Button>
          </Flex>
        </Flex>

        {programInformation?.footballAccountAddress && (
          <RecentPlays game={programInformation.footballAccountAddress} />
        )}
      </Flex>
    </DashboardLayout>
  );
};
