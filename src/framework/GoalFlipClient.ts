import * as anchor from "@project-serum/anchor";
import {
  ACCOUNT_DISCRIMINATOR_SIZE,
  Program,
  ProgramAccount,
} from "@project-serum/anchor";
import {
  GetProgramAccountsFilter,
  Keypair,
  LAMPORTS_PER_SOL,
  PublicKey,
  SystemProgram,
  TransactionInstruction,
} from "@solana/web3.js";
import { BN } from "bn.js";
import _, { orderBy } from "lodash";
import bs58 from "bs58";
import { GoalFlip } from "plugins/GoalFlip";
import axios from "plugins/axios";
// import { isAfter, isBefore } from "date-fns";
// import slugify from "slugify";

export enum Position {
  Goalkeeper = "Goalkeeper",
  Forward = "Forward",
}

export enum Corner {
  Left = "Left",
  Right = "Right",
}

export interface PlayGameParams {
  position: Position;
  corner: Corner;
  betAmount: number;
  game: string;
  admin: string;
}

type OriginalGameMatch = Awaited<
  ReturnType<Program<GoalFlip>["account"]["gameMatch"]["fetch"]>
>;

enum GameMatchStatus {
  Pending = "Pending",
  Won = "Won",
  Lost = "Lost",
}

export type GameMatch = {
  address: string;
  player: string;
  won: Boolean;
  position: Position;
  playerCorner: Corner;
  betAmount: number;
  commissionAmount: number;
  wonAmount: number;
  createdAt: number;
};

export class GoalFlipClient {
  public provider: anchor.AnchorProvider;
  public program: Program<GoalFlip>;

  constructor(program: Program<GoalFlip>) {
    this.program = program;
    this.provider = program.provider as anchor.AnchorProvider;
  }

  getBalance = async () => {
    const publicKey = this.program.provider.publicKey;
    if (publicKey) {
      return (
        (await this.program.provider.connection.getBalance(publicKey)) /
        LAMPORTS_PER_SOL
      );
    }
  };

  getGameHistory = async (gameId: PublicKey): Promise<GameMatch[]> => {
    const filters: GetProgramAccountsFilter[] = [
      {
        memcmp: {
          offset: ACCOUNT_DISCRIMINATOR_SIZE,
          bytes: gameId.toBase58(),
        },
      },
    ];

    const prefetchedList = (await this.program.account.gameMatch.all(
      filters
    )) as ProgramAccount<OriginalGameMatch>[];

    const mappedPrefetchedList = prefetchedList.map((x) => {
      return {
        address: x.publicKey.toBase58(),
        player: x.account.player.toBase58(),
        createdAt: x.account.createdAt.toNumber(),
        won: x.account.won,
        position: x.account.position.forward
          ? Position.Forward
          : Position.Goalkeeper,
        playerCorner: x.account.playerCorner.left ? Corner.Left : Corner.Right,
        betAmount: x.account.betAmount.toNumber() / LAMPORTS_PER_SOL,
        commissionAmount:
          x.account.commissionAmount.toNumber() / LAMPORTS_PER_SOL,
        wonAmount: x.account.wonAmount.toNumber() / LAMPORTS_PER_SOL,
      };
    });

    const orderedPrefetchedList = orderBy(
      mappedPrefetchedList,
      (it) => it.createdAt,
      "desc"
    );

    return orderedPrefetchedList;
  };

  createGameMatchAccount = () => {
    return Keypair.generate();
  };

  play = async (data: PlayGameParams) => {
    const gameMatchAccount = this.createGameMatchAccount();
    const { position, corner, betAmount, game } = data;

    const accountsContext = {
      player: this.provider.wallet.publicKey.toBase58(),
      game,
      gameMatch: gameMatchAccount.publicKey.toBase58(),
      systemProgram: SystemProgram.programId,
    };

    await this.program.methods
      .play(position, corner, new BN(betAmount * LAMPORTS_PER_SOL))
      .accounts(accountsContext)
      .signers([gameMatchAccount])
      .rpc();

    const result = await this.program.account.gameMatch.fetch(
      gameMatchAccount.publicKey
    );

    await axios.post("/web3/result-game", {
      game: result.game.toBase58(),
      gameMatch: gameMatchAccount.publicKey.toBase58(),
      player: result.player.toBase58(),
    });
  };
}
