import * as Magic from "Magic";
import * as Types from "./Types";

const blackMage = new Types.Player("Black Mage");
const whiteMage = new Types.Player("White Mage");

whiteMage.potions.pickUp(Magic.DefensePotion);
blackMage.potions.pickUp(Magic.DefensePotion);

whiteMage.spells.pickUp(Magic.LightningSpell);
blackMage.spells.pickUp(Magic.LightningSpell);

whiteMage.spells.use(spell => spell.use(whiteMage, blackMage));
whiteMage.potions.use(potion => potion.use(whiteMage, blackMage));

// Generics will also solve the problem and we don't have to duplicate code to do it.
// whiteMage.potions.pickUp(Magic.FireSpell);
// blackMage.potions.pickUp(Magic.FireSpell);
