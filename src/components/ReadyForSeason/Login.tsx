import { Button, Stack, Image, Text, Flex } from "@chakra-ui/react";
import { Step } from "containers/Home";
import { FirstPageBanner } from "assets/images";

type LoginType = {
  setStep: (step: Step) => void;
};

export const Login = (props: LoginType) => {
  const { setStep } = props;

  return (
    <>
      <Stack
        justifyContent={"center"}
        alignItems={"center"}
        h="80vh"
        spacing={8}
      >
        <Image
          src={FirstPageBanner.src}
          alt="first-banner"
          width={{ base: "100%", sm: "410px" }}
        />
        <Text
          fontSize="23px"
          lineHeight="23px"
          marginTop="34px"
          marginBottom="50px"
        >
          Build your team, make transfers and earn points based on your players'
          real-life performances
        </Text>
        ,
        <Button
          backgroundColor="rgba(76, 68, 198, 0.3);"
          borderRadius="4px"
          fontSize="19px"
          padding={["0px 20px", "0px 30px", "0px 50px", "0px 60px"]}
          height="50px"
          alignItems="center"
          onClick={() => setStep(Step.CHOOSE_CARDS)}
        >
          <Text>CONNECT WALLET</Text>
        </Button>
      </Stack>
    </>
  );
};
