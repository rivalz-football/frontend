import { Box, Container } from "@chakra-ui/react";
import { Footer } from "components/ReadyForSeason/Footer";
import { Header } from "components/ReadyForSeason/Header";

export const BlankLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <Box padding="30px" minHeight="100vh" overflowX="hidden">
      <Header />
      <Box
        display="flex"
        flexDirection="column"
        justifyContent="center"
        alignItems="center"
        padding={{
          base: "20px 10px 40px 10px",
          md: "50px 10px 100px 10px",
        }}
      >
        {children}
      </Box>
      <Footer />
    </Box>
  );
};
