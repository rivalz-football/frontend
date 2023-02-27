import { Box, Text,Image} from "@chakra-ui/react";
import { LogoImage } from "assets/images";


export const Logo = () => {
  return (
    <Box display="flex"  alignItems="center" gap="20px">
      <Image src={LogoImage.src} width="35px"/>
      <Text fontSize="24px" color="white" marginLeft="10px">
        RivalZ
      </Text>
    </Box>
  );
};
