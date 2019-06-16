import * as Magic from "Magic";

export class ItemCollection {
  constructor(private isConsumable: boolean) {}
  private items: any[] = [];

  pickUp(item: any) {
    this.items.push(item);
  }

  use(callback: (item: any) => void) {
    const randomIndex = Magic.getRandomIndex(this.items);
    const item = this.isConsumable
      ? this.items.splice(randomIndex, 1)[0]
      : this.items[randomIndex];
    if (item) {
      callback(item);
    }
  }
}

export class Player extends Magic.Player {
  spells = new ItemCollection(false);
  potions = new ItemCollection(true);
}
