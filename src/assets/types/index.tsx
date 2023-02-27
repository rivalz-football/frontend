import { StaticImageData } from "next/image";

export type CardItemType = {
    image: StaticImageData;
    name: string;
    isAvailable: boolean;
    amount: number;
  };
export type CardPropsType = {
    card: {
      image: StaticImageData;
      name: string;
      isAvailable: boolean;
      amount: number;
    };
  };
  
export  enum CardType {
    BEGINNER = "BEGINNER",
    SEMI_PRO = "SEMI-PRO",
    PROFESSIONAL = "PROFESSIONAL",
    LEGENDARY = "LEGENDARY",
  }

