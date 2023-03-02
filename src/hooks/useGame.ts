import { useMutation, useQuery, useQueryClient } from "react-query";
import axios from "plugins/axios";
import { useToast } from "@chakra-ui/react";

export const usePlayerCards = () => {
  return useQuery(
    "cards",
    async () => {
      const { data } = await axios.get("/game/cards");
      return data;
    },
    {
      refetchOnWindowFocus: false,
    }
  );
};

export const usePlayers = (position?: string) => {
  return useQuery(
    ["players", position],
    async () => {
      const { data } = await axios.get("/game/players", {
        params: {
          position,
        },
      });
      return data;
    },
    {
      refetchOnWindowFocus: false,
    }
  );
};

export const useSubmitPlayers = () => {
  const toast = useToast();
  const queryClient = useQueryClient();

  return useMutation(
    "submitPlayers",
    async (playerIds: string[]) => {
      const { data } = await axios.post("/game/players", {
        playerIds,
      });

      queryClient.invalidateQueries("meStatus");

      return data;
    },
    {
      onSuccess: () => {
        toast({
          title: "Players submitted",
          status: "success",
          duration: 3000,
          isClosable: true,
        });
      },
      onError: (error: any) => {
        toast({
          title: "Players submission failed",
          description: error?.response?.data?.message || "Something went wrong",
          status: "error",
          duration: 3000,
          isClosable: true,
        });
      },
    }
  );
};

export const useStakeCards = () => {
  const toast = useToast();
  const queryClient = useQueryClient();

  return useMutation(
    "stakeCards",
    async () => {
      const { data } = await axios.get("/auth/stake");
      queryClient.invalidateQueries("meStatus");

      return data;
    },
    {
      onSuccess: () => {
        toast({
          title: "Stake successful",
          status: "success",
          duration: 3000,
          isClosable: true,
        });
      },
      onError: (error: any) => {
        toast({
          title: "Stake failed",
          description: error?.response?.data?.message || "Something went wrong",
          status: "error",
          duration: 3000,
          isClosable: true,
        });
      },
    }
  );
};
