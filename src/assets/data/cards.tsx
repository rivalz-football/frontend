import {
  BeginnerCard,
  LegendaryCard,
  ProfessionalCard,
  SemiProCard,
} from "assets/images";

import { IChooseCard, CardType } from "assets/types";

export const cards: IChooseCard[] = [
  {
    image: BeginnerCard,
    name: CardType.BEGINNER,
    isAvailable: true,
    count: 2,
  },
  {
    image: SemiProCard,
    name: CardType.SEMI_PRO,
    isAvailable: true,
    count: 1,
  },
  {
    image: ProfessionalCard,
    name: CardType.PROFESSIONAL,
    isAvailable: false,
    count: 0,
  },
  {
    image: LegendaryCard,
    name: CardType.LEGENDARY,
    isAvailable: false,
    count: 0,
  },
];
