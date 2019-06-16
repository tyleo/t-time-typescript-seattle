import { Player } from "./Player";

export interface IItem {
  use(user: Player, useOn: Player): void;
}
