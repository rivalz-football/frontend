import {
  createContext,
  PropsWithChildren,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
} from "react";
import { useAnchorWallet, useConnection } from "@solana/wallet-adapter-react";
import { Keypair, PublicKey, Transaction } from "@solana/web3.js";
import { idl } from "plugins/idl";
import { AnchorProvider, Program, Wallet } from "@project-serum/anchor";
import { useQueryClient } from "react-query";
import { GoalFlip } from "plugins/GoalFlip";
import { useProgramInfo } from "hooks/useProgramInfo";
import { GoalFlipClient } from "./GoalFlipClient";

type IProgramInfo = {
  programAddress: string;
  footballAccountAddress: string;
  adminAccountAddress: string;
};

type GoalFlipContextType = {
  client?: GoalFlipClient;
  programInformation?: IProgramInfo;
};

const GoalFlipContext = createContext<GoalFlipContextType>({});

export const GoalFlipContextProvider = (props: PropsWithChildren<{}>) => {
  const { children } = props;

  const { connection } = useConnection();
  const anchorWallet = useAnchorWallet();

  const { data: programInfo } = useProgramInfo();

  const [programIdKey, setProgramIdKey] = useState<PublicKey>();

  useEffect(() => {
    if (
      programInfo &&
      programInfo.programAddress !== programIdKey?.toString()
    ) {
      setProgramIdKey(new PublicKey(programInfo.programAddress));
    }
  }, [programInfo, programIdKey]);

  const goalFlipClient = useMemo(() => {
    if (!programIdKey) return undefined;

    const wallet = anchorWallet;
    const provider = new AnchorProvider(
      connection,
      wallet || {
        signTransaction: async (): Promise<Transaction> => {
          return new Transaction();
        },
        signAllTransactions: async (): Promise<Transaction[]> => {
          return [];
        },
        publicKey: Keypair.generate().publicKey,
      },
      {
        commitment: "confirmed",
      }
    );

    const program = new Program(
      idl,
      programIdKey,
      provider
    ) as unknown as Program<GoalFlip>;

    return new GoalFlipClient(program);
  }, [anchorWallet, connection, programIdKey]);

  return (
    <GoalFlipContext.Provider
      value={{ client: goalFlipClient, programInformation: programInfo }}
    >
      {children}
    </GoalFlipContext.Provider>
  );
};

export const useGoalFlipClient = () => {
  return useContext(GoalFlipContext);
};
