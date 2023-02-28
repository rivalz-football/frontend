import { Box, Container } from "@chakra-ui/react";
import { Footer } from "components/ReadyForSeason/Footer";
import { Header } from "components/ReadyForSeason/Header";

export const BlankLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <Box padding="30px" minHeight="100vh">
      <Header />
      <Box
        display="flex"
        flexDirection="column"
        justifyContent="center"
        alignItems="center"
        padding="50px 10px 100px 10px"
      >
        {children}
      </Box>
      <Footer />
    </Box>
  );
};
