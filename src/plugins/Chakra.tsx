import {
  ChakraProvider,
  cookieStorageManagerSSR,
  localStorageManager,
} from "@chakra-ui/react";
import { NextPageContext } from "next";
import { PropsWithChildren } from "react";
import { theme } from "theme";

export function Chakra(
  props: PropsWithChildren<{
    cookies: string;
  }>
) {
  const { children, cookies } = props;

  const colorModeManager =
    typeof cookies === "string"
      ? cookieStorageManagerSSR(cookies)
      : localStorageManager;

  return (
    <ChakraProvider colorModeManager={colorModeManager} theme={theme}>
      {children}
    </ChakraProvider>
  );
}

export function getServerSideProps(context: NextPageContext) {
  const { req } = context;

  return {
    props: {
      cookies: req?.headers.cookie ?? "",
    },
  };
}
