import {
  Box,
  Text,
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Image, 
  background,
} from "@chakra-ui/react";

import { StaticImageData } from "next/image";

import CardActive from "assets/icons/card-active.svg";

export type CardItemType = {
  card: {
    img: StaticImageData;
    name: string;
    isAvailable: boolean;
    amount: number;
  };
};

export const CardItem = (props: CardItemType) => {
  const { card } = props;

  return (
    <Card
      background={
        "linear-gradient(180deg, rgba(217, 217, 217, 0.34) 0%, rgba(217, 217, 217, 0) 100%)"
      }
      opacity={card.isAvailable ? "1" : "0.2"}
      filter={card.isAvailable ? "none" : "grayscale(50%)"}
      padding={"7px"}
      borderRadius={"0px"}

    >
      <CardBody padding={"0px"} position={"relative"}>
        <Image src={card.img.src} alt={"card image"}
       
        width={"221px"}
        />
         <Text background={"rgba(9, 9, 9, 0.55);"}
          border={"1px solid rgba(255, 255, 255, 0.02)"}
          position={"absolute"}
          bottom={"0px"}
          right={"0px"}
          display={"block"}
          padding={"1px 21px"}
          color={"#FFFFFF"}
          fontSize={"12px"}

          fontWeight={"600"}
          textTransform={"uppercase"}
         >you have {card.amount} </Text>
        {card.isAvailable && <Box position={"absolute"} right={"12px"} top={"12px"}><CardActive /></Box>}
      </CardBody>
      <CardFooter width={"100%"} padding={"15px 0 35px"}>
        <Text
         fontSize={"19px"}
          lineHeight={"23px"}
         fontWeight={"500"}
         textTransform={"uppercase"}
          color={"#FFFFFF"}
          textAlign={"center"}
          width={"100%"}
        >{card.name}</Text>
      </CardFooter>
    </Card>
  );
};
