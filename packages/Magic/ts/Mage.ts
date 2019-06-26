export class Mage {
  health = 100;
  magic = 100;
  power = 1;
  defense = 1;
  speed = 10;
  stunned = false;

  constructor(public name: string) {}

  print() {
    console.log(
      `The ${this.name}'s stats are Health: ${this.health}, Magic: ${
        this.magic
      }, Power: ${this.power}, Defense: ${this.defense}, Speed: ${this.speed}`
    );
  }
}
