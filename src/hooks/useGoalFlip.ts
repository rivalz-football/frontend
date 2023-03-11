import { useToast } from "@chakra-ui/react";
import { GoalFlipClient, PlayGameParams } from "framework/GoalFlipClient";
import { useGoalFlipClient } from "framework/GoalFlipContext";
import { useMutation, useQueryClient } from "react-query";

export const usePlay = () => {
  const { client: goalFlipClient } = useGoalFlipClient();

  // const queryClient = useQueryClient();

  const toast = useToast();

  return useMutation(
    "SET_WINNER",
    (data: PlayGameParams) => {
      return goalFlipClient!.play(data);
    },
    {
      onSuccess: () => {},
      onError: (error: any) => {
        toast({
          title: "Error",
          description: error.message,
          status: "error",
          duration: 3000,
          isClosable: true,
        });
      },
    }
  );
};
