import {
  Box,
  Button,
  Flex,
  InputGroup,
  InputRightAddon,
  NumberInput,
  NumberInputField,
  Text,
  useToast,
} from "@chakra-ui/react";
import { useAnchorWallet, useWallet } from "@solana/wallet-adapter-react";
import { SOL_MINT_ADDRESS } from "assets/data";
import { GreenUpArrowIcon, RedDownArrowIcon } from "assets/icons";
import { TransactionBackgroundImage } from "assets/images";
import { IToken, IUserToken, TransactionType } from "assets/types";
import { createDepositTx } from "plugins/createDepositTx";
import { createWithdrawTx } from "plugins/createWithdrawTx";
import { numberFormat } from "plugins/number-format";
import { useState } from "react";
import { useQueryClient } from "react-query";
import { TransactionButton } from "./Button";

type TransactionInputProps = {
  token: IUserToken;
};

export const TransactionInput = (props: TransactionInputProps) => {
  const { token } = props;
  const wallet = useAnchorWallet();
  const [amount, setAmount] = useState("");
  const [isDepositLoading, setIsDepositLoading] = useState(false);
  const [isWithdrawLoading, setIsWithdrawLoading] = useState(false);
  const toast = useToast();
  const queryClient = useQueryClient();

  const onSubmit = async (type: TransactionType) => {
    if (!wallet) return;

    try {
      if (type === TransactionType.DEPOSIT) {
        setIsDepositLoading(true);
        await createDepositTx(
          wallet,
          token.information.mintAddress,
          Number(amount)
        );
      } else {
        setIsWithdrawLoading(true);
        await createWithdrawTx(
          wallet,
          token.information.mintAddress,
          Number(amount)
        );
      }

      toast({
        title: "Success",
        description: "Transaction has been submitted",
        status: "success",
        duration: 5000,
        isClosable: true,
      });

      queryClient.invalidateQueries("meTokens");
      queryClient.invalidateQueries("meTransactions");
      setAmount("");
    } catch (error: any) {
      toast({
        title: "Error",
        description: error?.response?.data?.message || error.message,
        status: "error",
        duration: 5000,
        isClosable: true,
      });
    } finally {
      setIsDepositLoading(false);
      setIsWithdrawLoading(false);
    }
  };

  return (
    <Flex
      alignItems="center"
      flexDirection="column"
      justifyContent="center"
      padding="20px 50px"
      border="1px solid #19181B"
      borderRadius="15px"
      position="relative"
      _after={{
        content: '""',
        position: "absolute",
        height: "100%",
        width: "100%",
        top: "0",
        left: "0",
        background: `url(${TransactionBackgroundImage.src}), #0A0A0B`,
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
        backgroundSize: "cover",
        zIndex: "-1",
        borderRadius: "15px",
      }}
    >
      <Text fontSize="15px" letterSpacing="0.15em" textTransform="uppercase">
        Your{" "}
        <Text as="span" fontWeight="700">
          Rivalz
        </Text>{" "}
        Balance
      </Text>

      <Text fontSize="35px" fontWeight="700" textTransform="uppercase">
        {numberFormat(token.balance)}{" "}
        <Text
          as="span"
          sx={{
            background: "linear-gradient(270deg, #F232A3 0%, #7F52FF 50.49%)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
          }}
        >
          {token.information.symbol}
        </Text>
      </Text>
      <InputGroup
        background="#0E0E0E"
        width="100%"
        my="15px"
        border="1px solid rgba(255, 255, 255, 0.08)"
        height="40px"
        boxShadow="inset 0px 4px 4px rgba(0, 0, 0, 0.25)"
        borderRadius="5px"
      >
        <NumberInput
          placeholder="mysite"
          borderColor="transparent"
          background="#0E0E0E"
          width="100%"
          value={amount}
          onChange={(value) => setAmount(value)}
          defaultValue={0.1}
          step={0.1}
        >
          <NumberInputField borderRadius="5px" />
        </NumberInput>

        <Button
          marginLeft="auto"
          background="linear-gradient(180deg, rgba(49, 144, 68, 0.27) 0%, rgba(49, 144, 68, 0.04) 100%)"
          borderRadius="0px"
          fontWeight="700"
          fontSize="11px"
          textTransform="uppercase"
          padding="0 20px"
          _hover={{
            background:
              "linear-gradient(180deg, rgba(49, 144, 68, 0.27) 0%, rgba(49, 144, 68, 0.14) 100%)",
          }}
        >
          Max
        </Button>
      </InputGroup>
      <Flex gap="15px">
        <TransactionButton
          icon={RedDownArrowIcon}
          label="Deposit"
          onClick={() => onSubmit(TransactionType.DEPOSIT)}
          isLoading={isDepositLoading}
        />
        <TransactionButton
          icon={GreenUpArrowIcon}
          label="Withdraw"
          onClick={() => onSubmit(TransactionType.WITHDRAW)}
          isLoading={isWithdrawLoading}
        />
      </Flex>
    </Flex>
  );
};
