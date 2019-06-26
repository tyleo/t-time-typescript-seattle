import * as Magic from "Magic";

export class ItemCollection {
  constructor(private isConsumable: boolean) {}
  private items: any[] = [];

  pickUp(item: any) {
    this.items.push(item);
  }

  use(callback: (item: any) => void) {
    const item = Magic.getRandomItem(this.items, this.isConsumable);
    if (item) {
      callback(item);
    }
  }
}

export class Mage extends Magic.Mage {
  spells = new ItemCollection(false);
  potions = new ItemCollection(true);
}
