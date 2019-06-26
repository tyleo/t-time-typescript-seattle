import { IItem } from "./IItem";
import { Mage } from "./Mage";

export interface ISpell extends IItem {
  spellName: string;
  use(user: Mage, useOn: Mage): void;
}

//

export const LightningSpell: ISpell = {
  spellName: "Lightning",
  use(user: Mage, useOn: Mage) {
    user.magic -= 2;
    useOn.health -= Math.max(user.power - useOn.defense, 0);
    useOn.stunned = true;
  }
};

export const FireSpell: ISpell = {
  spellName: "Fire",
  use(user: Mage, useOn: Mage) {
    user.magic -= 3;
    useOn.health -= Math.max(user.power * 2 - useOn.defense, 1);
  }
};

export const SlowSpell: ISpell = {
  spellName: "Slow",
  use(user: Mage, useOn: Mage) {
    user.magic -= 2;
    useOn.speed -= 1;
    useOn.speed = Math.max(useOn.speed, 1);
  }
};

export const TinySpell: ISpell = {
  spellName: "Tiny",
  use(user: Mage, useOn: Mage) {
    user.magic -= 2;
    useOn.power -= 1;
    useOn.power = Math.max(useOn.power, 1);
  }
};
