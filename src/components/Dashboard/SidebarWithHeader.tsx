import React, { ReactElement, ReactNode, useEffect, useState } from "react";
import {
  IconButton,
  Avatar,
  Box,
  CloseButton,
  Flex,
  Drawer,
  DrawerContent,
  Text,
  useDisclosure,
  BoxProps,
  FlexProps,
  Divider,
  SlideFade,
} from "@chakra-ui/react";
import { SIDEBAR_WIDTH_FULL, SIDEBAR_WIDTH_SMALL } from "assets/data";

import NextLink from "next/link";
import { Logo } from "components/common/Logo";
import {
  BallIcon,
  BookmarkIcon,
  BuyIcon,
  CalendarIcon,
  CategoryIcon,
  ChartIcon,
  DocumentIcon,
  JackpotIcon,
} from "assets/icons";
import { Header } from "./Header";
import { useSidebar } from "contexts/SidebarContext";

interface SubMenuProps {
  name: string;
  icon: ReactElement;
  url: string;
}

interface MenuProps {
  name?: string;
  items: SubMenuProps[];
}

const menu: Array<MenuProps> = [
  {
    items: [
      { name: "Home", url: "/", icon: <CategoryIcon /> },
      { name: "My Team", url: "/", icon: <BookmarkIcon /> },
      { name: "Fixtures", url: "/", icon: <CalendarIcon /> },
      { name: "Transfer Market", url: "/", icon: <BuyIcon /> },
      { name: "Leaderboard", url: "/", icon: <DocumentIcon /> },
      { name: "Analysis", url: "/", icon: <ChartIcon /> },
    ],
  },
  {
    name: "Rivalz Originals",
    items: [
      { name: "Goal Flip", url: "/rivalz-originals", icon: <BallIcon /> },
      {
        name: "Corner Jackpo",
        url: "/rivalz-originals",
        icon: <JackpotIcon />,
      },
    ],
  },
];

export const HeaderWithSidebar = ({ children }: { children: ReactNode }) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const { menuWidth } = useSidebar();
  return (
    <Box bg="#0E0D10" maxHeight="100%" overflow="auto" height="100%">
      <SidebarContent
        onClose={() => onClose}
        display={{ base: "none", md: "block" }}
        transition="all 0.5s ease-in-out"
        w={{
          base: "full",
          md: menuWidth,
        }}
      />
      <Drawer
        autoFocus={false}
        isOpen={isOpen}
        placement="left"
        onClose={onClose}
        returnFocusOnClose={false}
        onOverlayClick={onClose}
        size="full"
      >
        <DrawerContent>
          <SidebarContent onClose={onClose} />
        </DrawerContent>
      </Drawer>
      {/* mobilenav */}
      <MobileNav onOpen={onOpen} />
      <Box
        ml={{ base: 0, md: `calc(${menuWidth})` }}
        p="4"
        background="#0E0D10"
        transition="all 0.5s ease-in-out"
      >
        {children}
      </Box>
    </Box>
  );
};

interface SidebarProps extends BoxProps {
  onClose: () => void;
}

const SidebarContent = ({ onClose, ...rest }: SidebarProps) => {
  const { isSidebarOpen } = useSidebar();
  return (
    <Box
      bg="rgba(11, 11, 11, 0.4)"
      boxShadow="0px 4px 4px rgba(0, 0, 0, 0.35)"
      borderRight="1px"
      borderRightColor="rgba(35, 35, 35, 0.25)"
      pos="fixed"
      height="100%"
      overflow="auto"
      padding="35px 0px"
      {...rest}
      zIndex="9"
    >
      <Flex
        h="20"
        alignItems="center"
        justifyContent="space-between"
        p="0 25px 60px 25px"
      >
        <NextLink href="/dashboard">
          <Logo isTextVisible={isSidebarOpen} />
        </NextLink>
        <CloseButton display={{ base: "flex", md: "none" }} onClick={onClose} />
      </Flex>
      <Box>
        {menu.map((menu, index) => (
          <MenuNavItem name={menu.name} items={menu.items} key={index} />
        ))}

        <Divider
          my="25px"
          background="linear-gradient(90deg, rgba(35, 35, 35, 0.85) 0%, rgba(35, 35, 35, 0) 100%)"
          width="70%"
        />
      </Box>
    </Box>
  );
};

const MenuNavItem = (props: MenuProps) => {
  const { name, items } = props;
  const { isSidebarOpen } = useSidebar();

  return (
    <Box>
      {name && (
        <Box
          background="linear-gradient(270deg, rgba(14, 13, 16, 0) 0%, #1E1C21 100%)"
          padding="15px 25px"
          my="20px"
        >
          <Text display={`${isSidebarOpen ? "block" : "none"}`}>{name}</Text>
        </Box>
      )}
      {items.map((child, index) => (
        <SubMenuNavItem
          key={index}
          icon={child.icon}
          name={child.name}
          url={child.url}
        />
      ))}
    </Box>
  );
};

const SubMenuNavItem = (props: SubMenuProps) => {
  const { name, icon, url } = props;
  const { isSidebarOpen } = useSidebar();

  return (
    <Flex
      alignItems="center"
      padding={`${isSidebarOpen ? "5px 25px" : "5px 5px"}`}
      justifyContent={`${isSidebarOpen ? "flex-start" : "center"}`}
      gap="25px"
      cursor="pointer"
      _hover={{
        background: "rgba(255, 255, 255, 0.05)",

        "p, svg": {
          color: "white",
          fill: "white",
        },
      }}
    >
      <IconButton
        variant="ghost"
        aria-label="icon"
        icon={icon}
        _hover={{
          background: "none",
        }}
      />
      <Text
        color="#90909C"
        fontSize="15px"
        display={`${isSidebarOpen ? "block" : "none"}`}
      >
        {name}
      </Text>
    </Flex>
  );
};

interface MobileProps extends FlexProps {
  onOpen: () => void;
}
const MobileNav = ({ onOpen, ...rest }: MobileProps) => {
  const { menuWidth } = useSidebar();

  return (
    <Flex
      ml={{ base: 0, md: menuWidth }}
      px={{ base: 5, md: 4 }}
      height="20"
      alignItems="center"
      gap="20px"
      justifyContent={{ base: "flex-start", md: "space-between" }}
      transition="all 0.5s ease-in-out"
      {...rest}
    >
      <Header />
    </Flex>
  );
};
