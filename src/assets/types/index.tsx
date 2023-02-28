import { StaticImageData } from "next/image";

export enum CardType {
  BEGINNER = "BEGINNER",
  SEMI_PRO = "SEMI-PRO",
  PROFESSIONAL = "PROFESSIONAL",
  LEGENDARY = "LEGENDARY",
}

export enum PlayerPosition {
  GOALKEEPER = "GOALKEEPER",
  DEFENDER = "DEFENDER",
  MIDFIELDER = "MIDFIELDER",
  FORWARD = "FORWARD",
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

export type IPlayerCard = {
  id: number;
  position: string;
  positionActive: boolean;
  IsAvailable: boolean;
  playerName: string;
  isSelect: boolean;
};

export type PlayerCardPropsType = {
  player: IPlayerCard;
  count?: number;
  setcount?: (count: number) => void;
  isSelectable: boolean;
};
