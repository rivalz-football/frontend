import { Container } from "@chakra-ui/react";
import { Footer } from "components/ReadyForSeason/Footer";
import { Header } from "components/ReadyForSeason/Header";

export const BlankLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <Container maxWidth="100%">
      <Header />
      {children}
      <Footer />
    </Container>
  );
};
