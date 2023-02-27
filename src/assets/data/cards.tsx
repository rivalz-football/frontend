import {
  BeginnerCard,
  LegendaryCard,
  ProfessionalCard,
  SemiProCard,
} from "assets/images";
import {CardItemType, CardType} from "assets/types";


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
