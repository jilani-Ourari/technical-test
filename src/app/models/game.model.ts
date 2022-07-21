import { GAME_CATEGORY } from './nav.model';

export interface Game {
  categories: string[];
  name: string;
  image: string;
  id: string;
  amount?: number;
}
export interface Jackpot {
  game: string;
  amount: number;
}
