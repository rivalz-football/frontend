import { useToast } from "@chakra-ui/react";
import { useAnchorWallet, useWallet } from "@solana/wallet-adapter-react";

import { useAuthLogout, useAuthMe } from "hooks/useUser";
import { createLoginTx } from "plugins/createLogin";
import { useRouter } from "next/router";

import {
  createContext,
  PropsWithChildren,
  useContext,
  useEffect,
  useState,
} from "react";
import { useQueryClient } from "react-query";
import { IUser } from "assets/types";
import { LoginContainer } from "containers/Login";
import { Spin } from "components/common/Spinner";

interface UserAuthContextData {
  user: IUser | undefined;

  logout: () => Promise<void>;
}

const UserAuthContext = createContext<UserAuthContextData>(
  {} as UserAuthContextData
);

export const UserAuthProvider = (props: PropsWithChildren) => {
  const { children } = props;
  const router = useRouter();
  const wallet = useWallet();
  const anchorWallet = useAnchorWallet();
  const clientQuery = useQueryClient();
  const { isLoading: isUserLoading, data: user } = useAuthMe();
  const [loggedUser, setLoggedUser] = useState<IUser | undefined>(undefined);

  const logout = useAuthLogout();
  const toast = useToast();

  const { connected, disconnect, connecting } = wallet;

  useEffect(() => {
    (async () => {
      if (connecting || isUserLoading || logout.isLoading) return;

      if (connected && anchorWallet && !user) {
        try {
          await createLoginTx(wallet);
        } catch (error: any) {
          disconnect();
          toast({
            title: "Error",
            description:
              error?.response?.data?.message || "Something went wrong",
            status: "error",
            duration: 9000,
            isClosable: true,
          });
        }
        await clientQuery.fetchQuery("me");
      } else if (!connected && !anchorWallet && user) {
        await logout.mutateAsync();
      } else if (connected && anchorWallet && user) {
        if (anchorWallet.publicKey.toBase58() !== user.publicKey) {
          try {
            await logout.mutateAsync();
            await createLoginTx(wallet);
            await clientQuery.fetchQuery("me");
          } catch {
            disconnect();
          }
        }
      }

      setLoggedUser(user);
    })();
  }, [user, connected, disconnect, isUserLoading, anchorWallet, connecting]);

  const logoutUser = async () => {
    await disconnect();
    await logout.mutateAsync();
    router.push("/");
  };

  if (isUserLoading) return <Spin />;

  return (
    <UserAuthContext.Provider
      value={{
        user: loggedUser,
        logout: logoutUser,
      }}
    >
      {children}
    </UserAuthContext.Provider>
  );
};

export const useUserAuth = () => useContext(UserAuthContext);
