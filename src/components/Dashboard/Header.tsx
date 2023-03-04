import {
  Avatar,
  Box,
  Button,
  DrawerCloseButton,
  Flex,
  HStack,
  Menu,
  MenuButton,
  MenuDivider,
  MenuItem,
  MenuList,
  StatDownArrow,
  useDisclosure,
  useToken,
} from "@chakra-ui/react";
import { DownArrowIcon, GiftIcon, NotificationIcon } from "assets/icons";
import { SolanaImage } from "assets/images";
import { useSidebar } from "contexts/SidebarContext";
import { useEffect } from "react";
import { Notification } from "./Notification";
import { UserAvatar } from "./UserAvatar";
import { UserBalance } from "./UserBalance";
import { CgArrowsExchange } from "react-icons/cg";
import { TransactionPopup } from "components/common/TransactionPopup";
import { useTokens } from "hooks/useToken";
import { IToken, IUserToken } from "assets/types";
import { useMeTokens } from "hooks/useUser";
import { SOL_MINT_ADDRESS } from "assets/data";

export const Header = () => {
  const { toggleSidebar } = useSidebar();
  const { isOpen, onClose, onOpen } = useDisclosure();
  const { data: token, isLoading } = useMeTokens(SOL_MINT_ADDRESS);

  return (
    <>
      <CgArrowsExchange
        onClick={toggleSidebar}
        style={{ width: "30px", height: "30px" }}
      />
      <Flex alignItems="center" gap="15px">
        <Button
          background="rgba(217, 217, 217, 0.01)"
          border="1px solid rgba(255, 255, 255, 0.02)"
          borderRadius="4px"
          fontWeight="600"
          fontSize="15px"
          textTransform="uppercase"
          onClick={onOpen}
        >
          Withdraw
        </Button>
        {!isLoading && (
          <UserBalance
            image={token.information.image}
            name={token.information.symbol}
            balance={token.balance}
          />
        )}
        <Notification count={4} countColor="#EC068D" icon={NotificationIcon} />
        <Notification count={4} countColor="#D95543" icon={GiftIcon} />
        <UserAvatar avatar="" />
      </Flex>
      <TransactionPopup isOpen={isOpen} onClose={onClose} token={token} />
    </>
  );
};
