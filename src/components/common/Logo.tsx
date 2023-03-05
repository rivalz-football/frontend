import { Flex, Image, Text } from "@chakra-ui/react";
import { LogoImage } from "assets/images";

type LogoProps = {
  isTextVisible?: boolean;
};

export const Logo = (props: LogoProps) => {
  const { isTextVisible = true } = props;
  return (
    <Flex gap="15px" alignItems="center">
      <Image src={LogoImage.src} alt="logo" width="30px" height="35px" />
      {isTextVisible && (
        <Text fontSize="21px" fontWeight="500" letterSpacing="0.08em">
          RivalZ
        </Text>
      )}
    </Flex>
  );
};
