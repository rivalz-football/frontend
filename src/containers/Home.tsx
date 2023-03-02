import { PlayerPosition } from "assets/types";
import { ChooseCards } from "components/ReadyForSeason/ChooseCards";
import { ChoosePlayers } from "components/ReadyForSeason/ChoosePlayers";
import { WaitingRoom } from "components/ReadyForSeason/WaitingRoom";
import { useUserAuth } from "contexts/UserAuthContext";
import { BlankLayout } from "layouts/Blank";
import { ComponentType, useEffect, useState } from "react";

export enum Step {
  CHOOSE_CARDS = "CHOOSE_CARDS",
  CHOOSE_PLAYERS = "CHOOSE_PLAYERS",
  WAITING_ROOM = "WAITING_ROOM",
}

type ComponentForReady = {
  [key: string]: ComponentType<{ setStep: (step: Step) => void }>;
};

const componentsForReady: ComponentForReady = {
  [Step.CHOOSE_CARDS]: ChooseCards,
  [Step.CHOOSE_PLAYERS]: ChoosePlayers,
  [Step.WAITING_ROOM]: WaitingRoom,
};

export const HomeContainer = () => {
  const { status } = useUserAuth();
  const [step, setStep] = useState<Step>(Step.CHOOSE_CARDS);

  const CurrentComponent = componentsForReady[step];

  useEffect(() => {
    const completedChoosePlayers = Object.keys(
      status?.playersConfig || {}
    ).every(
      (key) => status?.playersConfig?.[key as PlayerPosition].isSelectCompleted
    );

    if (completedChoosePlayers) return setStep(Step.WAITING_ROOM);
    if (status?.isStaked) return setStep(Step.CHOOSE_PLAYERS);
  }, [status]);

  return (
    <BlankLayout>
      <CurrentComponent setStep={setStep} />
    </BlankLayout>
  );
};
