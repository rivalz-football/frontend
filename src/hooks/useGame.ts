import { useQuery } from "react-query";
import axios from "plugins/axios";

export const usePlayerCards = () => {
  return useQuery("cards", async () => {
    const { data } = await axios.get("/game/cards");
    return data;
  });
};
