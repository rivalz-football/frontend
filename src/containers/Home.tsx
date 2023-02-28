import { ChooseCards } from "components/ReadyForSeason/ChooseCards";
import { ChoosePlayers } from "components/ReadyForSeason/ChoosePlayers";
import { Login } from "components/ReadyForSeason/Login";
import { WaitingRoom } from "components/ReadyForSeason/WaitingRoom";
import { BlankLayout } from "layouts/Blank";
import { ComponentType, useState } from "react";

export enum Step {
  LOGIN = "LOGIN",
  CHOOSE_CARDS = "CHOOSE_CARDS",
  CHOOSE_PLAYERS = "CHOOSE_PLAYERS",
  WAITING_ROOM = "WAITING_ROOM",
}

type ComponentForReady = {
  [key: string]: ComponentType<{ setStep: (step: Step) => void }>;
};

const componentsForReady: ComponentForReady = {
  [Step.LOGIN]: Login,
  [Step.CHOOSE_CARDS]: ChooseCards,
  [Step.CHOOSE_PLAYERS]: ChoosePlayers,
  [Step.WAITING_ROOM]: WaitingRoom,
};

export const HomeContainer = () => {
  const [step, setStep] = useState<Step>(Step.LOGIN);

  const CurrentComponent = componentsForReady[step];

  return (
    <BlankLayout>
      <CurrentComponent setStep={setStep} />
    </BlankLayout>
  );
};
