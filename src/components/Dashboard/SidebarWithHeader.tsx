import React, { ReactElement, ReactNode } from "react";
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
} from "@chakra-ui/react";
import { SIDEBAR_WIDTH } from "assets/data";

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

interface SubMenuProps {
  name: string;
  icon: ReactElement;
  url: string;
}

interface MenuProps {
  name?: string;
  children: SubMenuProps[];
}

interface BottomMenuProps {
  name: string;
}

const menu: Array<MenuProps> = [
  {
    children: [
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
    children: [
      { name: "Goal Flip", url: "/rivalz-originals", icon: <BallIcon /> },
      {
        name: "Corner Jackpo",
        url: "/rivalz-originals",
        icon: <JackpotIcon />,
      },
    ],
  },
];

const bottomMenu: BottomMenuProps[] = [
  {
    name: "Settings",
  },
  {
    name: "Referral System",
  },
  {
    name: "Help Center",
  },
  {
    name: "Support",
  },
  {
    name: "Logout",
  },
];

export const HeaderWithSidebar = ({ children }: { children: ReactNode }) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <Box bg="#0E0D10" maxHeight="100%" overflow="auto" height="100%">
      <SidebarContent
        onClose={() => onClose}
        display={{ base: "none", md: "block" }}
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
        ml={{ base: 0, md: `calc(${SIDEBAR_WIDTH})` }}
        p="4"
        background="#0E0D10"
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
  return (
    <Box
      bg="rgba(11, 11, 11, 0.4)"
      boxShadow="0px 4px 4px rgba(0, 0, 0, 0.35)"
      borderRight="1px"
      borderRightColor="rgba(35, 35, 35, 0.25)"
      w={{ base: "full", md: SIDEBAR_WIDTH }}
      pos="fixed"
      height="100%"
      overflow="auto"
      padding="35px 0px"
      {...rest}
    >
      <Flex
        h="20"
        alignItems="center"
        justifyContent="space-between"
        p="0 25px 35px 25px"
      >
        <NextLink href="/dashboard">
          <Logo />
        </NextLink>

        <CloseButton display={{ base: "flex", md: "none" }} onClick={onClose} />
      </Flex>
      <Box>
        {menu.map((menu, index) => (
          <MenuNavItem name={menu.name} children={menu.children} key={index} />
        ))}

        <Divider
          my="25px"
          background="linear-gradient(90deg, rgba(35, 35, 35, 0.85) 0%, rgba(35, 35, 35, 0) 100%)"
          width="70%"
        />
        <Flex direction="column" padding="0 25px" gap="10px">
          {bottomMenu.map((menu, index) => (
            <Text key={index} fontWeight="500" fontSize="14px" color="#90909C">
              {menu.name}
            </Text>
          ))}
        </Flex>
      </Box>
    </Box>
  );
};

const MenuNavItem = (props: MenuProps) => {
  const { name, children } = props;

  return (
    <Box>
      {name && (
        <Box
          background="linear-gradient(270deg, rgba(14, 13, 16, 0) 0%, #1E1C21 100%)"
          padding="15px 25px"
          my="20px"
        >
          <Text>{name}</Text>
        </Box>
      )}
      {children.map((child, index) => (
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

  return (
    <Flex
      alignItems="center"
      padding="5px 25px"
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
        // sx={{
        //   svg: {
        //     fill: "white",
        //     color: "white",
        //   },
        // }}
      />
      <Text color="#90909C" fontSize="15px">
        {name}
      </Text>
    </Flex>
  );
};

interface MobileProps extends FlexProps {
  onOpen: () => void;
}
const MobileNav = ({ onOpen, ...rest }: MobileProps) => {
  return (
    <Flex
      ml={{ base: 0, md: SIDEBAR_WIDTH }}
      px={{ base: 5, md: 4 }}
      height="20"
      alignItems="center"
      gap="20px"
      justifyContent={{ base: "flex-start", md: "flex-end" }}
      {...rest}
    >
      <Header />
    </Flex>
  );
};
