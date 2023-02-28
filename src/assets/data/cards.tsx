import {
  BeginnerCardImage,
  LegendaryCardImage,
  ProfessionalCardImage,
  SemiProCardImage,
} from "assets/images";

import { IChooseCard, CardType } from "assets/types";

export const cards: IChooseCard[] = [
  {
    image: BeginnerCardImage,
    name: CardType.BEGINNER,
    isAvailable: true,
    count: 2,
  },
  {
    image: SemiProCardImage,
    name: CardType.SEMI_PRO,
    isAvailable: true,
    count: 1,
  },
  {
    image: ProfessionalCardImage,
    name: CardType.PROFESSIONAL,
    isAvailable: false,
    count: 0,
  },
  {
    image: LegendaryCardImage,
    name: CardType.LEGENDARY,
    isAvailable: false,
    count: 0,
  },
];
