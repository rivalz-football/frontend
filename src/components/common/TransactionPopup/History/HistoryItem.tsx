import { Box, Flex, Text, Image, Link } from "@chakra-ui/react";
import { GreenUpArrowIcon, RedDownArrowIcon } from "assets/icons";
import { SolscanImage } from "assets/images";
import { ITransaction, TransactionStatus, TransactionType } from "assets/types";

type TransactionHistoryItemProps = {
  transaction: ITransaction;
};

export const TransactionHistoryItem = (props: TransactionHistoryItemProps) => {
  const { transaction } = props;

  return (
    <Box
      background="rgba(9, 9, 11, 0.15)"
      padding="20px 25px"
      border="1px solid #19181B"
      borderRadius="5px"
    >
      <Flex alignItems="center" gap="20px">
        <span
          style={{
            width: "13px",
            height: "13px",
          }}
        >
          {transaction.type === TransactionType.DEPOSIT ? (
            <RedDownArrowIcon />
          ) : (
            <GreenUpArrowIcon />
          )}
        </span>
        <Text fontSize="14px" fontWeight="500" letterSpacing="0.05em">
          <Text as="span" fontWeight="700" fontSize="15px">
            {transaction.amount} SOL
          </Text>
          &nbsp;
          <Text
            as="span"
            display="inline-block"
            color={
              transaction.status === TransactionStatus.CONFIRMED
                ? "green.500"
                : "red.500"
            }
          >
            {transaction.type}
          </Text>
        </Text>
        <Text marginLeft="auto">
          {new Date(transaction.createdAt).toLocaleDateString("en-US", {
            month: "short",
            day: "numeric",
            year: "numeric",
          })}
        </Text>
        <Link
          isExternal
          href={`https://solscan.io/tx/${transaction.signature}`}
        >
          <Image
            src={SolscanImage.src}
            width="15px"
            height="15px"
            opacity="0.6"
            mixBlendMode="luminosity"
          />
        </Link>
      </Flex>
    </Box>
  );
};
