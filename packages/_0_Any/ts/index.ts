import * as Magic from "Magic";
import * as Types from "./Types";

const lightMage = new Types.Mage("Light Mage");
lightMage.potions.pickUp(Magic.DefensePotion);
lightMage.spells.pickUp(Magic.LightningSpell);
lightMage.potions.use(potion => potion.use(lightMage, lightMage));

// Problem: spells can be added to the potions and vice-versa
lightMage.potions.pickUp(Magic.FireSpell);
