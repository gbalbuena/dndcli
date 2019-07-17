import combatantService from './combatantService';

export function initiativeRoll(combatant, roll) {
  const modifier = combatantService.getModifier(combatant.abilityScore.dexterity);
  return modifier + roll;
}

export function startEncounter(combatantsAnd1d20Rolls) {
  return combatantsAnd1d20Rolls.sort((ca, cb) =>
    initiativeRoll(ca.combatant, cb.roll) - initiativeRoll(cb.combatant, cb.roll));
}

export default {
}
