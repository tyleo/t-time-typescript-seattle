import * as Magic from "Magic";

export class SpellCollection {
  constructor(private isConsumable: boolean) {}
  private items: Magic.ISpell[] = [];

  pickUp(item: Magic.ISpell) {
    this.items.push(item);
  }

  use(callback: (potions: Magic.ISpell) => void) {
    const randomIndex = Magic.getRandomIndex(this.items);
    const item = this.isConsumable
      ? this.items.splice(randomIndex, 1)[0]
      : this.items[randomIndex];
    if (item) {
      callback(item);
    }
  }
}

export class PotionCollection {
  constructor(private isConsumable: boolean) {}
  private items: Magic.IPotion[] = [];

  pickUp(item: Magic.IPotion) {
    this.items.push(item);
  }

  use(callback: (potions: Magic.IPotion) => void) {
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
  spells = new SpellCollection(false);
  potions = new PotionCollection(true);
}
