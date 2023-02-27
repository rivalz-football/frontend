import {
  BeginnerCard,
  LegendaryCard,
  ProfessionalCard,
  SemiProCard,
} from "assets/images";
import { StaticImageData } from "next/image";
export type CardItemType = {
  image: StaticImageData;
  name: string;
  isAvailable: boolean;
  amount: number;
};

enum CardType {
  BEGINNER = "BEGINNER",
  SEMI_PRO = "SEMI-PRO",
  PROFESSIONAL = "PROFESSIONAL",
  LEGENDARY = "LEGENDARY",
}

export const cards: CardItemType[] = [
  {
    image: BeginnerCard,
    name: CardType.BEGINNER,
    isAvailable: true,
    amount: 2,
  },
  { image: SemiProCard, name: CardType.SEMI_PRO, isAvailable: true, amount: 1 },
  {
    image: ProfessionalCard,
    name: CardType.PROFESSIONAL,
    isAvailable: false,
    amount: 0,
  },
  {
    image: LegendaryCard,
    name: CardType.LEGENDARY,
    isAvailable: false,
    amount: 0,
  },
];
