import * as Magic from "Magic";
import * as Types from "./Types";

const blackMage = new Types.Mage("Black Mage");
const whiteMage = new Types.Mage("White Mage");

whiteMage.potions.pickUp(Magic.DefensePotion);
blackMage.potions.pickUp(Magic.DefensePotion);

whiteMage.spells.pickUp(Magic.LightningSpell);
blackMage.spells.pickUp(Magic.LightningSpell);

whiteMage.spells.use(blackMage);
whiteMage.potions.use(whiteMage);
