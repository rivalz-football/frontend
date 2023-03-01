import { Flex, Image, Text } from "@chakra-ui/react";
import { LogoImage } from "assets/images";
import { useSidebar } from "contexts/SidebarContext";

export const Logo = () => {
  const { isSidebarOpen } = useSidebar();
  return (
    <Flex gap="15px" alignItems="center">
      <Image src={LogoImage.src} alt="logo" width="30px" height="35px" />
      {isSidebarOpen && (
        <Text fontSize="21px" fontWeight="500" letterSpacing="0.08em">
          RivalZ
        </Text>
      )}
    </Flex>
  );
};
