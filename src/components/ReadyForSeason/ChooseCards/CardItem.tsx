import { Box, Text, Card, CardBody, CardFooter, Image } from "@chakra-ui/react";

import CardItemProps from "assets/icons/card-active.svg";

import { IChooseCard } from "assets/types";

type CardItemPropsType = {
  card: IChooseCard;
};

export const CardItem = (props: CardItemPropsType) => {
  const { card } = props;

  return (
    <Card
      background="linear-gradient(180deg, rgba(217, 217, 217, 0.34) 0%, rgba(217, 217, 217, 0) 100%)"
      opacity={card.isAvailable ? "1" : "0.2"}
      filter={card.isAvailable ? "none" : "grayscale(50%)"}
      padding="7px"
      borderRadius="0px"
      cursor="pointer"
      userSelect="none"
    >
      <CardBody padding="0px" position="relative">
        <Image
          src={card.image.src}
          alt="card image"
          width="100%"
          backgroundSize="cover"
        />

        {card.isAvailable && (
          <>
            <Text
              background="rgba(9, 9, 9, 0.55)"
              border="1px solid rgba(255, 255, 255, 0.02)"
              position="absolute"
              bottom="0px"
              right="0px"
              display="block"
              padding="5px 20px"
              color="#FFFFFF"
              fontSize="12px"
              fontWeight="600"
              textTransform="uppercase"
            >
              you have {card.count}
            </Text>
            <Box
              position={"absolute"}
              right={"12px"}
              top={"12px"}
              backgroundColor="blue"
            >
              <CardItemProps />
            </Box>
          </>
        )}
      </CardBody>
      <CardFooter width="100%" padding="15px 0 35px">
        <Text
          fontSize="19px"
          fontWeight="500"
          textTransform="uppercase"
          color="#FFFFFF"
          margin="auto"
        >
          {card.name}
        </Text>
      </CardFooter>
    </Card>
  );
};
