import { ILeaderboard, IWizardForSeasonHeader, PlaysType } from "assets/types";

export const SIDEBAR_WIDTH_SMALL = "75px";
export const SIDEBAR_WIDTH_FULL = "240px";
export const HEADER_HEIGHT = "70px";
export const FOOTER_HEIGHT = "50px";

export const SOL_MINT_ADDRESS = "11111111111111111111111111111111";

export const leaderboard: ILeaderboard = {
  others: [
    {
      name: "st1tch",
      point: 2353,
      rank: 1,
    },
    {
      name: "fazil",
      point: 2341,
      rank: 2,
    },
    {
      name: "cihat",
      point: 2000,
      rank: 3,
    },
    {
      name: "icy",
      point: 1000,
      rank: 4,
    },
    {
      name: "st1tch",
      point: 500,
      rank: 5,
    },
  ],
  me: {
    name: "st1tch",
    point: 100,
    rank: 2353,
  },
};

export const wizardForSeasonHeader: IWizardForSeasonHeader[] = [
  {
    label: "Home",
    href: "/",
  },
  {
    label: "Leaderboard",
    href: "/leaderboard",
  },
  {
    label: "Transfers",
    href: "/transfers",
  },
  {
    label: "Goal Flip",
    href: "/goal-flip",
  },
];

export const fakePlays: PlaysType[] = [
  {
    username: "Daggex",
    cornerSide: "left",
    position: "right",
    time: 10,
  },
  {
    username: "Daggex",
    cornerSide: "left",
    position: "right",
    time: 10,
  },
  {
    username: "Daggex",
    cornerSide: "right",
    position: "right",
    time: 10,
  },
  {
    username: "Daggex",
    cornerSide: "right",
    position: "right",
    time: 10,
  },
  {
    username: "Daggex",
    cornerSide: "right",
    position: "right",
    time: 10,
  },
  {
    username: "Daggex",
    cornerSide: "right",
    position: "right",
    time: 10,
  },
  {
    username: "Daggex",
    cornerSide: "right",
    position: "right",
    time: 10,
  },
  {
    username: "Daggex",
    cornerSide: "right",
    position: "right",
    time: 10,
  },
  {
    username: "Daggex",
    cornerSide: "right",
    position: "right",
    time: 10,
  },
  {
    username: "Daggex",
    cornerSide: "right",
    position: "right",
    time: 10,
  },
];
