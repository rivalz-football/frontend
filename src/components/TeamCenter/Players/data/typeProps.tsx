import { PlayersData } from "./players";

export type MyTeamTypes = {
  id: number;
  image: string;
  name: string;
  position: string;
};

export type PlayerCardPropsType = {
  player: MyTeamTypes;
};

export const TeamPlayers: MyTeamTypes[] = [
  {
    id: PlayersData[0].id,
    image: PlayersData[0].photo,
    name: PlayersData[0].name,
    position: PlayersData[0].position_name,
  },
  {
    id: PlayersData[1].id,
    image: PlayersData[1].photo,
    name: PlayersData[1].name,
    position: PlayersData[1].position_name,
  },
  {
    id: PlayersData[2].id,
    image: PlayersData[2].photo,
    name: PlayersData[2].name,
    position: PlayersData[2].position_name,
  },
  {
    id: PlayersData[3].id,
    image: PlayersData[3].photo,
    name: PlayersData[3].name,
    position: PlayersData[3].position_name,
  },
  {
    id: PlayersData[4].id,
    image: PlayersData[4].photo,
    name: PlayersData[4].name,
    position: PlayersData[4].position_name,
  },
  {
    id: PlayersData[5].id,
    image: PlayersData[5].photo,
    name: PlayersData[5].name,
    position: PlayersData[5].position_name,
  },
  {
    id: PlayersData[6].id,
    image: PlayersData[6].photo,
    name: PlayersData[6].name,
    position: PlayersData[6].position_name,
  },
  {
    id: PlayersData[7].id,
    image: PlayersData[7].photo,
    name: PlayersData[7].name,
    position: PlayersData[7].position_name,
  },
  {
    id: PlayersData[8].id,
    image: PlayersData[8].photo,
    name: PlayersData[8].name,
    position: PlayersData[8].position_name,
  },
];
