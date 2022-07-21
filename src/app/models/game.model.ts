import { GAME_CATEGORY } from './nav.model';

export interface Game {
  categories: string[];
  name: string;
  image: string;
  id: string;
}
