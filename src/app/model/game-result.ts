import {Choice} from "./choice";

export class GameResult {
  playerChoice: Choice | undefined;
  computerChoice: Choice | undefined;
  winner!: string;

}
