import { Box } from "@chakra-ui/react";
import Lottie from "react-lottie";
export type AnimationProps = {
  isPlaying: boolean;
  data: any;
};
export type GoalFlipAnimationProps = {
  animation: AnimationProps;
  setAnimation: (animation: AnimationProps) => void;
};

export const GoalFlipAnimation = (props: GoalFlipAnimationProps) => {
  const { animation, setAnimation } = props;

  return (
    <Box position="relative">
      <Lottie
        style={{
          position: "absolute",
          top: "-100px",
          transform: "scaleX(-1)",
        }}
        options={{
          animationData: animation.data[0],
          loop: false,
        }}
        isStopped={!animation.isPlaying}
        isClickToPauseDisabled
        eventListeners={[
          {
            eventName: "complete",
            callback: () => {
              console.log("complete");
              setAnimation({ isPlaying: false, data: animation.data[0] });
            },
          },
        ]}
      />
      <Lottie
        style={{
          position: "absolute",
          top: "-100px",
          transform: "scaleX(-1)",
        }}
        options={{
          animationData: animation.data[1],
          loop: false,
        }}
        isStopped={!animation.isPlaying}
        isClickToPauseDisabled
        eventListeners={[
          {
            eventName: "complete",
            callback: () => {
              console.log("complete");
              setAnimation({ isPlaying: false, data: animation.data[1] });
            },
          },
        ]}
      />
    </Box>
  );
};
