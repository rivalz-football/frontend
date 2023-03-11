import { Box, Button, Flex, Text, Grid } from "@chakra-ui/react";
import { Corner } from "framework/GoalFlipClient";
import { PropsWithChildren, useState } from "react";

const corners = Object.values(Corner);
const readyBets = [0.1, 0.5, 1, 3];

type SelectCornerInputProps = {
  corner: Corner;
  setCorner: (corner: Corner) => void;
};

export const SelectCornerInput = (props: SelectCornerInputProps) => {
  const { corner, setCorner } = props;

  return (
    <Flex gap="10px">
      {corners.map((item, index) => (
        <BetButton
          key={index}
          onClick={() => setCorner(item)}
          value={item}
          isEnabled={corner === item}
          fontSize="19px"
        >
          {item} Corner
        </BetButton>
      ))}
    </Flex>
  );
};

type SelectBetInputProps = {
  bet: number;
  setBet: (bet: number) => void;
};

export const SelectBetInput = (props: SelectBetInputProps) => {
  const { bet, setBet } = props;

  return (
    <Flex gap="10px">
      {readyBets.map((value, index) => (
        <BetButton
          key={index}
          onClick={() => setBet(value)}
          value={value}
          isEnabled={bet === value}
          fontSize="16px"
        >
          {value}
        </BetButton>
      ))}
    </Flex>
  );
};

const BetButton = (
  props: PropsWithChildren<{
    isEnabled: boolean;
    value: string | number;
    onClick: (value: string | number) => void;
    fontSize?: string;
  }>
) => {
  const { children, isEnabled, value, onClick, ...others } = props;

  return (
    <Button
      padding="15px 20px"
      lineHeight="18px"
      fontFamily="Score Board"
      color={isEnabled ? "#EC068D" : "#FFFFFF"}
      background="rgba(0, 0, 0, 0.12)"
      borderRadius="4px"
      border={
        isEnabled
          ? "1px dashed #EC068D"
          : "1px dashed rgba(255, 255, 255, 0.07)"
      }
      textTransform={"uppercase"}
      width="100%"
      textAlign="center"
      transition="all 0.3s ease"
      onClick={() => onClick(value)}
      {...others}
    >
      {children}
    </Button>
  );
};
