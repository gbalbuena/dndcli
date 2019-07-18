import d from '../datastore'

export function getModifier(abilityScore) {
  const collection = d.core().modifiers;
  const score = collection.find((v) => v.score.includes(abilityScore)).modifier;
  return parseInt(score);
}

function doAttackRoll(d20, modifier, atkBonus) {
  return d20 + modifier + atkBonus;
}

export default {
  getModifier,
  doAttackRoll
}