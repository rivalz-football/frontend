import { Box, Image, Text } from "@chakra-ui/react";
import { PlayerBackgroundImage } from "assets/images";
import { LogoImage } from "assets/images";
import CardSelectedIcon from "assets/icons/card-selected-icon.svg";

import { IPlayer } from "assets/types";
import { useState } from "react";
import { Motion, spring } from "react-motion";

type PlayerCardProps = {
  player: IPlayer;
  selected: boolean;
  onClick?: () => void;
};

export const PlayerCard = (props: PlayerCardProps) => {
  const { player, selected, onClick } = props;

  return (
    <Box
      p={4}
      display="flex"
      justifyContent="center"
      cursor="pointer"
      onClick={onClick}
      backgroundImage={`url(${PlayerBackgroundImage.src})`}
      height="320px"
      backgroundSize="cover"
      position="relative"
      _hover={{ border: "1px solid #EC068D" }}
      transition="all 0.3s ease-in-out"
    >
      <Box
        position="absolute"
        right="12px"
        top="12px"
        filter={selected ? "none" : "grayscale(100%)"}
      >
        <CardSelectedIcon />
      </Box>
      <Image
        src={LogoImage.src}
        alt="cardlogo"
        width="60px"
        height="70px"
        position="absolute"
        top="50%"
        left="50%"
        transform="translate(-50%, -50%)"
        filter={selected ? "none" : "grayscale(100%)"}
      />
      <Box
        display="flex"
        flexDirection="column"
        justifyContent="flex-end"
        alignItems="center"
        gap="5px"
        padding="20px"
      >
        {player?.shortPosition && (
          <Text
            position="absolute"
            bottom="20%"
            left="50%"
            transform="translate(-50%, -50%)"
            color="gray.100"
            filter={selected ? "none" : "grayscale(100%)"}
            fontSize="15px"
          >
            {player.shortPosition}
          </Text>
        )}

        <Text opacity={0.4} letterSpacing="2px">
          #{player.key}
        </Text>
      </Box>
    </Box>
  );
};
