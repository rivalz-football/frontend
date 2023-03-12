import * as anchor from "@project-serum/anchor";
import { ACCOUNT_DISCRIMINATOR_SIZE, Program } from "@project-serum/anchor";
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

  getGameHistory = async (gameId: PublicKey) => {
    // const game = await this.program.account.game.fetch(gameId);
    // const history = await this.program.account.gameHistory.all(gameId);
    // return history;
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

    const tx = await this.program.methods
      .play(position, corner, new BN(betAmount * LAMPORTS_PER_SOL))
      .accounts(accountsContext)
      .signers([gameMatchAccount])
      .rpc();

    console.log(tx);

    const result = await this.program.account.gameMatch.fetch(
      gameMatchAccount.publicKey
    );

    // [211,14,169,46,191,216,160,164,237,45,164,3,175,76,125,172,253,152,246,35,211,6,59,14,63,190,129,49,206,62,146,169,8,175,245,145,160,209,62,144,98,1,144,2,131,131,102,245,123,61,252,66,99,121,208,87,238,29,98,56,72,114,43,46]
    const admin = anchor.web3.Keypair.fromSecretKey(
      new Uint8Array([
        211, 14, 169, 46, 191, 216, 160, 164, 237, 45, 164, 3, 175, 76, 125,
        172, 253, 152, 246, 35, 211, 6, 59, 14, 63, 190, 129, 49, 206, 62, 146,
        169, 8, 175, 245, 145, 160, 209, 62, 144, 98, 1, 144, 2, 131, 131, 102,
        245, 123, 61, 252, 66, 99, 121, 208, 87, 238, 29, 98, 56, 72, 114, 43,
        46,
      ])
    );

    await this.program.methods
      .resultGameMatch()
      .accounts({
        player: result.player.toBase58(),
        game,
        gameMatch: gameMatchAccount.publicKey.toBase58(),
        admin: new PublicKey(admin.publicKey.toBase58()),
        recentBlockhashes: anchor.web3.SYSVAR_RECENT_BLOCKHASHES_PUBKEY,
        systemProgram: SystemProgram.programId,
      })
      .signers([admin])
      .rpc();

    return result;
  };

  // getGameList = async (params: GetGamesParams = {}) => {
  //   const { status, tag } = params;
  //   const statusValue = (() => {
  //     switch (status) {
  //       case GameStatusEnum.DRAFT:
  //         return 0;
  //       case GameStatusEnum.ACTIVE:
  //         return 1;
  //       case GameStatusEnum.FINALIZED:
  //         return 2;
  //       case GameStatusEnum.FROZEN:
  //         return 1;
  //       default:
  //         return undefined;
  //     }
  //   })();

  //   const filters: GetProgramAccountsFilter[] = [
  //     {
  //       memcmp: this.program.coder.accounts.memcmp("Game"),
  //     },
  //   ];

  //   if (statusValue !== undefined) {
  //     filters.push({
  //       memcmp: {
  //         offset: ACCOUNT_DISCRIMINATOR_SIZE,
  //         bytes: bs58.encode([statusValue]),
  //       },
  //     });
  //   }

  //   if (tag !== undefined) {
  //     filters.push({
  //       memcmp: {
  //         offset: ACCOUNT_DISCRIMINATOR_SIZE + 1,
  //         bytes: bs58.encode([tag]),
  //       },
  //     });
  //   }

  // }
}
