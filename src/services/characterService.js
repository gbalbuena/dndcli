import data from '../data'

function sayHi() {
  const c = {
    id: 'evil-wizard',
    name: 'Evil Wizard',
    classType: 'human'
  };

  return `Hi ${c.name}`;
}

export async function getModifier(abilityScore) {
  const collection = await data.abilityScoresAndModifiers.getAll();
  return collection.find((v) => v.score.includes(abilityScore)).modifier;
}

function doAttackRoll(d20, modifier, atkBonus) {
  return d20 + modifier + atkBonus;
}

export default {
  sayHi,
  doAttackRoll
}
