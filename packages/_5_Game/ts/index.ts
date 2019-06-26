import * as Magic from "Magic";
import * as Types from "./Types";

const msToAttack = 2000;

let darkCounter = 0;
const darkMage = new Types.Mage("Dark Mage");
let lightCounter = 0;
const lightMage = new Types.Mage("Light Mage");

const stepMage = (active: Types.Mage, target: Types.Mage) => {
  if (Math.random() > 0.75) {
    // Pick up potion
    const potion = Magic.Potions[Magic.getRandomIndex(Magic.Potions)];
    console.log(`The ${active.name} picked up a ${potion.potionName}.`);
    active.potions.pickUp(potion);
  } else {
    if (Math.random() > 0.8 && active.potions.length() > 0) {
      active.potions.use(active);
    } else {
      active.spells.use(target);
    }
  }
};

const runGame = () => {
  lightCounter += lightMage.speed;
  darkCounter += darkMage.speed;
  if (lightCounter > msToAttack) {
    stepMage(lightMage, darkMage);
    lightCounter = 0;
    lightMage.print();
    darkMage.print();
    console.log();
  }
  if (darkCounter > msToAttack) {
    stepMage(darkMage, lightMage);
    darkCounter = 0;
    lightMage.print();
    darkMage.print();
    console.log();
  }

  if (lightMage.health > 0 && darkMage.health > 0) {
    setTimeout(() => runGame(), 10);
  } else {
    if (lightMage.health > 0) {
      console.log("Game over! The light mage wins!");
    } else {
      console.log("Game over! The dark mage wins!");
    }
  }
};

lightMage.spells.pickUp(Magic.FireSpell);
darkMage.spells.pickUp(Magic.FireSpell);

runGame();
