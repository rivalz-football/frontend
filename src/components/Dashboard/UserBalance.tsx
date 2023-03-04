import { Box, Flex, Image, Text } from "@chakra-ui/react";
import { numberFormat } from "plugins/number-format";

type BalanceProps = {
  balance: number;
  name: string;
  image: string;
};

export const UserBalance = (props: BalanceProps) => {
  const { balance, name, image } = props;

  return (
    <Flex
      alignItems="center"
      gap="10px"
      padding="10px 15px"
      background="rgba(217, 217, 217, 0.01)"
      border="1px solid rgba(255, 255, 255, 0.02)"
      borderRadius="4px"
    >
      <Image src={image} height="20px" />
      <Box fontSize="15px">
        <Text display="inline-block" fontWeight="bold">
          {numberFormat(balance)}&nbsp;
        </Text>
        <Text display="inline-block">{name}</Text>
      </Box>
    </Flex>
  );
};
