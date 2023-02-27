import { Box, Flex, Image, Text } from "@chakra-ui/react";
import { LogoImage } from "assets/images";

export const Logo = () => {
  return (
    <Flex gap="15px" alignItems="center" width="30px" height="35px">
      <Image src={LogoImage.src} alt="logo" />
      <Text fontSize="21px" fontWeight="500" letterSpacing="0.08em">
        RivalZ
      </Text>
    </Flex>
  );
};
