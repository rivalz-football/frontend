import axios from "plugins/axios";
import { useQuery } from "react-query";

export const useTokens = () => {
  return useQuery(
    ["tokens"],
    async () => {
      const { data } = await axios.get(`/web3/tokens`);
      return data;
    },
    {
      retry: false,
      refetchOnWindowFocus: false,
    }
  );
};
