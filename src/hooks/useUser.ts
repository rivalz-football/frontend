import { useMutation, useQuery, useQueryClient } from "react-query";
import axios from "plugins/axios";
import { TransactionType } from "assets/types";
import { useGoalFlipClient } from "framework/GoalFlipContext";

export const useAuthMe = () => {
  return useQuery(
    "me",
    async () => {
      const { data } = await axios.get("/auth/me");
      return data;
    },
    {
      refetchOnWindowFocus: "always",
    }
  );
};

export const useAuthLogout = () => {
  const queryClient = useQueryClient();

  return useMutation(async () => {
    const { data } = await axios.get("/auth/logout");
    queryClient.invalidateQueries("me");

    return data;
  });
};

export const useMeTokens = (mintAddress?: string) => {
  return useQuery(
    ["meTokens"],
    async () => {
      const { data } = await axios.get(`/auth/me/tokens`, {
        params: {
          mintAddress,
        },
      });
      return data;
    },
    {
      retry: false,
      refetchOnWindowFocus: false,
    }
  );
};

export const useMeTransactions = (type?: TransactionType) => {
  return useQuery(
    ["meTransactions", type],
    async () => {
      const { data } = await axios.get(
        "/auth/me/transactions",
        type ? { params: { type } } : undefined
      );
      return data;
    },
    {
      retry: false,
      refetchOnWindowFocus: false,
    }
  );
};

export const useMeStatus = (enabled: boolean) => {
  return useQuery(
    "meStatus",
    async () => {
      const { data } = await axios.get("/auth/me/status");
      return data;
    },
    {
      enabled,
    }
  );
};

export const useMePlayers = () => {
  return useQuery(
    "mePlayers",
    async () => {
      const { data } = await axios.get("/auth/me/players");
      return data;
    },
    {
      refetchOnWindowFocus: false,
    }
  );
};

export const useMeSolanaBalance = () => {
  const { client: goalFlipClient } = useGoalFlipClient();

  return useQuery(["ME_SOLANA_BALANCE"], () => {
    return goalFlipClient?.getBalance();
  });
};
