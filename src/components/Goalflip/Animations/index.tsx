import { Box, Text } from "@chakra-ui/react";
import { AnimationProps } from "containers/GoalFlip";
import { useEffect, useState } from "react";
import Lottie from "react-lottie";

import goalAnimationJson from "assets/animations/goal.json";
import kickAnimationJson from "assets/animations/first.json";

import ballAnimationJson from "assets/animations/ball.json";
import goalKeeperAnimationJson from "assets/animations/goalkeeper.json";
import { Corner } from "framework/GoalFlipClient";

export type GoalFlipAnimationProps = {
  animation: AnimationProps;
  setAnimation: (animation: AnimationProps) => void;
};

enum Step {
  GOAL_KICK_ANIMATION = "GOAL_KICK_ANIMATION",
  GOAL_SCORED_ANIMATION = "GOAL_SCORED_ANIMATION",
  WIN_AMOUNT_ANIMATION = "WIN_AMOUNT_ANIMATION",
}

export const BotWinAnimation = (props: GoalFlipAnimationProps) => {
  const { animation, setAnimation } = props;

  const [currentStep, setCurrentStep] = useState(Step.GOAL_KICK_ANIMATION);

  useEffect(() => {
    if (currentStep === Step.WIN_AMOUNT_ANIMATION)
      setTimeout(() => {
        setAnimation({ ...animation, isPlaying: false });
        setCurrentStep(Step.GOAL_KICK_ANIMATION);
      }, 1000 * 5);
  }, [currentStep]);

  return (
    <>
      {currentStep === Step.GOAL_KICK_ANIMATION && (
        <Lottie
          style={{
            position: "absolute",
            top: "0",
            transform:
              animation.goalKeeperPosition === Corner.Left
                ? "scaleX(-1)"
                : "scaleX(1)",
          }}
          options={{
            animationData: kickAnimationJson,
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
                setCurrentStep(Step.WIN_AMOUNT_ANIMATION);
              },
            },
          ]}
        />
      )}

      {currentStep === Step.WIN_AMOUNT_ANIMATION && (
        <ShowAmount amount={animation.amount} won={animation.won} />
      )}
    </>
  );
};

export const PlayerWinAnimation = (props: GoalFlipAnimationProps) => {
  const { animation, setAnimation } = props;
  const [currentStep, setCurrentStep] = useState(Step.GOAL_KICK_ANIMATION);

  useEffect(() => {
    if (currentStep === Step.WIN_AMOUNT_ANIMATION)
      setTimeout(() => {
        setAnimation({ ...animation, isPlaying: false });
        setCurrentStep(Step.GOAL_KICK_ANIMATION);
      }, 1000 * 5);
  }, [currentStep]);

  return (
    <>
      {currentStep === Step.GOAL_KICK_ANIMATION && (
        <>
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
              animationData: ballAnimationJson,
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
                  setCurrentStep(Step.GOAL_SCORED_ANIMATION);
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
                  ? "scaleX(1)"
                  : "scaleX(-1)",
            }}
            options={{
              animationData: goalKeeperAnimationJson,
              loop: false,
            }}
            height="250px"
            width="250px"
            isStopped={!animation.isPlaying}
            isClickToPauseDisabled
          />
        </>
      )}

      {currentStep === Step.GOAL_SCORED_ANIMATION && (
        <Lottie
          style={{
            position: "absolute",
            top: "0",
          }}
          options={{
            animationData: goalAnimationJson,
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
                setCurrentStep(Step.WIN_AMOUNT_ANIMATION);
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

type ShowAmountProps = {
  amount?: number;
  won?: boolean;
};
const ShowAmount = (props: ShowAmountProps) => {
  const { amount, won } = props;

  return (
    <Text
      position="absolute"
      margin="auto"
      top="100px"
      fontFamily="Score Board"
      fontSize="39px"
      letterSpacing="0.1em"
      color={won ? "#21CD44" : "#AA2D1C"}
    >
      {won ? `+${amount}` : `-${amount}`}
    </Text>
  );
};
