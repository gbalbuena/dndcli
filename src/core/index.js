import datastore from '../datastore/index';

function ac({
  armorId = 'no_armor',
  dexterity_modifier = 0,
  constitution_modifier = 0,
  wisdom_modifier = 0,
  shield = false,
  half_cover = false
} ) {
  const armorItem = datastore.armor.find((armor) => armor.id === armorId);

  if (armorItem.type === 'Medium Armor' && dexterity_modifier > 2) {
    dexterity_modifier = 2; // max dex = 2
  }

  if (armorItem.type === 'Heavy Armor') {
    dexterity_modifier = 0; // ignore dex
  }

  let ac_total = armorItem.ac;

  armorItem.modifier.forEach((mod) => {
    if (mod === 'dexterity') {
      ac_total = ac_total + dexterity_modifier;
    }
    if (mod === 'constitution') {
      ac_total = ac_total + constitution_modifier;
    }
    if (mod === 'wisdom') {
      ac_total = ac_total + wisdom_modifier;
    }
  });

  if (half_cover) {
    ac_total = ac_total + 2;
  }

  if (shield) {
    ac_total = ac_total + 2;
  }
  return ac_total;
}

module.exports = {
  ac
}
