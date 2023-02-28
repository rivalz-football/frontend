import { Box, Flex, Link, Stack } from "@chakra-ui/react";
import { Logo } from "../common/Logo";

import { wizardForSeasonHeader } from "assets/data";

import NextLink from "next/link";

export const Header = () => {
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

      <DesktopNav />
    </Flex>
  );
};

const DesktopNav = () => {
  const linkColor = "white";
  const linkHoverColor = "purple.400";

  return (
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
  );
};
