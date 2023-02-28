import { Box, Card, CardBody, CardFooter, Image } from "@chakra-ui/react";
import { PlayerBackgroundImage } from "assets/images";
import { RivalZ } from "assets/images";
import CardSelectedIcon from "assets/icons/card-selected-icon.svg";

export const PlayerCard = () => {
  return (
    <Box p={4} display="flex" justifyContent="center" cursor="pointer">
      <Box
        w="235px"
        h="320px"
        backgroundImage={`url(${PlayerBackgroundImage.src})`}
        backgroundSize="cover"
        position="relative"
        _hover={{ border: "1px solid #EC068D" }}
      >
        <Box
          position="absolute"
          right="12px"
          top="12px"
          filter="grayscale(100%)"
        >
          <CardSelectedIcon />
        </Box>
        <Image
          src={RivalZ.src}
          alt="RivalZ"
          position="absolute"
          top="50%"
          left="50%"
          transform="translate(-50%, -50%)"
          filter="grayscale(100%)"
        />
      </Box>
    </Box>
  );
};
