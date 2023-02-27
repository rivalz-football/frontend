import { Box, Button, Text } from "@chakra-ui/react";

const Slide1 = () => {
  return (
    <Box
      background={`linear-gradient(82.17deg, #0D0C11 5.36%, rgba(14, 12, 17, 0) 87.52%), url(https://i.imgur.com/gcfatGO.jpg)`}
      backgroundRepeat="no-repeat"
      backgroundSize="cover"
      width="100%"
      height="250px"
      display="flex"
      flexDirection="column"
      justifyContent="center"
      alignItems="flex-start"
      padding="0 45px"
    >
      <Text
        fontWeight="700"
        fontSize="35px"
        lineHeight="30px"
        textTransform="uppercase"
      >
        Rivalz Season 1
      </Text>
      <Text fontWeight="500" fontSize="16px" lineHeight="23px">
        Rivalz season 1 kicks off with the English Premier League.
      </Text>
      <Button
        marginTop="30px"
        background="rgba(236, 6, 141, 0.43)"
        border="1px solid rgba(255, 255, 255, 0.02)"
        borderRadius="4px"
        fontWeight="600"
        fontSize="15px"
        textTransform="uppercase"
        _hover={{
          background: "rgba(236, 6, 141, 0.43)",
        }}
      >
        Season Details
      </Button>
    </Box>
  );
};

const Slide2 = () => {
  return (
    <Box
      background={`linear-gradient(82.17deg, #0D0C11 5.36%, rgba(14, 12, 17, 0) 87.52%), url(https://i.imgur.com/gcfatGO.jpg)`}
      backgroundRepeat="no-repeat"
      backgroundSize="cover"
      width="100%"
      height="250px"
      display="flex"
      flexDirection="column"
      justifyContent="center"
      alignItems="flex-start"
      padding="0 45px"
    >
      <Text
        fontWeight="700"
        fontSize="35px"
        lineHeight="30px"
        textTransform="uppercase"
      >
        Rivalz Season 2
      </Text>
      <Text fontWeight="500" fontSize="16px" lineHeight="23px">
        Rivalz season 2 kicks off with the English Premier League.
      </Text>
      <Button
        marginTop="30px"
        background="rgba(236, 6, 141, 0.43)"
        border="1px solid rgba(255, 255, 255, 0.02)"
        borderRadius="4px"
        fontWeight="600"
        fontSize="15px"
        textTransform="uppercase"
        _hover={{
          background: "rgba(236, 6, 141, 0.43)",
        }}
      >
        Season Details
      </Button>
    </Box>
  );
};

export const slides = [Slide1, Slide2];
