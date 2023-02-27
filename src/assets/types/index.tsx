import { StaticImageData } from "next/image";

export enum CardType {
  BEGINNER = "BEGINNER",
  SEMI_PRO = "SEMI-PRO",
  PROFESSIONAL = "PROFESSIONAL",
  LEGENDARY = "LEGENDARY",
}

export type IChooseCard = {
  image: StaticImageData;
  name: string;
  isAvailable: boolean;
  count: number;
};
