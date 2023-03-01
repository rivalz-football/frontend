import {
  Avatar,
  Box,
  DrawerCloseButton,
  Flex,
  HStack,
  Menu,
  MenuButton,
  MenuDivider,
  MenuItem,
  MenuList,
  StatDownArrow,
} from "@chakra-ui/react";
import {
  BuyIcon,
  DownArrowIcon,
  GiftIcon,
  NotificationIcon,
} from "assets/icons";
import { SolanaImage } from "assets/images";
import { useSidebar } from "contexts/SidebarContext";
import { useEffect } from "react";
import { Notification } from "./Notification";
import { UserAvatar } from "./UserAvatar";
import { UserBalance } from "./UserBalance";

export const Header = () => {
  const { toggleSidebar } = useSidebar();

  return (
    <>
      <BuyIcon onClick={toggleSidebar} />
      <Flex alignItems="center" gap="15px">
        <UserBalance image={SolanaImage.src} name="$SOL" balance={123} />
        <Notification count={4} countColor="#EC068D" icon={NotificationIcon} />
        <Notification count={4} countColor="#D95543" icon={GiftIcon} />
        <UserAvatar avatar="" />
      </Flex>
    </>
  );
};
