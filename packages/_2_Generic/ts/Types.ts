import * as Magic from "Magic";

export class ItemCollection<T> {
  constructor(private isConsumable: boolean) {}
  private items: T[] = [];

  pickUp(item: T) {
    this.items.push(item);
  }

  use(callback: (item: T) => void) {
    const randomIndex = Magic.getRandomIndex(this.items);
    const item = this.isConsumable
      ? this.items.splice(randomIndex, 1)[0]
      : this.items[randomIndex];
    if (item) {
      callback(item);
    }
  }
}

export class Mage extends Magic.Mage {
  spells = new ItemCollection<Magic.ISpell>(false);
  potions = new ItemCollection<Magic.IPotion>(true);

  // Problem, item collections can contain anything.
  // We may have errors later if we add an incorret item type.
  numbers = new ItemCollection<number>(true);
}
