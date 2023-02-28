import { Box, Flex, Link, Text } from "@chakra-ui/react";

export const Footer = () => {
  return (
    <Flex
      position="relative"
      color="white"
      width="calc(100vw - 60px)"
      fontSize="15px"
      px={{ base: "0px", md: "50px" }}
      direction={{
        base: "column",
        md: "row",
      }}
      gap={{
        base: "20px",
      }}
      justifyContent={{
        base: "center",
        md: "space-between",
      }}
      marginTop="20px"
    >
      <Flex
        direction={{
          base: "column",
          md: "row",
        }}
        gap={{
          base: "5px",
          md: "50px",
        }}
      >
        <Link>Game Rules</Link>
        <Link>Teams & Canditions</Link>
        <Link>Privacy Policy</Link>
      </Flex>
      <Flex position={{ base: "static", md: "absolute" }} right="30px">
        <Text fontSize="15px" display="block">
          © 2023 RivalZ ~ Build with&nbsp;
        </Text>
        <Text
          sx={{
            background: "linear-gradient(270deg, #F232A3 0%, #7F52FF 20.49%)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
          }}
          fontWeight="600"
          display="inline-block"
        >
          Solana
        </Text>
      </Flex>
    </Flex>
  );
};
