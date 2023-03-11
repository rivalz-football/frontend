import axios from "plugins/axios";
import { useQuery } from "react-query";

export const useProgramInfo = () => {
  return useQuery("program_information", async () => {
    const { data } = await axios.get("/program");
    return data;
  });
};
