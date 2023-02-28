import { Box, Card, CardBody, CardFooter, Image } from "@chakra-ui/react";
import { PlayerCardPropsType } from "assets/types";
import CardItemProps from "assets/icons/card-active.svg";
export const PlayerCard = (props: PlayerCardPropsType) => {
  const { player } = props;
  return (
    <Card>
      <CardBody></CardBody>
      <CardFooter></CardFooter>
    </Card>
  );
};
