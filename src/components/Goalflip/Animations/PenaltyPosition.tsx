import { Box, Flex } from "@chakra-ui/react";
import { GoalFlipAnimationProps } from "components/Goalflip/Animations";

import ballAnimation from "assets/animations/ball.json";
import goalKeeperAnimation from "assets/animations/goalkeeper.json";
import { AnimationProps } from "containers/GoalFlip";
import Lottie from "react-lottie";
import { Corner } from "framework/GoalFlipClient";

export const PenalyPosition = (props: GoalFlipAnimationProps) => {
  const { animation, setAnimation } = props;
  return (
    <Flex
      position="absolute"
      top="0"
      left="0"
      alignItems="center"
      justifyContent="center"
      width="100%"
    >
      <Flex
        position="relative"
        alignItems="center"
        justifyContent="center"
        width="100%"
      >
        <Lottie
          style={{
            position: "absolute",
            top: "0",

            transform:
              animation.ballPosition == Corner.Right
                ? "scaleX(-1)"
                : "scaleX(1)",
          }}
          options={{
            animationData: ballAnimation,
            loop: false,
          }}
          height="250px"
          width="250px"
          isStopped={!animation.isPlaying}
          isClickToPauseDisabled
          eventListeners={[
            {
              eventName: "complete",
              callback: () => {
                setAnimation({ ...animation, isPlaying: false });
              },
            },
          ]}
        />
        <Lottie
          style={{
            position: "absolute",
            top: "0",
            transform:
              animation.goalKeeperPosition == Corner.Right
                ? "scaleX(-1)"
                : "scaleX(1)",
          }}
          options={{
            animationData: goalKeeperAnimation,
            loop: false,
          }}
          height="250px"
          width="250px"
          isStopped={!animation.isPlaying}
          isClickToPauseDisabled
          eventListeners={[
            {
              eventName: "complete",
              callback: () => {
                setAnimation({ ...animation, isPlaying: false });
              },
            },
          ]}
        />
      </Flex>
    </Flex>
  );
};
