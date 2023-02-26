import { Button } from "@chakra-ui/react";
import { Step } from "containers/Home";

type LoginType = {
  setStep: (step: Step) => void;
};

export const Login = (props: LoginType) => {
  const { setStep } = props;

  return (
    <>
      <h3>This is login page</h3>
      <Button onClick={() => setStep(Step.CHOOSE_CARDS)}>Login</Button>
    </>
  );
};
