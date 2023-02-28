import { Box, Container } from "@chakra-ui/react";
import { Footer } from "components/ReadyForSeason/Footer";
import { Header } from "components/ReadyForSeason/Header";

export const BlankLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <Box>
      <Header />
      {children}
      <Footer />
    </Box>
  );
};
