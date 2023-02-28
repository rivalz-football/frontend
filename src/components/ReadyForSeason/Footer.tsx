import { Box, Flex, Link, Text } from "@chakra-ui/react";

export const Footer = () => {
  return (
    <Flex
      position="fixed"
      bottom="30px"
      flex={1}
      color="white"
      width="100%"
      fontSize="15px"
      px={{ base: "0px", md: "50px" }}
    >
      <Box display="flex" width="100%">
        <Box display="flex">
          <Link marginRight="110px">Game Rules</Link>
          <Link marginRight="110px">Teams & Canditions</Link>
          <Link marginRight="110px">Privacy Policy</Link>
        </Box>
        <Text ml="auto">© 2023 RivalZ ~ Build with</Text>
        <Text
          marginLeft="10px"
          sx={{
            background: "linear-gradient(90deg,#833ab4,#fd1d1d 50%,#fcb045)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
          }}
        >
          Solana
        </Text>
      </Box>
    </Flex>
  );
};
