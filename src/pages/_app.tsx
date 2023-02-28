import "assets/styles/style.scss";
import "swiper/css";
import type { AppProps } from "next/app";
import { ChakraProvider } from "@chakra-ui/react";
import { theme } from "theme";
import { SidebarToggle } from "contexts/useSidebarToggle";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider theme={theme}>
      <SidebarToggle>
        <Component {...pageProps} />
      </SidebarToggle>
    </ChakraProvider>
  );
}
