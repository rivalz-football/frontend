import { Box, Text } from "@chakra-ui/react";
import { AnimationProps } from "containers/GoalFlip";
import { useEffect, useState } from "react";
import Lottie from "react-lottie";

import goalAnimationJson from "assets/animations/goal.json";

export type GoalFlipAnimationProps = {
  animation: AnimationProps;
  setAnimation: (animation: AnimationProps) => void;
};

export const BotWinAnimation = (props: GoalFlipAnimationProps) => {
  const { animation, setAnimation } = props;

  return (
    <Lottie
      style={{
        position: "absolute",
        top: "0",
        transform: animation.isRight ? "scaleX(-1)" : "scaleX(1)",
      }}
      options={{
        animationData: animation.data,
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
            console.log("complete");
            setAnimation({ ...animation, isPlaying: false });
          },
        },
      ]}
    />
  );
};

enum Step {
  GOAL_KICK_ANIMATION = "GOAL_KICK_ANIMATION",
  GOAL_SCORED_ANIMATION = "GOAL_SCORED_ANIMATION",
  WIN_AMOUNT_ANIMATION = "WIN_AMOUNT_ANIMATION",
}

export const PlayerWinAnimation = (props: GoalFlipAnimationProps) => {
  const { animation, setAnimation } = props;
  const [currentStep, setCurrentStep] = useState(Step.GOAL_KICK_ANIMATION);

  const animationData =
    (currentStep === Step.GOAL_KICK_ANIMATION && animation.data) ||
    (currentStep === Step.GOAL_SCORED_ANIMATION && goalAnimationJson);

  useEffect(() => {
    if (currentStep === Step.WIN_AMOUNT_ANIMATION)
      setInterval(() => {
        setAnimation({ ...animation, isPlaying: false });
      }, 1000 * 5);
  }, [currentStep]);

  return (
    <>
      {animationData && (
        <Lottie
          style={{
            position: "absolute",
            top: "0",
            // transform: animation.isRight ? "scaleX(-1)" : "scaleX(1)",
          }}
          options={{
            animationData,
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
                if (currentStep === Step.GOAL_KICK_ANIMATION)
                  setCurrentStep(Step.GOAL_SCORED_ANIMATION);
                else if (currentStep === Step.GOAL_SCORED_ANIMATION) {
                  setCurrentStep(Step.WIN_AMOUNT_ANIMATION);
                }
              },
            },
          ]}
        />
      )}

      {currentStep === Step.WIN_AMOUNT_ANIMATION && (
        <Text
          position="absolute"
          margin="auto"
          top="100px"
          fontFamily="Score Board"
          fontSize="20px"
        >
          Helloooo
        </Text>
      )}
    </>
  );
};
