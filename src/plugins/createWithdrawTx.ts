import { AnchorWallet } from "@solana/wallet-adapter-react";
import { Transaction } from "@solana/web3.js";
import axios from "./axios";

export const createWithdrawTx = async (
  wallet: AnchorWallet,
  mintAddress: string,
  amount: Number
) => {
  const pk = wallet.publicKey;

  const { unsignedTx } = (
    await axios.post("/web3/create-withdraw", {
      mintAddress,
      pk: pk.toBase58(),
      amount,
    })
  ).data;

  const uParseTx = Transaction.from(Buffer.from(unsignedTx, "base64"));

  const tx = await wallet.signTransaction(uParseTx);

  const txBase64 = Buffer.from(
    tx.serialize({ verifySignatures: false })
  ).toString("base64");

  const { confirmedTx } = (
    await axios.post("/web3/verify-withdraw", {
      pk: pk.toBase58(),
      tx: txBase64,
      amount,
      mintAddress,
    })
  ).data;
};
