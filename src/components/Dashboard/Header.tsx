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
import { DownArrowIcon, GiftIcon, NotificationIcon } from "assets/icons";
import { SolanaImage } from "assets/images";
import { Notification } from "./Notification";
import { UserAvatar } from "./UserAvatar";
import { UserBalance } from "./UserBalance";

export const Header = () => {
  return (
    <Flex alignItems="center" gap="15px">
      <UserBalance image={SolanaImage.src} name="$SOL" balance={123} />
      <Notification count={4} countColor="#EC068D" icon={NotificationIcon} />
      <Notification count={4} countColor="#D95543" icon={GiftIcon} />
      <UserAvatar avatar="" />
    </Flex>
  );
};
