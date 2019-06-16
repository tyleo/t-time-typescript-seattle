import * as Magic from "Magic";

export class ItemCollection<T extends Magic.IItem> {
  constructor(private isConsumable: boolean, private user: Player) {}
  private items: T[] = [];

  pickUp(item: T) {
    this.items.push(item);
  }

  use(useOn: Player) {
    const randomIndex = Magic.getRandomIndex(this.items);
    const item = this.isConsumable
      ? this.items.splice(randomIndex, 1)[0]
      : this.items[randomIndex];
    if (item) {
      item.use(this.user, useOn);
    }
  }
}

export class Player extends Magic.Player {
  spells = new ItemCollection<Magic.ISpell>(false, this);
  potions = new ItemCollection<Magic.IPotion>(true, this);
}
