import * as Magic from "Magic";

export class ItemCollection<T extends Magic.IItem> {
  constructor(private isConsumable: boolean, private user: Mage) {}
  private items: T[] = [];

  pickUp(item: T) {
    this.items.push(item);
  }

  length() {
    return this.items.length;
  }

  use(useOn: Mage) {
    const randomIndex = Magic.getRandomIndex(this.items);
    const item = this.isConsumable
      ? this.items.splice(randomIndex, 1)[0]
      : this.items[randomIndex];
    if (item) {
      item.use(this.user, useOn);
    }
  }
}

export class Mage extends Magic.Mage {
  spells = new ItemCollection<Magic.ISpell>(false, this);
  potions = new ItemCollection<Magic.IPotion>(true, this);
}
