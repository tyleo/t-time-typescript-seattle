import { Mage } from "./Mage";

export interface IItem {
  use(user: Mage, useOn: Mage): void;
}
