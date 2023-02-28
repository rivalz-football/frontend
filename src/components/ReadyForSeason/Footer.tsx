import { Box, Flex, Link, Text } from "@chakra-ui/react";

export const Footer = () => {
  return (
    <Flex
      position="absolute"
      bottom="30px"
      color="white"
      width="100%"
      fontSize="15px"
      px={{ base: "0px", md: "50px" }}
      direction={{
        base: "column",
        md: "row",
      }}
      gap={{
        base: "20px",
      }}
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
      <Box
        ml={{
          base: "0px",
          md: "auto",
        }}
      >
        <Text fontSize="15px" display="inline-block">
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
      </Box>
    </Flex>
  );
};
