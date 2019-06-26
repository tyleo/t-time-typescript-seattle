import * as Magic from "Magic";
import * as Types from "./Types";

const whiteMage = new Types.Mage("White Mage");
whiteMage.potions.pickUp(Magic.DefensePotion);
whiteMage.spells.pickUp(Magic.LightningSpell);
whiteMage.potions.use(potion => potion.use(whiteMage, whiteMage));

// Problem: spells can be added to the potions and vice-versa
whiteMage.potions.pickUp(Magic.FireSpell);
