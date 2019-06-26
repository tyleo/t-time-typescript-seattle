import { IItem } from "./IItem";
import { Mage } from "./Mage";

export interface IPotion extends IItem {
  potionName: string;
  use(user: Mage, useOn: Mage): void;
}

const print = (useOn: Mage, potion: IPotion) =>
  console.log(`The ${useOn.name} used a ${potion.potionName}!`);

///

export const PowerPotion: IPotion = {
  potionName: "Power Potion",
  use(_user: Mage, useOn: Mage) {
    useOn.power += 1;
    print(useOn, PowerPotion);
  }
};

export const HealthPotion: IPotion = {
  potionName: "Health Potion",
  use(_user: Mage, useOn: Mage) {
    useOn.health += 5;
    print(useOn, HealthPotion);
  }
};

export const MagicPotion: IPotion = {
  potionName: "Health Potion",
  use(_user: Mage, useOn: Mage) {
    useOn.magic += 5;
    print(useOn, MagicPotion);
  }
};

export const DefensePotion: IPotion = {
  potionName: "Defense Potion",
  use(_user: Mage, useOn: Mage) {
    useOn.defense += 1;
    print(useOn, DefensePotion);
  }
};

export const FastPotion: IPotion = {
  potionName: "Fast Potion",
  use(_user: Mage, useOn: Mage) {
    useOn.speed += 1;
    print(useOn, FastPotion);
  }
};

export const SwapHealthAndMagicPotion: IPotion = {
  potionName: "Swap Health and Magic Potion",
  use(_user: Mage, useOn: Mage) {
    const temp = useOn.magic;
    useOn.magic = useOn.health;
    useOn.health = temp;
    print(useOn, SwapHealthAndMagicPotion);
  }
};

export const Potions = [
  PowerPotion,
  HealthPotion,
  MagicPotion,
  DefensePotion,
  FastPotion,
  SwapHealthAndMagicPotion
];
