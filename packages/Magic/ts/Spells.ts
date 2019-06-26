import { IItem } from "./IItem";
import { Mage } from "./Mage";

export interface ISpell extends IItem {
  spellName: string;
  use(user: Mage, useOn: Mage): void;
}

const print = (user: Mage, spell: ISpell) =>
  console.log(`The ${user.name} used ${spell.spellName}!`);

//

export const LightningSpell: ISpell = {
  spellName: "Lightning",
  use(user: Mage, useOn: Mage) {
    user.magic -= 2;
    useOn.health -= Math.max(user.power - useOn.defense, 0);
    useOn.stunned = true;
    print(user, LightningSpell);
  }
};

export const FireSpell: ISpell = {
  spellName: "Fire",
  use(user: Mage, useOn: Mage) {
    user.magic -= 3;
    useOn.health -= Math.max(user.power * 2 - useOn.defense, 1);
    print(user, FireSpell);
  }
};

export const SlowSpell: ISpell = {
  spellName: "Slow",
  use(user: Mage, useOn: Mage) {
    user.magic -= 2;
    useOn.speed -= 1;
    useOn.speed = Math.max(useOn.speed, 1);
    print(user, SlowSpell);
  }
};

export const TinySpell: ISpell = {
  spellName: "Tiny",
  use(user: Mage, useOn: Mage) {
    user.magic -= 2;
    useOn.power -= 1;
    useOn.power = Math.max(useOn.power, 1);
    print(user, TinySpell);
  }
};

export const Spells = [LightningSpell, FireSpell, SlowSpell, TinySpell];
