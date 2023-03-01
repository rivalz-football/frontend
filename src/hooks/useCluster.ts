import axios from "plugins/axios";
import { useQuery } from "react-query";

export const useCluster = () => {
  return useQuery("cluster", async () => {
    const { data } = await axios.get("/cluster-url");
    return data.uri;
  });
};
