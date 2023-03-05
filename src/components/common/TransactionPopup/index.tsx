import {
  Box,
  Button,
  Flex,
  Input,
  Link,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  Text,
} from "@chakra-ui/react";
import { IToken, IUserToken } from "assets/types";
import { useUserAuth } from "contexts/UserAuthContext";
import { FiTwitter } from "react-icons/fi";
import { TransactionHistory } from "./History";
import { TransactionInput } from "./Input";

type TransactionPopupProps = {
  isOpen: boolean;
  onClose: () => void;
  token: IUserToken;
};

export const TransactionPopup = (props: TransactionPopupProps) => {
  const { isOpen, onClose, token } = props;

  return (
    <Modal isOpen={isOpen} onClose={onClose} isCentered>
      <ModalOverlay background="rgba(30, 30, 30, 0.9)" />
      <ModalContent
        background="#161616"
        boxShadow="none"
        padding="15px"
        borderRadius="15px"
        maxWidth={{
          base: "100%",
          md: "500px",
        }}
      >
        {/* <ModalHeader  /> */}
        <ModalCloseButton
          background="#272B30"
          width="36px"
          height="36px"
          borderRadius="50%"
          right="-10px"
          top="-10px"
        />

        <ModalBody
          display="flex"
          flexDirection="column"
          justifyContent="center"
        >
          <TransactionInput token={token} />
          <TransactionHistory />
        </ModalBody>

        <ModalFooter></ModalFooter>
      </ModalContent>
    </Modal>
  );
};
