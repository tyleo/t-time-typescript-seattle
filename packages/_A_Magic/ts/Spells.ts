import { IItem } from "./IItem";
import { Player } from "./Player";

export interface ISpell extends IItem {
  spellName: string;
  use(user: Player, useOn: Player): void;
}

//

export const LightningSpell: ISpell = {
  spellName: "Lightning",
  use(user: Player, useOn: Player) {
    user.magic -= 2;
    useOn.health -= Math.max(user.power - useOn.defense, 0);
    useOn.stunned = true;
  }
};

export const FireSpell: ISpell = {
  spellName: "Fire",
  use(user: Player, useOn: Player) {
    user.magic -= 3;
    useOn.health -= Math.max(user.power * 2 - useOn.defense, 1);
  }
};

export const SlowSpell: ISpell = {
  spellName: "Slow",
  use(user: Player, useOn: Player) {
    user.magic -= 2;
    useOn.speed -= 1;
    useOn.speed = Math.max(useOn.speed, 1);
  }
};

export const TinySpell: ISpell = {
  spellName: "Tiny",
  use(user: Player, useOn: Player) {
    user.magic -= 2;
    useOn.power -= 1;
    useOn.power = Math.max(useOn.power, 1);
  }
};
