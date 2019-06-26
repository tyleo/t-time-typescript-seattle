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
    useOn.health -= Math.max(user.power * 5, 1);
    useOn.stunned = true;
    print(user, LightningSpell);
  }
};

export const FireSpell: ISpell = {
  spellName: "Fire",
  use(user: Mage, useOn: Mage) {
    user.magic -= 3;
    useOn.speed += 1;
    useOn.health -= Math.max(user.power * 7 - useOn.defense, 1);
    print(user, FireSpell);
  }
};

export const IceSpell: ISpell = {
  spellName: "Ice",
  use(user: Mage, useOn: Mage) {
    user.magic -= 2;
    useOn.speed -= 1;
    useOn.speed = Math.max(useOn.speed, 1);
    useOn.health -= Math.max(user.power * 2 - useOn.defense / 2, 1);
    print(user, IceSpell);
  }
};

export const Spells = [LightningSpell, FireSpell, IceSpell];
