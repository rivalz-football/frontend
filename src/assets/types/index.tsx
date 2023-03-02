import { StaticImageData } from "next/image";

export enum PlayerCardType {
  BEGINNER = "BEGINNER",
  SEMI_PRO = "SEMI-PRO",
  PROFESSIONAL = "PROFESSIONAL",
  LEGENDARY = "LEGENDARY",
}

/* Player Card */
export interface IPlayerCard {
  _id: string;
  key: string;
  name: string;
  image: string;
  choiceCount: number;
  currentCount?: number;
  publicKeys: string[];
}

export enum PlayerPosition {
  GOALKEEPER = "Goalkeeper",
  DEFENDER = "Defender",
  MIDFIELDER = "Midfielder",
  FORWARD = "Forward",
}

export const PlayerPositionContext = {
  [PlayerPosition.GOALKEEPER]: {
    text: "Goalkeeper",
    shortText: "GK",
  },
  [PlayerPosition.DEFENDER]: {
    text: "Defender",
    shortText: "DEF",
  },
  [PlayerPosition.MIDFIELDER]: {
    text: "Midfielder",
    shortText: "MID",
  },
  [PlayerPosition.FORWARD]: {
    text: "Forward",
    shortText: "FWD",
  },
};

/* IPlayer */

interface IDetails {
  [key: string]: any;
}
export interface IPlayer {
  _id: string;
  key: string;
  name?: string;
  image?: string;
  position?: PlayerPosition;
  shortPosition?: string;
  details: IDetails;
}

export type IChooseCard = {
  image: StaticImageData;
  name: string;
  isAvailable: boolean;
  count: number;
};

/* LEADERBOARD TYPO */
export type ILeaderboardUser = {
  name: string;
  point: number;
  rank: number;
};

export type ILeaderboard = {
  others: ILeaderboardUser[];
  me: ILeaderboardUser;
};

type ILeaderboardColor = {
  [key: number]: string;
};

export const LeaderboardUserColor: ILeaderboardColor = {
  1: "#EC068D",
  2: "#A60A47",
  3: "#600001",
  4: "#6A6C69",
  5: "#6A6C69",
};

/* top player of week */
export type IPlayerOfWeek = {
  name: string;
  lastName: string;
  position: string;
  image: string;
  score: number;
};

/* Transfer Histories */
export type ITransferHistory = {
  username: string;
  playerName: string;
};

export type IActivityHistory = {
  username: string;
  playerName: string;
  box: string;
  playerColor: string;
};

interface NavItem {
  label: string;
  subLabel?: string;
  children?: Array<NavItem>;
  href?: string;
}

export type IWizardForSeasonHeader = {
  label: string;
  href: string;
};

// export type IPlayer = {
//   id: number;
//   position: string;
//   positionActive: boolean;
//   IsAvailable: boolean;
//   playerName: string;
//   isSelect: boolean;
// };

export type PlayerPropsType = {
  player: IPlayer;
  count?: number;
  setcount?: (count: number) => void;
  isSelectable: boolean;
};

/* User */

export interface IUser {
  id: string;
  displayName: string;
  sanitizePublicKey: string;
  avatar: string;
  isAdmin: boolean;
}

export interface IPlayerConfig {
  count: number;
  isSelectCompleted: boolean;
  playersToSelect: number;
}

export interface IStatus {
  isStaked: boolean;
  playersConfig?: {
    [key in PlayerPosition]: IPlayerConfig;
  };
}
