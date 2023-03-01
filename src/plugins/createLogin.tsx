import { WalletContextState } from "@solana/wallet-adapter-react";
import axios from "plugins/axios";
import { encode } from "bs58";

export const createLoginTx = async (wallet: WalletContextState) => {
  const pk = wallet.publicKey;

  if (!pk || !wallet.signMessage)
    throw new Error("Wallet does not support signMessage");

  const { data } = await axios.get(`/auth/code/${pk.toBase58()}`);

  const loginSignMessage = "Login to #RivalZ";
  const msg = new TextEncoder().encode(`${loginSignMessage} ${data.code}`);
  const signed = await wallet.signMessage(msg);

  await axios.post(`/auth/login/${pk.toBase58()}`, {
    signature: encode(signed),
  });
};
