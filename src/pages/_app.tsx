import "assets/styles/style.scss";
import "swiper/css";
import type { AppProps } from "next/app";

import { SidebarToggle } from "contexts/useSidebarToggle";
import { Chakra } from "plugins/Chakra";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <Chakra cookies={pageProps.cookies}>
      <SidebarToggle>
        <Component {...pageProps} />
      </SidebarToggle>
    </Chakra>
  );
}

export { getServerSideProps } from "plugins/Chakra";
