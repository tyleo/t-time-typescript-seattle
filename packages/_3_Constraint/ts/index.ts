import * as Magic from "Magic";
import * as Types from "./Types";

const darkMage = new Types.Mage("Dark Mage");
const lightMage = new Types.Mage("Light Mage");

lightMage.potions.pickUp(Magic.DefensePotion);
darkMage.potions.pickUp(Magic.DefensePotion);

lightMage.spells.pickUp(Magic.LightningSpell);
darkMage.spells.pickUp(Magic.LightningSpell);

lightMage.spells.use(spell => spell.use(lightMage, darkMage));
lightMage.potions.use(potion => potion.use(lightMage, lightMage));
