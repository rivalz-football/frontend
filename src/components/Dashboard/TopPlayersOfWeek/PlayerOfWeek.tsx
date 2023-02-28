import { Flex, Image, Text } from "@chakra-ui/react";
import { IPlayerOfWeek } from "assets/types";

type PlayerOfWeekProps = {
  isReverse?: boolean;
  player: IPlayerOfWeek;
};

export const PlayerOfWeek = (props: PlayerOfWeekProps) => {
  const { isReverse, player } = props;

  return (
    <Flex
      gap="30px"
      alignItems="center"
      flexDirection={isReverse ? "row-reverse" : "row"}
    >
      <Image src={player.image} />
      <Flex
        alignItems={isReverse ? "flex-end" : "flex-start"}
        justifyContent="center"
        direction="column"
        lineHeight="25px"
        letterSpacing="0.02em"
      >
        <Text fontSize="20px" fontWeight="700">
          {player.name}
        </Text>
        <Text fontSize="20px" fontWeight="400">
          {player.lastName}
        </Text>
        <Text
          display="flex"
          alignItems="center"
          fontSize="15px"
          gap="8px"
          marginTop="5px"
          flexDirection={isReverse ? "row-reverse" : "row"}
          _before={{
            content: '""',
            position: "relative",
            display: "block",
            width: "2px",
            background: isReverse ? "#3AB82C" : "#EC068D",
            height: "20px",
          }}
        >
          {player.position}
        </Text>
      </Flex>
      <Text fontSize="58px" letterSpacing="0.02em" fontWeight="500">
        {player.score}
      </Text>
    </Flex>
  );
};
