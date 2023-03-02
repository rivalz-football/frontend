import { useMutation, useQuery, useQueryClient } from "react-query";
import axios from "plugins/axios";

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
