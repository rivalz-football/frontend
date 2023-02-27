import { Container } from "@chakra-ui/react";
import { HeaderWithSidebar } from "components/Dashboard/SidebarWithHeader";

export const DashboardLayout = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  return (
    <Container maxW="100%" padding="0">
      <HeaderWithSidebar>{children}</HeaderWithSidebar>
    </Container>
  );
};
