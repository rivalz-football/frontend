import { Box, Card, CardBody, CardFooter, Image } from "@chakra-ui/react";
import { PlayerBackgroundImage } from "assets/images";
import { RivalZ } from "assets/images";
import CardSelectedIcon from "assets/icons/card-selected-icon.svg";

// cardatası
import { PlayerCardPropsType } from "assets/types";
import { useState } from "react";

export const PlayerCard = (props: PlayerCardPropsType) => {
  const [isSelect, setIsSelect] = useState(props.player.isSelect);

  const handleClick = () => {
    if (props.isSelectable) setIsSelect(!isSelect);
    if (!props.setcount || !props.count) return;
    if (isSelect) props.setcount(props.count - 1);
    else props.setcount(props.count + 1);
    console.log(props.count);
  };

  return (
    <Box
      p={4}
      display="flex"
      justifyContent="center"
      cursor="pointer"
      onClick={() => {
        console.log("click");
        handleClick();
      }}
    >
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
          filter={isSelect ? "none" : "grayscale(100%)"}
        >
          <CardSelectedIcon />
        </Box>
        <Image
          src={RivalZ.src}
          alt="cardlogo"
          position="absolute"
          top="50%"
          left="50%"
          transform="translate(-50%, -50%)"
          filter={isSelect ? "none" : "grayscale(100%)"}
        />
      </Box>
    </Box>
  );
};
