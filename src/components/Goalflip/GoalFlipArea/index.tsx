import { Button, Flex, Text } from "@chakra-ui/react";
import { FootballAreaBg } from "assets/images";
import { Area } from "./Area";
import { PenaltyBallIcon, PenaltyStartingPointIcon } from "assets/icons";
import Lottie from "react-lottie";
import { AnimationProps } from "containers/GoalFlip";
import { BotWinAnimation, PlayerWinAnimation } from "../Animations";

type GoalFlipAreaProps = {
  animation: AnimationProps;
  setAnimation: (animation: AnimationProps) => void;
};

export const GoalFlipArea = (props: GoalFlipAreaProps) => {
  const { animation, setAnimation } = props;

  return (
    <Flex
      maxHeight="642px"
      direction="column"
      justifyContent="center"
      alignItems="center"
      position="relative"
      background={`url(${FootballAreaBg.src})`}
      backgroundSize="cover"
      width="100%"
    >
      <Area />

      {!animation.isPlaying && (
        <>
          <PenaltyStartingPointIcon
            style={{
              position: "absolute",
              bottom: "30px",
            }}
          />
          <PenaltyBallIcon
            style={{
              position: "absolute",
              bottom: "33px",
            }}
          />
        </>
      )}

      {animation.isPlaying && (
        <PlayerWinAnimation animation={animation} setAnimation={setAnimation} />
      )}
    </Flex>
  );
};
