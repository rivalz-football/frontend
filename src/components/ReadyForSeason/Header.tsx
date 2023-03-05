import {
  Avatar,
  Box,
  Button,
  Flex,
  HStack,
  Link,
  Menu,
  MenuButton,
  MenuDivider,
  MenuItem,
  MenuList,
  Stack,
  Text,
  VStack,
} from "@chakra-ui/react";
import { Logo } from "../common/Logo";

import { wizardForSeasonHeader } from "assets/data";

import NextLink from "next/link";
import { useUserAuth } from "contexts/UserAuthContext";
import { ArrowBackIcon, ArrowLeftIcon } from "@chakra-ui/icons";
import { IUser } from "assets/types";
import { useWallet } from "@solana/wallet-adapter-react";

export const Header = () => {
  const { user, logout } = useUserAuth();

  return user ? (
    <LoggedUserHeader user={user} logout={logout} />
  ) : (
    <DefaultHeader />
  );
};

const DefaultHeader = () => {
  const linkColor = "white";
  const linkHoverColor = "purple.400";

  return (
    <Flex
      color="white"
      align={"center"}
      gap={{
        base: "0px",
        md: "200px",
      }}
      width="100%"
      justifyContent="center"
    >
      <Logo />
      <Stack
        direction="row"
        width="100%"
        gap="50px"
        display={{
          base: "none",
          md: "flex",
        }}
      >
        {wizardForSeasonHeader.map((navItem, index) => (
          <Link
            p={2}
            as={NextLink}
            href={navItem.href}
            color={linkColor}
            _hover={{
              textDecoration: "none",
              color: linkHoverColor,
            }}
            key={index}
          >
            {navItem.label}
          </Link>
        ))}
      </Stack>
    </Flex>
  );
};

type LoggerUserHeaderProps = {
  user: IUser;
  logout: () => void;
};

const LoggedUserHeader = (props: LoggerUserHeaderProps) => {
  const { user, logout } = props;
  const { wallet } = useWallet();

  const { status } = useUserAuth();
  const walletIcon = wallet?.adapter.icon as string;

  return (
    <Flex alignItems="center" justifyContent="space-between">
      <Button
        display="flex"
        alignItems="center"
        gap="20px"
        height="auto"
        padding="15px 30px"
        border="1px solid rgba(255, 255, 255, 0.02)"
        background="rgba(217, 217, 217, 0.07)"
      >
        <ArrowBackIcon boxSize="20px" />
        <Text textTransform="uppercase">Back To Home</Text>
      </Button>

      <Flex alignItems="center" gap="10px">
        {!!status?.maxSelectablePlayersCount && (
          <Flex gap="10px" alignItems="center">
            <Text
              color="#F4F4F4"
              fontSize="15px"
              fontWeight="600"
              textTransform="uppercase"
            >
              Your Right
            </Text>
            <Box padding="7px 14px" background="rgba(236, 6, 141, 0.65)">
              <Text fontSize="20px" fontWeight="700">
                {status.maxSelectablePlayersCount}
              </Text>
            </Box>
          </Flex>
        )}

        <Menu>
          <MenuButton
            transition="all 0.3s"
            _focus={{ boxShadow: "none" }}
            background="rgba(217, 217, 217, 0.07)"
            border="1px solid rgba(255, 255, 255, 0.02)"
            borderRadius="3px"
            padding="10px 20px"
          >
            <HStack>
              <Avatar
                height="25px"
                width="25px"
                src={walletIcon}
                mixBlendMode="luminosity"
              />
              <VStack
                display="flex"
                alignItems="flex-start"
                spacing="1px"
                padding="0px 15px"
              >
                <Text>{user.sanitizePublicKey}</Text>
              </VStack>
            </HStack>
          </MenuButton>
          <MenuList
            bg="rgba(217, 217, 217, 0.07)"
            borderColor="#272B30"
            padding="12px 16px 20px"
            borderRadius="6px"
          >
            <MenuDivider />
            <MenuItem
              background="transparent"
              fontSize="15px"
              fontWeight="600"
              onClick={logout}
            >
              Logout
            </MenuItem>
          </MenuList>
        </Menu>
      </Flex>
    </Flex>
  );
};
