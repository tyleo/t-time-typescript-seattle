import { IItem } from "./IItem";
import { Player } from "./Player";

export interface IPotion extends IItem {
  potionName: string;
  use(user: Player, useOn: Player): void;
}

///

export const PowerPotion: IPotion = {
  potionName: "Power Potion",
  use(_user: Player, useOn: Player) {
    useOn.power += 1;
  }
};

export const HealthPotion: IPotion = {
  potionName: "Health Potion",
  use(_user: Player, useOn: Player) {
    useOn.health += 5;
  }
};

export const MagicPotion: IPotion = {
  potionName: "Health Potion",
  use(_user: Player, useOn: Player) {
    useOn.magic += 5;
  }
};

export const DefensePotion: IPotion = {
  potionName: "Defense Potion",
  use(_user: Player, useOn: Player) {
    useOn.defense += 1;
  }
};

export const FastPotion: IPotion = {
  potionName: "Fast Potion",
  use(_user: Player, useOn: Player) {
    useOn.speed += 1;
  }
};

export const SwapHealthAndMagicPotion: IPotion = {
  potionName: "Swap Health and Magic Potion",
  use(_user: Player, useOn: Player) {
    const temp = useOn.magic;
    useOn.magic = useOn.health;
    useOn.health = temp;
  }
};
