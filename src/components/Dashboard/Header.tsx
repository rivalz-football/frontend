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
import { useSidebar } from "contexts/SidebarContext";
import { useEffect, useState } from "react";
import { Notification } from "./Notification";
import { UserAvatar } from "./UserAvatar";
import { UserBalance } from "./UserBalance";
import { CgArrowsExchange } from "react-icons/cg";
import { CSSTransition } from "react-transition-group";
export const Header = () => {
  const { toggleSidebar } = useSidebar();
  const [isShaking, setIsShaking] = useState(false);

  const handleClick = () => {
    toggleSidebar();
    setIsShaking(true);
    setTimeout(() => {
      setIsShaking(false);
    }, 1000);
  };
  return (
    <>
      <CSSTransition in={isShaking} timeout={1000} classNames="shake">
        <CgArrowsExchange
          onClick={handleClick}
          style={{
            width: "35px",
            height: "35px",
            cursor: "pointer",
            background: "rgb(70, 65, 65)",
            borderRadius: "5px",
            padding: "5px",
            opacity: 0.8,
          }}
        />
      </CSSTransition>

      <Flex alignItems="center" gap="15px">
        <UserBalance image={SolanaImage.src} name="$SOL" balance={123} />
        <Notification count={4} countColor="#EC068D" icon={NotificationIcon} />
        <Notification count={4} countColor="#D95543" icon={GiftIcon} />
        <UserAvatar avatar="" />
      </Flex>
    </>
  );
};
