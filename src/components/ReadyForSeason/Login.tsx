import { Button, Stack, Image, Text, Flex, Box } from "@chakra-ui/react";
import { Step } from "containers/Home";
import { LoginBackgroundImage, LoginImage } from "assets/images";
import { FOOTER_HEIGHT, HEADER_HEIGHT } from "assets/data";
import { WalletMultiButton } from "@solana/wallet-adapter-react-ui";

export const Login = () => {
  return (
    <Flex
      direction="column"
      justifyContent="center"
      alignItems="center"
      gap="35px"
      height={`calc(100vh - (${HEADER_HEIGHT} + ${FOOTER_HEIGHT} + 150px))`}
    >
      <Image src={LoginImage.src} alt="login-image" />
      <Text fontSize="18px">
        Build your team, make transfers and earn points based on your
        players&apos; real-life performances
      </Text>

      <WalletMultiButton
        style={{
          background: "rgba(76, 68, 198, 0.3)",
          borderRadius: "4px",
          height: "45px",
          alignItems: "center",
          fontWeight: "600",
          padding: "0 40px",
          textTransform: "uppercase",
        }}
      />

      <Image
        src={LoginBackgroundImage.src}
        position="absolute"
        zIndex="-1"
        top="0"
        backgroundSize="cover"
        opacity="0.4"
        mixBlendMode="overlay"
        height="100%"
        width="100%"
        backgroundPosition="center"
      />
    </Flex>
  );
};
