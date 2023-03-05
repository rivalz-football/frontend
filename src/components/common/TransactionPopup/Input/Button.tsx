import { Button, Text } from "@chakra-ui/react";
import { ComponentType, ReactElement } from "react";

type TransactionButtonProps = {
  icon: ComponentType;
  label: string;
  onClick: () => void;
  isLoading: boolean;
  isDisabled: boolean;
};

export const TransactionButton = (props: TransactionButtonProps) => {
  const { icon, label, onClick, isLoading, isDisabled } = props;

  const Icon = icon;

  return (
    <Button
      gap="10px"
      background="rgba(0, 0, 0, 0.7)"
      border="1px solid rgba(255, 255, 255, 0.08)"
      borderRadius="5px"
      onClick={onClick}
      isLoading={isLoading}
      isDisabled={isDisabled}
      maxWidth="50%"
    >
      <span
        style={{
          width: "13px",
          height: "13px",
        }}
      >
        <Icon />
      </span>

      <Text
        fontSize="15px"
        fontWeight="600"
        letterSpacing="0.15em"
        textTransform="uppercase"
      >
        {label}
      </Text>
    </Button>
  );
};
