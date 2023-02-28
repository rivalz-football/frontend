import { Box, Container } from "@chakra-ui/react";
import { Footer } from "components/ReadyForSeason/Footer";
import { Header } from "components/ReadyForSeason/Header";

export const BlankLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <Box
      padding="30px"
      minHeight="100vh"
      overflowX="hidden"
      display="flex"
      flexDirection="column"
      justifyContent="space-between"
    >
      <Header />
      <Box
        display="flex"
        flexDirection="column"
        justifyContent="center"
        alignItems="center"
      >
        {children}
      </Box>
      <Footer />
    </Box>
  );
};
