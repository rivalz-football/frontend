import { Box, Container } from "@chakra-ui/react";
import { Header } from "components/ReadyForSeason/Header";

export const BlankLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <Box  >
      <Header />
      {children}
    </Box>
  );
};
