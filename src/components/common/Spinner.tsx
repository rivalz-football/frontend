import { Box, Spinner } from "@chakra-ui/react";

export const Spin = () => {
  return (
    <Box
      display="flex"
      alignItems="center"
      justifyContent="center"
      height="100vh"
    >
      <Spinner color="white" height="25px" width="25px" />
    </Box>
  );
};
