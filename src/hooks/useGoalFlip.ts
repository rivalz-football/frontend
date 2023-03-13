import { useToast } from "@chakra-ui/react";
import { PublicKey } from "@solana/web3.js";
import { GoalFlipClient, PlayGameParams } from "framework/GoalFlipClient";
import { useGoalFlipClient } from "framework/GoalFlipContext";
import { useMutation, useQuery, useQueryClient } from "react-query";

export const usePlay = () => {
  const { client: goalFlipClient } = useGoalFlipClient();

  const toast = useToast();

  return useMutation(
    "PLAY",
    (data: PlayGameParams) => {
      return goalFlipClient!.play(data);
    },
    {
      onSuccess: () => {},
      onError: (error: any) => {
        const errorMessage =
          error.message.match(/Error Message: (.+)/)[1] ||
          error?.response?.data?.message ||
          error.message;

        toast({
          title: "Error",
          description: errorMessage,
          status: "error",
          duration: 3000,
          isClosable: true,
        });
      },
    }
  );
};

export const useGameHistory = (gameId: PublicKey) => {
  const { client: goalFlipClient } = useGoalFlipClient();

  return useQuery(["GAME_HISTORY", gameId.toString()], () => {
    return goalFlipClient?.getGameHistory(gameId);
  });
};
