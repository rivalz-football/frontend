import "assets/styles/style.scss";
import "swiper/css";
import "@solana/wallet-adapter-react-ui/styles.css";
import type { AppProps } from "next/app";

import { SidebarToggle } from "contexts/SidebarContext";
import { Chakra } from "plugins/Chakra";

import { QueryClient, QueryClientProvider } from "react-query";

import { UserAuthProvider } from "contexts/UserAuthContext";
import { useMemo } from "react";

import {
  ConnectionProvider,
  WalletProvider,
} from "@solana/wallet-adapter-react";
import { PhantomWalletAdapter } from "@solana/wallet-adapter-wallets";
import { WalletModalProvider } from "@solana/wallet-adapter-react-ui";
import { useCluster } from "hooks/useCluster";
import { Spin } from "components/common/Spinner";

const queryClient = new QueryClient();

export default function App(props: AppProps) {
  return (
    <QueryClientProvider client={queryClient}>
      <Inner {...props} />
    </QueryClientProvider>
  );
}

const Inner = ({ Component, pageProps }: AppProps) => {
  const { data: endpoint, isLoading } = useCluster();

  const wallets = useMemo(() => [new PhantomWalletAdapter()], []);

  if (isLoading) return <Spin />;

  return (
    <ConnectionProvider endpoint={endpoint}>
      <Chakra cookies={pageProps.cookies}>
        <WalletProvider wallets={wallets} autoConnect>
          <WalletModalProvider>
            <UserAuthProvider>
              <SidebarToggle>
                <Component {...pageProps} />
              </SidebarToggle>
            </UserAuthProvider>
          </WalletModalProvider>
        </WalletProvider>
      </Chakra>
    </ConnectionProvider>
  );
};

export { getServerSideProps } from "plugins/Chakra";
