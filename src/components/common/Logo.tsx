import { Flex, Image, Text } from "@chakra-ui/react";
import { LogoImage } from "assets/images";
import { useSidebar } from "contexts/useSidebarToggle";

export const Logo = () => {
  const { isSidebarOpen } = useSidebar();
  return (
    <Flex gap="15px" alignItems="center" width="30px" height="35px">
      <Image src={LogoImage.src} alt="logo" />
      {isSidebarOpen && (
        <Text fontSize="21px" fontWeight="500" letterSpacing="0.08em">
          RivalZ
        </Text>
      )}
    </Flex>
  );
};
